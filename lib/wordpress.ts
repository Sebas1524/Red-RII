import type { WPPost, WPEvent, WPMultimedia, WPCategory, Article, Event, MultimediaItem } from "./wordpress-types";

const WP_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL ?? "";
const API = `${WP_URL}/wp-json/wp/v2`;

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

function formatDate(isoDate: string, locale: string = "es"): string {
  const d = new Date(isoDate);
  const monthsEs = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const monthsEn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthsFr = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  const monthsPt = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

  const months: Record<string, string[]> = { es: monthsEs, en: monthsEn, fr: monthsFr, pt: monthsPt };
  const m = months[locale] ?? monthsEs;

  if (locale === "en") return `${m[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  if (locale === "fr") return `${d.getDate()} ${m[d.getMonth()]} ${d.getFullYear()}`;
  if (locale === "pt") return `${d.getDate()} de ${m[d.getMonth()]} de ${d.getFullYear()}`;
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

// ─── NEWS ────────────────────────────────────────────────────────────────────

export async function getNews(locale: string = "es"): Promise<Article[]> {
  try {
    const timestamp = new Date().getTime();
    const langParam = locale !== "es" ? `&lang=${locale}` : "";
    const res = await fetch(
      `${API}/posts?_embed&per_page=20&orderby=date&order=desc${langParam}&t=${timestamp}`,
      { cache: "no-store" }
    );
    if (!res.ok) throw new Error(`WP API responded with ${res.status}`);
    const posts: WPPost[] = await res.json();

    return posts
      .filter((post) => {
        if (locale === "es") return !post.link.match(/\/(en|fr|pt)\//);
        return post.link.includes(`/${locale}/`);
      })
      .map((post) => {
        const categories = post._embedded?.["wp:term"]?.[0] ?? [];
        const categoryName = categories.length > 0 ? categories[0].name : "General";
        const media = post._embedded?.["wp:featuredmedia"]?.[0];
        const imageUrl = media?.media_details?.sizes?.large?.source_url ?? media?.source_url ?? undefined;
        const plainExcerpt = stripHtml(post.excerpt?.rendered || "");
        const plainContent = stripHtml(post.content?.rendered || "");
        return {
          title: stripHtml(post.title?.rendered || ""),
          excerpt: plainExcerpt,
          date: formatDate(post.date, locale),
          category: categoryName,
          readTime: estimateReadTime(plainContent || plainExcerpt),
          slug: post.slug,
          imageUrl,
        };
      });
  } catch (error) {
    console.error("Error fetching news from WordPress:", error);
    return [];
  }
}

export async function getNewsBySlug(slug: string, locale: string = "es"): Promise<{
  title: string; content: string; excerpt: string; date: string; category: string; imageUrl?: string; readTime: string;
} | null> {
  try {
    const timestamp = new Date().getTime();
    const langParam = locale !== "es" ? `&lang=${locale}` : "";
    const res = await fetch(
      `${API}/posts?_embed&slug=${encodeURIComponent(slug)}${langParam}&t=${timestamp}`,
      { cache: "no-store" }
    );
    if (!res.ok) return null;
    const posts: WPPost[] = await res.json();
    if (posts.length === 0) return null;

    const post = posts[0];
    const categories = post._embedded?.["wp:term"]?.[0] ?? [];
    const categoryName = categories.length > 0 ? categories[0].name : "General";
    const media = post._embedded?.["wp:featuredmedia"]?.[0];
    const imageUrl = media?.media_details?.sizes?.large?.source_url ?? media?.source_url ?? undefined;
    const plainContent = stripHtml(post.content?.rendered || "");

    return {
      title: stripHtml(post.title?.rendered || ""),
      content: post.content?.rendered || "",
      excerpt: stripHtml(post.excerpt?.rendered || ""),
      date: formatDate(post.date, locale),
      category: categoryName,
      imageUrl,
      readTime: estimateReadTime(plainContent),
    };
  } catch {
    return null;
  }
}

// ─── EVENTS ──────────────────────────────────────────────────────────────────

export async function getEvents(locale: string = "es"): Promise<{ upcoming: Event[]; past: Event[] }> {
  try {
    const timestamp = new Date().getTime();
    const langParam = locale !== "es" ? `&lang=${locale}` : "";
    const res = await fetch(
      `${API}/eventos?_embed&per_page=50&orderby=date&order=desc${langParam}&t=${timestamp}`,
      { cache: "no-store" }
    );
    if (!res.ok) throw new Error(`WP API responded with ${res.status}`);
    const events: WPEvent[] = await res.json();

    const all: Event[] = events
      .filter((ev) => {
        if (locale === "es") return !ev.link.match(/\/(en|fr|pt)\//);
        return ev.link.includes(`/${locale}/`);
      })
      .map((ev) => {
        const acf = ev.acf ?? {} as WPEvent["acf"];
        const rawEventDate = acf.event_date || ev.date;
        const parsedDate = parseACFDate(rawEventDate);
        const media = ev._embedded?.["wp:featuredmedia"]?.[0];
        const imageUrl = media?.media_details?.sizes?.large?.source_url ?? media?.source_url ?? undefined;

        return {
          title: stripHtml(ev.title?.rendered || ""),
          date: formatDate(parsedDate, locale),
          location: acf.event_location || "Por definir",
          description: stripHtml(ev.excerpt?.rendered || ev.content?.rendered || ""),
          content: ev.content?.rendered || "",
          featured: acf.is_featured ?? false,
          link: acf.event_link || "#",
          color: acf.is_featured ? "#582080" : "#000049",
          rawDate: parsedDate,
          slug: ev.slug,
          imageUrl,
        };
      });

    const now = new Date();
    const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    console.log(`[DEBUG] Server Today: ${todayStr}`);

    const upcoming = all.filter((e) => e.rawDate >= todayStr).sort((a, b) => a.rawDate.localeCompare(b.rawDate));
    const past = all.filter((e) => e.rawDate < todayStr).sort((a, b) => b.rawDate.localeCompare(a.rawDate));

    return { upcoming, past };
  } catch (error) {
    console.error("Error fetching events from WordPress:", error);
    return { upcoming: [], past: [] };
  }
}

export async function getEventBySlug(slug: string, locale: string = "es"): Promise<{
  title: string; content: string; date: string; location: string; imageUrl?: string; featured: boolean; link: string;
} | null> {
  try {
    const timestamp = new Date().getTime();
    const langParam = locale !== "es" ? `&lang=${locale}` : "";
    const res = await fetch(
      `${API}/eventos?_embed&slug=${encodeURIComponent(slug)}${langParam}&t=${timestamp}`,
      { cache: "no-store" }
    );
    if (!res.ok) return null;
    const events: WPEvent[] = await res.json();
    if (events.length === 0) return null;

    const ev = events[0];
    const acf = ev.acf ?? {} as WPEvent["acf"];
    const media = ev._embedded?.["wp:featuredmedia"]?.[0];
    const imageUrl = media?.media_details?.sizes?.large?.source_url ?? media?.source_url ?? undefined;

    return {
      title: stripHtml(ev.title?.rendered || ""),
      content: ev.content?.rendered || "",
      date: formatDate(parseACFDate(acf.event_date || ev.date), locale),
      location: acf.event_location || "Por definir",
      imageUrl,
      featured: acf.is_featured ?? false,
      link: acf.event_link || "#",
    };
  } catch {
    return null;
  }
}

// ─── MULTIMEDIA ───────────────────────────────────────────────────────────────

export async function getMultimedia(locale: string = "es"): Promise<MultimediaItem[]> {
  try {
    const timestamp = new Date().getTime();
    const langParam = locale !== "es" ? `&lang=${locale}` : "";
    const res = await fetch(
      `${API}/multimedia?_embed&per_page=50&orderby=date&order=desc${langParam}&t=${timestamp}`,
      { cache: "no-store" }
    );
    if (!res.ok) throw new Error(`WP API responded with ${res.status}`);
    const items: WPMultimedia[] = await res.json();

    return items.map((item) => {
      const acf = item.acf ?? {} as WPMultimedia["acf"];
      const media = item._embedded?.["wp:featuredmedia"]?.[0];
      let imageUrl = media?.media_details?.sizes?.large?.source_url ?? media?.source_url ?? undefined;

      const getYouTubeId = (url: string) => {
        const match = url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);
        return match && match[2].length === 11 ? match[2] : null;
      };

      if (!imageUrl && acf.video_url) {
        const videoId = getYouTubeId(acf.video_url);
        if (videoId) imageUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      }

      return {
        title: stripHtml(item.title?.rendered || ""),
        description: stripHtml(item.excerpt?.rendered || item.content?.rendered || ""),
        type: acf.media_type || "foto",
        imageUrl,
        videoUrl: acf.video_url || undefined,
        duration: acf.video_duration || undefined,
        externalLink: acf.external_link || undefined,
        slug: item.slug,
      };
    });
  } catch (error) {
    console.error("Error fetching multimedia from WordPress:", error);
    return [];
  }
}

// ─── CATEGORIES ──────────────────────────────────────────────────────────────

export async function getCategories(): Promise<WPCategory[]> {
  try {
    const timestamp = new Date().getTime();
    const res = await fetch(`${API}/categories?per_page=50&t=${timestamp}`, { cache: "no-store" });
    if (!res.ok) throw new Error(`WP API responded with ${res.status}`);
    return res.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

// ─── PAGES ───────────────────────────────────────────────────────────────────

async function getElementorCss(slug: string): Promise<string[]> {
  try {
    const pageUrl = `${WP_URL}/${slug}/`;
    const res = await fetch(pageUrl, { cache: "no-store" });
    if (!res.ok) return [];
    const html = await res.text();

    const cssRegex = /<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']*elementor[^"']*)["'][^>]*>/gi;
    const urls: string[] = [];
    let match;
    while ((match = cssRegex.exec(html)) !== null) urls.push(match[1]);

    const cssRegex2 = /<link[^>]+href=["']([^"']*elementor[^"']*)["'][^>]+rel=["']stylesheet["'][^>]*>/gi;
    while ((match = cssRegex2.exec(html)) !== null) {
      if (!urls.includes(match[1])) urls.push(match[1]);
    }

    return urls;
  } catch (error) {
    console.error("Error fetching Elementor CSS:", error);
    return [];
  }
}

export async function getPageBySlug(slug: string, locale: string = "es"): Promise<{
  title: string; content: string; cssUrls: string[];
} | null> {
  try {
    const timestamp = new Date().getTime();
    const langParam = locale !== "es" ? `&lang=${locale}` : "";

    const res = await fetch(
      `${API}/pages?slug=${encodeURIComponent(slug)}${langParam}&t=${timestamp}`,
      { cache: "no-store" }
    );
    if (!res.ok) return null;
    const pages = await res.json();

    if (pages.length > 0) {
      const page = pages[0];
      const cssUrls = await getElementorCss(slug);
      return {
        title: stripHtml(page.title?.rendered || ""),
        content: page.content?.rendered || "",
        cssUrls,
      };
    }

    // Fallback: busca por search + lang (para slugs como caiseb-2)
    const fallbackRes = await fetch(
      `${API}/pages?search=${encodeURIComponent(slug)}&lang=${locale}&t=${timestamp}`,
      { cache: "no-store" }
    );
    if (!fallbackRes.ok) return null;
    const fallbackPages = await fallbackRes.json();

    if (fallbackPages.length > 0) {
      const page = fallbackPages[0];
      const pageSlug = page.slug;
      const cssUrls = await getElementorCss(pageSlug);
      return {
        title: stripHtml(page.title?.rendered || ""),
        content: page.content?.rendered || "",
        cssUrls,
      };
    }

    return null;
  } catch (error) {
    console.error("Error fetching page from WordPress:", error);
    return null;
  }
}
