import type { WPPost, WPEvent, WPMultimedia, WPCategory, Article, Event, MultimediaItem } from "./wordpress-types";

const WP_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL ?? "";
const API = `${WP_URL}/wp-json/wp/v2`;



function stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, "").trim();
}

function formatDate(isoDate: string): string {
    const d = new Date(isoDate);
    const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
    ];
    return `${d.getDate()} de ${months[d.getMonth()]}, ${d.getFullYear()}`;
}

function estimateReadTime(text: string): string {
    const words = text.split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} min`;
}



export async function getNews(): Promise<Article[]> {
    try {
        const timestamp = new Date().getTime();
        const res = await fetch(
            `${API}/posts?_embed&per_page=20&orderby=date&order=desc&t=${timestamp}`,
            { cache: 'no-store' }
        );

        if (!res.ok) throw new Error(`WP API responded with ${res.status}`);

        const posts: WPPost[] = await res.json();

        return posts.map((post) => {
            const categories = post._embedded?.["wp:term"]?.[0] ?? [];
            const categoryName = categories.length > 0 ? categories[0].name : "General";

            const media = post._embedded?.["wp:featuredmedia"]?.[0];
            const imageUrl =
                media?.media_details?.sizes?.large?.source_url ??
                media?.source_url ??
                undefined;

            const plainExcerpt = stripHtml(post.excerpt?.rendered || "");
            const plainContent = stripHtml(post.content?.rendered || "");

            return {
                title: stripHtml(post.title?.rendered || ""),
                excerpt: plainExcerpt,
                date: formatDate(post.date),
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




function parseACFDate(dateStr: string): string {
    if (!dateStr) return "";

    // Check if it's DD/MM/YYYY
    if (dateStr.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
        const [day, month, year] = dateStr.split("/");
        return `${year}-${month}-${day}`;
    }

    // Check if it's YYYYMMDD
    if (dateStr.match(/^\d{8}$/)) {
        const year = dateStr.substring(0, 4);
        const month = dateStr.substring(4, 6);
        const day = dateStr.substring(6, 8);
        return `${year}-${month}-${day}`;
    }

    return dateStr;
}

export async function getEvents(): Promise<{ upcoming: Event[]; past: Event[] }> {
    try {
        const timestamp = new Date().getTime();
        const res = await fetch(
            `${API}/eventos?_embed&per_page=50&orderby=date&order=desc&t=${timestamp}`,
            { cache: 'no-store' }
        );

        if (!res.ok) throw new Error(`WP API responded with ${res.status}`);

        const events: WPEvent[] = await res.json();




        const all: Event[] = events.map((ev) => {
            const acf = ev.acf ?? {} as WPEvent["acf"];




            const rawEventDate = acf.event_date || ev.date;
            const parsedDate = parseACFDate(rawEventDate);

            const isFeatured = acf.is_featured ?? false;

            const media = ev._embedded?.["wp:featuredmedia"]?.[0];
            const imageUrl =
                media?.media_details?.sizes?.large?.source_url ??
                media?.source_url ??
                undefined;

            return {
                title: stripHtml(ev.title?.rendered || ""),
                date: formatDate(parsedDate),
                location: acf.event_location || "Por definir",
                description: stripHtml(ev.excerpt?.rendered || ev.content?.rendered || ""),
                content: ev.content?.rendered || "",
                featured: isFeatured,
                link: acf.event_link || "#",
                color: isFeatured ? "#582080" : "#000049",
                rawDate: parsedDate,
                slug: ev.slug,
                imageUrl,
            };
        });


        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const todayStr = `${year}-${month}-${day}`;

        console.log(`[DEBUG] Server Today: ${todayStr}`);

        const upcoming = all.filter((e) => {

            return e.rawDate >= todayStr;
        });
        const past = all.filter((e) => e.rawDate < todayStr);


        upcoming.sort((a, b) => a.rawDate.localeCompare(b.rawDate));

        past.sort((a, b) => b.rawDate.localeCompare(a.rawDate));

        return { upcoming, past };
    } catch (error) {
        console.error("Error fetching events from WordPress:", error);
        return { upcoming: [], past: [] };
    }
}



export async function getNewsBySlug(slug: string): Promise<{
    title: string;
    content: string;
    excerpt: string;
    date: string;
    category: string;
    imageUrl?: string;
    readTime: string;
} | null> {
    try {
        const timestamp = new Date().getTime();
        const res = await fetch(
            `${API}/posts?_embed&slug=${encodeURIComponent(slug)}&t=${timestamp}`,
            { cache: 'no-store' }
        );
        if (!res.ok) return null;
        const posts: WPPost[] = await res.json();
        if (posts.length === 0) return null;

        const post = posts[0];
        const categories = post._embedded?.["wp:term"]?.[0] ?? [];
        const categoryName = categories.length > 0 ? categories[0].name : "General";
        const media = post._embedded?.["wp:featuredmedia"]?.[0];
        const imageUrl =
            media?.media_details?.sizes?.large?.source_url ??
            media?.source_url ??
            undefined;

        const plainContent = stripHtml(post.content?.rendered || "");

        return {
            title: stripHtml(post.title?.rendered || ""),
            content: post.content?.rendered || "",
            excerpt: stripHtml(post.excerpt?.rendered || ""),
            date: formatDate(post.date),
            category: categoryName,
            imageUrl,
            readTime: estimateReadTime(plainContent),
        };
    } catch {
        return null;
    }
}



export async function getEventBySlug(slug: string): Promise<{
    title: string;
    content: string;
    date: string;
    location: string;
    imageUrl?: string;
    featured: boolean;
    link: string;
} | null> {
    try {
        const timestamp = new Date().getTime();
        const res = await fetch(
            `${API}/eventos?_embed&slug=${encodeURIComponent(slug)}&t=${timestamp}`,
            { cache: 'no-store' }
        );
        if (!res.ok) return null;
        const events: WPEvent[] = await res.json();
        if (events.length === 0) return null;

        const ev = events[0];
        const acf = ev.acf ?? {} as WPEvent["acf"];
        const media = ev._embedded?.["wp:featuredmedia"]?.[0];
        const imageUrl =
            media?.media_details?.sizes?.large?.source_url ??
            media?.source_url ??
            undefined;

        return {
            title: stripHtml(ev.title?.rendered || ""),
            content: ev.content?.rendered || "",
            date: formatDate(parseACFDate(acf.event_date || ev.date)),
            location: acf.event_location || "Por definir",
            imageUrl,
            featured: acf.is_featured ?? false,
            link: acf.event_link || "#",
        };
    } catch {
        return null;
    }
}



export async function getMultimedia(): Promise<MultimediaItem[]> {
    try {
        const timestamp = new Date().getTime();
        const res = await fetch(
            `${API}/multimedia?_embed&per_page=50&orderby=date&order=desc&t=${timestamp}`,
            { cache: 'no-store' }
        );

        if (!res.ok) throw new Error(`WP API responded with ${res.status}`);

        const items: WPMultimedia[] = await res.json();

        return items.map((item) => {
            const acf = item.acf ?? {} as WPMultimedia["acf"];
            const media = item._embedded?.["wp:featuredmedia"]?.[0];
            let imageUrl =
                media?.media_details?.sizes?.large?.source_url ??
                media?.source_url ??
                undefined;


            const getYouTubeId = (url: string) => {
                const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
                const match = url.match(regExp);
                return (match && match[2].length === 11) ? match[2] : null;
            };


            if (!imageUrl && acf.video_url) {
                const videoId = getYouTubeId(acf.video_url);
                if (videoId) {
                    imageUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
                }
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



export async function getCategories(): Promise<WPCategory[]> {
    try {
        const timestamp = new Date().getTime();
        const res = await fetch(`${API}/categories?per_page=50&t=${timestamp}`, {
            cache: 'no-store',
        });
        if (!res.ok) throw new Error(`WP API responded with ${res.status}`);
        return res.json();
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
}



export async function getPageBySlug(slug: string): Promise<{
    title: string;
    content: string;
    cssUrls: string[];
} | null> {
    try {
        const timestamp = new Date().getTime();
        const res = await fetch(
            `${API}/pages?slug=${encodeURIComponent(slug)}&t=${timestamp}`,
            { cache: 'no-store' }
        );
        if (!res.ok) return null;
        const pages = await res.json();
        if (pages.length === 0) return null;

        const page = pages[0];


        const cssUrls = await getElementorCss(slug);

        return {
            title: stripHtml(page.title?.rendered || ""),
            content: page.content?.rendered || "",
            cssUrls,
        };
    } catch (error) {
        console.error("Error fetching page from WordPress:", error);
        return null;
    }
}



async function getElementorCss(slug: string): Promise<string[]> {
    try {
        const pageUrl = `${WP_URL}/${slug}/`;
        const res = await fetch(pageUrl, { cache: 'no-store' });
        if (!res.ok) return [];
        const html = await res.text();


        const cssRegex = /<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']*elementor[^"']*)["'][^>]*>/gi;
        const urls: string[] = [];
        let match;
        while ((match = cssRegex.exec(html)) !== null) {
            urls.push(match[1]);
        }


        const cssRegex2 = /<link[^>]+href=["']([^"']*elementor[^"']*)["'][^>]+rel=["']stylesheet["'][^>]*>/gi;
        while ((match = cssRegex2.exec(html)) !== null) {
            if (!urls.includes(match[1])) {
                urls.push(match[1]);
            }
        }

        return urls;
    } catch (error) {
        console.error("Error fetching Elementor CSS:", error);
        return [];
    }
}

