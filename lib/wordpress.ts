import type {
  WPPost,
  WPEvent,
  WPMultimedia,
  WPCategory,
  Article,
  Event,
  MultimediaItem
} from "./wordpress-types";

const WP_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL ?? "";
const API = `${WP_URL}/wp-json/wp/v2`;

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#8216;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8218;/g, "‚")
    .replace(/&#8220;/g, "\u201C")
    .replace(/&#8221;/g, "\u201D")
    .replace(/&#8230;/g, "…")
    .replace(/&hellip;/g, "…")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function formatDate(isoDate: string, locale: string = "es"): string {
  const d = new Date(isoDate);

  const monthsEs = [
    "Enero","Febrero","Marzo","Abril","Mayo","Junio",
    "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
  ];

  const monthsEn = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const monthsFr = [
    "Janvier","Février","Mars","Avril","Mai","Juin",
    "Juillet","Août","Septembre","Octobre","Novembre","Décembre"
  ];

  const monthsPt = [
    "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
    "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
  ];

  const months: Record<string, string[]> = {
    es: monthsEs,
    en: monthsEn,
    fr: monthsFr,
    pt: monthsPt
  };

  const m = months[locale] ?? monthsEs;

  if (locale === "en") {
    return `${m[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  }

  if (locale === "fr") {
    return `${d.getDate()} ${m[d.getMonth()]} ${d.getFullYear()}`;
  }

  if (locale === "pt") {
    return `${d.getDate()} de ${m[d.getMonth()]} de ${d.getFullYear()}`;
  }

  return `${d.getDate()} de ${m[d.getMonth()]}, ${d.getFullYear()}`;
}

function estimateReadTime(text: string): string {
  const words = text.split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min`;
}

function parseACFDate(dateStr: string): string {
  if (!dateStr) return "";

  if (dateStr.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
    const [day, month, year] = dateStr.split("/");
    return `${year}-${month}-${day}`;
  }

  if (dateStr.match(/^\d{8}$/)) {
    return `${dateStr.substring(0, 4)}-${dateStr.substring(4, 6)}-${dateStr.substring(6, 8)}`;
  }

  return dateStr;
}

// ─────────────────────────────────────────────
// NEWS
// ─────────────────────────────────────────────

export async function getNews(locale: string = "es"): Promise<Article[]> {
  try {
    const timestamp = new Date().getTime();
    const langParam = locale !== "es" ? `&lang=${locale}` : "";

    const res = await fetch(
      `${API}/posts?_embed&per_page=20&orderby=date&order=desc${langParam}&t=${timestamp}`,
      {
        cache: "no-store"
      }
    );

    if (!res.ok) {
      throw new Error(`WP API responded with ${res.status}`);
    }

    const posts: WPPost[] = await res.json();

    return posts
      .filter((post) => {
        if (locale === "es") {
          return !post.link.match(/\/(en|fr|pt)\//);
        }

        return post.link.includes(`/${locale}/`);
      })
      .map((post) => {
        const categories = post._embedded?.["wp:term"]?.[0] ?? [];
        const categoryName =
          categories.length > 0 ? categories[0].name : "General";

        const media = post._embedded?.["wp:featuredmedia"]?.[0];

        const imageUrl =
          media?.media_details?.sizes?.large?.source_url ??
          media?.source_url ??
          undefined;

        const plainExcerpt = decodeHtmlEntities(
          stripHtml(post.excerpt?.rendered || "")
        );

        const plainContent = stripHtml(post.content?.rendered || "");

        return {
          title: decodeHtmlEntities(
            stripHtml(post.title?.rendered || "")
          ),
          excerpt: plainExcerpt,
          date: formatDate(post.date, locale),
          category: categoryName,
          readTime: estimateReadTime(plainContent || plainExcerpt),
          slug: post.slug,
          imageUrl
        };
      });

  } catch (error) {
    console.error("Error fetching news from WordPress:", error);
    return [];
  }
}

// ─────────────────────────────────────────────
// EVENTS
// ─────────────────────────────────────────────

export async function getEvents(
  locale: string = "es"
): Promise<{ upcoming: Event[]; past: Event[] }> {

  try {
    const timestamp = new Date().getTime();
    const langParam = locale !== "es" ? `&lang=${locale}` : "";

    const res = await fetch(
      `${API}/eventos?_embed&per_page=50&orderby=date&order=desc${langParam}&t=${timestamp}`,
      {
        cache: "no-store"
      }
    );

    if (!res.ok) {
      throw new Error(`WP API responded with ${res.status}`);
    }

    const events: WPEvent[] = await res.json();

    const all: Event[] = events.map((ev) => {

      const acf = ev.acf ?? {} as WPEvent["acf"];

      const rawEventDate = acf.event_date || ev.date;

      const parsedDate = parseACFDate(rawEventDate);

      const media = ev._embedded?.["wp:featuredmedia"]?.[0];

      const imageUrl =
        media?.media_details?.sizes?.large?.source_url ??
        media?.source_url ??
        undefined;

      return {
        title: decodeHtmlEntities(
          stripHtml(ev.title?.rendered || "")
        ),

        date: formatDate(parsedDate, locale),

        location: acf.event_location || "Por definir",

        description: decodeHtmlEntities(
          stripHtml(
            ev.excerpt?.rendered ||
            ev.content?.rendered ||
            ""
          )
        ),

        content: ev.content?.rendered || "",

        featured: acf.is_featured ?? false,

        link: acf.event_link || "#",

        color: acf.is_featured ? "#582080" : "#000049",

        rawDate: parsedDate,

        slug: ev.slug,

        imageUrl
      };
    });

    const now = new Date();

    const todayStr =
      `${now.getFullYear()}-` +
      `${String(now.getMonth() + 1).padStart(2, "0")}-` +
      `${String(now.getDate()).padStart(2, "0")}`;

    const upcoming = all
      .filter((e) => e.rawDate >= todayStr)
      .sort((a, b) => a.rawDate.localeCompare(b.rawDate));

    const past = all
      .filter((e) => e.rawDate < todayStr)
      .sort((a, b) => b.rawDate.localeCompare(a.rawDate));

    return { upcoming, past };

  } catch (error) {
    console.error("Error fetching events from WordPress:", error);

    return {
      upcoming: [],
      past: []
    };
  }
}

// ─────────────────────────────────────────────
// MULTIMEDIA
// ─────────────────────────────────────────────

export async function getMultimedia(
  locale: string = "es"
): Promise<MultimediaItem[]> {

  try {
    const timestamp = new Date().getTime();
    const langParam = locale !== "es" ? `&lang=${locale}` : "";

    const res = await fetch(
      `${API}/multimedia?_embed&per_page=50&orderby=date&order=desc${langParam}&t=${timestamp}`,
      {
        cache: "no-store"
      }
    );

    if (!res.ok) {
      throw new Error(`WP API responded with ${res.status}`);
    }

    const items: WPMultimedia[] = await res.json();

    return items.map((item) => {

      const acf = item.acf ?? {} as WPMultimedia["acf"];

      const media = item._embedded?.["wp:featuredmedia"]?.[0];

      let imageUrl =
        media?.media_details?.sizes?.large?.source_url ??
        media?.source_url ??
        undefined;

      const getYouTubeId = (url: string) => {
        const match = url.match(
          /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
        );

        return match && match[2].length === 11
          ? match[2]
          : null;
      };

      if (!imageUrl && acf.video_url) {
        const videoId = getYouTubeId(acf.video_url);

        if (videoId) {
          imageUrl =
            `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        }
      }

      return {
        title: decodeHtmlEntities(
          stripHtml(item.title?.rendered || "")
        ),

        description: decodeHtmlEntities(
          stripHtml(
            item.excerpt?.rendered ||
            item.content?.rendered ||
            ""
          )
        ),

        type: acf.media_type || "foto",

        imageUrl,

        videoUrl: acf.video_url || undefined,

        duration: acf.video_duration || undefined,

        externalLink: acf.external_link || undefined,

        slug: item.slug
      };
    });

  } catch (error) {
    console.error("Error fetching multimedia from WordPress:", error);
    return [];
  }
}

// ─────────────────────────────────────────────
// CATEGORIES
// ─────────────────────────────────────────────

export async function getCategories(): Promise<WPCategory[]> {
  try {
    const timestamp = new Date().getTime();

    const res = await fetch(
      `${API}/categories?per_page=50&t=${timestamp}`,
      {
        cache: "no-store"
      }
    );

    if (!res.ok) {
      throw new Error(`WP API responded with ${res.status}`);
    }

    return res.json();

  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

// ─────────────────────────────────────────────
// ELEMENTOR CSS
// ─────────────────────────────────────────────

async function getElementorCssByUrl(
  url: string
): Promise<string[]> {

  try {
    const res = await fetch(url, {
      cache: "no-store"
    });

    if (!res.ok) return [];

    const html = await res.text();

    const cssRegex =
      /<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']*)["'][^>]*>/gi;

    const urls: string[] = [];

    let match;

    while ((match = cssRegex.exec(html)) !== null) {

      if (
        match[1].includes("elementor") ||
        match[1].includes("wp-content")
      ) {
        urls.push(match[1]);
      }
    }

    return [...new Set(urls)];

  } catch (error) {
    console.error("Error fetching Elementor CSS:", error);
    return [];
  }
}

// ─────────────────────────────────────────────
// GET PAGE BY SLUG
// ─────────────────────────────────────────────

export async function getPageBySlug(
  slug: string,
  locale: string = "es"
): Promise<{
  title: string;
  content: string;
  cssUrls: string[];
} | null> {

  try {
    const timestamp = new Date().getTime();

    const langParam =
      locale !== "es"
        ? `&lang=${locale}`
        : "";

    // =========================================
    // 1. BUSCAR EN PAGES
    // =========================================

    const pagesRes = await fetch(
      `${API}/pages?slug=${encodeURIComponent(slug)}${langParam}&t=${timestamp}`,
      {
        cache: "no-store"
      }
    );

    if (pagesRes.ok) {

      const pages = await pagesRes.json();

      if (pages.length > 0) {

        const page = pages[0];

        const cssUrls = await getElementorCssByUrl(
          page.link
        );

        return {
          title: decodeHtmlEntities(
            stripHtml(page.title?.rendered || "")
          ),

          content: page.content?.rendered || "",

          cssUrls
        };
      }
    }

    // =========================================
    // 2. BUSCAR EN CUSTOM POST TYPE CAISEB
    // =========================================

    const caisebRes = await fetch(
      `${API}/caiseb?slug=${encodeURIComponent(slug)}${langParam}&t=${timestamp}`,
      {
        cache: "no-store"
      }
    );

    if (!caisebRes.ok) {
      return null;
    }

    const caiseb = await caisebRes.json();

    if (caiseb.length === 0) {
      return null;
    }

    const post = caiseb[0];

    const cssUrls = await getElementorCssByUrl(
      post.link
    );

    return {
      title: decodeHtmlEntities(
        stripHtml(post.title?.rendered || "")
      ),

      content: post.content?.rendered || "",

      cssUrls
    };

  } catch (error) {
    console.error("Error fetching page from WordPress:", error);

    return null;
  }
}
