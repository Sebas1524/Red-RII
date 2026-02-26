

export interface WPRendered {
    rendered: string;
}

export interface WPMediaDetails {
    source_url: string;
    media_details?: {
        sizes?: {
            medium?: { source_url: string };
            large?: { source_url: string };
            full?: { source_url: string };
        };
    };
}

export interface WPCategory {
    id: number;
    name: string;
    slug: string;
}


export interface WPPost {
    id: number;
    slug: string;
    date: string; // ISO 8601
    title: WPRendered;
    excerpt: WPRendered;
    content: WPRendered;
    categories: number[];
    _embedded?: {
        "wp:featuredmedia"?: WPMediaDetails[];
        "wp:term"?: WPCategory[][];
    };
}


export interface WPEvent {
    id: number;
    slug: string;
    date: string;
    title: WPRendered;
    content: WPRendered;
    excerpt: WPRendered;
    _embedded?: {
        "wp:featuredmedia"?: WPMediaDetails[];
    };
    acf: {
        event_date: string;       // YYYY-MM-DD (ACF date picker)
        event_location: string;
        is_featured: boolean;
        event_link: string;
    };
}


export interface WPMultimedia {
    id: number;
    slug: string;
    date: string;
    title: WPRendered;
    content: WPRendered;
    excerpt: WPRendered;
    _embedded?: {
        "wp:featuredmedia"?: WPMediaDetails[];
        "wp:term"?: WPCategory[][];
    };
    acf: {
        media_type: "foto" | "video" | "publicacion";
        video_url?: string;        // YouTube/Vimeo embed URL
        video_duration?: string;   // e.g. "12:30"
        external_link?: string;    // Link to publication or external resource
    };
}



export interface Article {
    title: string;
    excerpt: string;
    date: string;
    category: string;
    readTime: string;
    slug: string;
    imageUrl?: string;
}

export interface Event {
    title: string;
    date: string;
    location: string;
    description: string;
    content: string;
    featured: boolean;
    link: string;
    color: string;
    rawDate: string; // ISO date for comparison
    slug: string;
    imageUrl?: string;
}

export interface MultimediaItem {
    title: string;
    description: string;
    type: "foto" | "video" | "publicacion";
    imageUrl?: string;
    videoUrl?: string;
    duration?: string;
    externalLink?: string;
    slug: string;
}
