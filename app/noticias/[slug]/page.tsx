import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowLeft, Tag, Clock } from "lucide-react";
import { getNews, getNewsBySlug } from "@/lib/wordpress";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";


const fallbackContent: Record<string, {
    title: string;
    content: string;
    excerpt: string;
    date: string;
    category: string;
    imageUrl?: string;
    readTime: string;
}> = {
    "caiseb-2026": {
        title: "CAISEB 2026: El congreso que reunirá a investigadores de toda Iberoamérica",
        content: `<p>La Red Iberoamericana de Investigación tiene el placer de anunciar la próxima edición de su congreso insignia, el <strong>Congreso Académico Internacional CAISEB 2026</strong>, que se celebrará los días <strong>10 y 11 de marzo de 2026</strong>.</p>
<p>Este evento reunirá a investigadores, académicos y profesionales de toda Iberoamérica para compartir avances, experiencias y proyectos en diversas áreas del conocimiento.</p>
<h2>Áreas Temáticas</h2>
<p>El congreso abarcará múltiples líneas de investigación, incluyendo:</p>
<ul>
<li>Inteligencia Artificial y Tecnología Educativa</li>
<li>Salud y Bienestar</li>
<li>Turismo Sostenible</li>
<li>Emprendimiento e Innovación</li>
<li>Derecho y Ciencias Sociales</li>
</ul>
<p>Las inscripciones ya están abiertas. No pierdas la oportunidad de ser parte de este importante encuentro académico internacional.</p>`,
        excerpt: "La Red Iberoamericana de Investigación anuncia la próxima edición de su congreso insignia.",
        date: "15 de Febrero, 2026",
        category: "Congreso",
        readTime: "5 min",
    },
};

const categoryColors: Record<string, { bg: string; color: string }> = {
    Congreso: { bg: "#e8d5f5", color: "#582080" },
    Convocatoria: { bg: "#fef3cd", color: "#856404" },
    Investigación: { bg: "#d4edda", color: "#155724" },
    Alianzas: { bg: "#cce5ff", color: "#004085" },
    Publicación: { bg: "#e8e8f4", color: "#000049" },
    Eventos: { bg: "#f0e6ff", color: "#582080" },
    Resultados: { bg: "#d1ecf1", color: "#0c5460" },
    General: { bg: "#e8e8f4", color: "#000049" },
};

export async function generateStaticParams() {
    const articles = await getNews();
    if (articles.length > 0) {
        return articles.map((a) => ({ slug: a.slug }));
    }

    return Object.keys(fallbackContent).map((slug) => ({ slug }));
}

export default async function NoticiaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;


    let article = await getNewsBySlug(slug);


    if (!article) {
        const fb = fallbackContent[slug];
        if (!fb) notFound();
        article = fb;
    }

    return (
        <>

            <section
                style={{
                    background: "linear-gradient(135deg, #000049 0%, #0a0a6e 50%, #000030 100%)",
                    color: "#fff",
                    padding: "5rem 1.5rem 3rem",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "-40%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "800px",
                        height: "800px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
                    }}
                />
                <div className="container-custom" style={{ position: "relative", zIndex: 1, maxWidth: "800px" }}>
                    <Link
                        href="/noticias"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.35rem",
                            color: "rgba(255,255,255,0.7)",
                            textDecoration: "none",
                            fontSize: "0.9rem",
                            marginBottom: "1.5rem",
                            transition: "color 0.2s",
                        }}
                    >
                        <ArrowLeft size={16} />
                        Volver a Noticias
                    </Link>
                    <div style={{ marginBottom: "1rem" }}>
                        <span
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.3rem",
                                background: categoryColors[article.category]?.bg || "#e8e8f4",
                                color: categoryColors[article.category]?.color || "#000049",
                                padding: "0.25rem 0.7rem",
                                borderRadius: "999px",
                                fontSize: "0.75rem",
                                fontWeight: 600,
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                            }}
                        >
                            <Tag size={10} />
                            {article.category}
                        </span>
                    </div>
                    <h1
                        style={{
                            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                            fontWeight: 800,
                            marginBottom: "1rem",
                            lineHeight: 1.3,
                        }}
                    >
                        {article.title}
                    </h1>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                            opacity: 0.7,
                            fontSize: "0.9rem",
                        }}
                    >
                        <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                            <Calendar size={14} />
                            {article.date}
                        </span>
                        <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                            <Clock size={14} />
                            {article.readTime} lectura
                        </span>
                    </div>
                </div>
            </section>


            {article.imageUrl && (
                <section style={{ background: "#fff" }}>
                    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 1.5rem", transform: "translateY(-2rem)" }}>
                        <div
                            style={{
                                position: "relative",
                                width: "100%",
                                height: "400px",
                                borderRadius: "16px",
                                overflow: "hidden",
                                boxShadow: "0 20px 60px rgba(0,0,73,0.2)",
                            }}
                        >
                            <Image
                                src={article.imageUrl}
                                alt={article.title}
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 800px) 100vw, 800px"
                                priority
                            />
                        </div>
                    </div>
                </section>
            )}


            <section style={{ background: "#fff", padding: article.imageUrl ? "1rem 1.5rem 5rem" : "3rem 1.5rem 5rem" }}>
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <div
                        className="wp-content"
                        style={{
                            fontSize: "1.05rem",
                            lineHeight: 1.8,
                            color: "#333",
                        }}
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                    <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid #e8e8f4" }}>
                        <Link
                            href="/noticias"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.35rem",
                                background: "#000049",
                                color: "#fff",
                                padding: "0.75rem 1.5rem",
                                borderRadius: "12px",
                                fontWeight: 600,
                                textDecoration: "none",
                                fontSize: "0.9rem",
                                transition: "transform 0.2s, box-shadow 0.2s",
                            }}
                        >
                            <ArrowLeft size={16} />
                            Volver a Noticias
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
