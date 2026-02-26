import Image from "next/image";
import Link from "next/link";
import { Image as ImageIcon, Video, FileText, Play, ExternalLink } from "lucide-react";
import { getMultimedia } from "@/lib/wordpress";
import type { MultimediaItem } from "@/lib/wordpress-types";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";

const categories = [
    { id: "todos", label: "Todos", icon: ImageIcon },
    { id: "fotos", label: "Fotografías", icon: ImageIcon },
    { id: "videos", label: "Videos", icon: Video },
];


const fallbackItems: MultimediaItem[] = [
    {
        type: "foto",
        title: "CAISEB 2025 — Inauguración",
        description: "Ceremonia de apertura del congreso académico internacional.",
        slug: "caiseb-2025-inauguracion",
    },
    {
        type: "foto",
        title: "Mesa de trabajo — Educación",
        description: "Sesión colaborativa sobre innovación educativa inclusiva.",
        slug: "mesa-trabajo-educacion",
    },
    {
        type: "foto",
        title: "Conferencia Magistral",
        description: "Ponencia internacional sobre inteligencia artificial en educación.",
        slug: "conferencia-magistral",
    },
    {
        type: "video",
        title: "Resumen CAISEB 2025",
        description: "Video resumen de las jornadas del congreso anterior.",
        duration: "12:30",
        slug: "resumen-caiseb-2025",
    },
    {
        type: "video",
        title: "Entrevista — Líneas de Investigación",
        description: "Conversación con coordinadores sobre las áreas de investigación de la RII.",
        duration: "8:45",
        slug: "entrevista-lineas-investigacion",
    },
    {
        type: "foto",
        title: "Networking Internacional",
        description: "Encuentro entre investigadores de diferentes países iberoamericanos.",
        slug: "networking-internacional",
    },
    {
        type: "publicacion",
        title: "Revista de Investigación RII — Vol. 5",
        description: "Compilación de los mejores artículos presentados en CAISEB 2025.",
        slug: "revista-rii-vol-5",
        externalLink: "#",
    },
    {
        type: "foto",
        title: "Clausura CAISEB 2025",
        description: "Ceremonia de cierre y entrega de reconocimientos.",
        slug: "clausura-caiseb-2025",
    },
    {
        type: "video",
        title: "Panel — Ciberseguridad",
        description: "Panel de expertos sobre tendencias en redes y seguridad informática.",
        duration: "25:10",
        slug: "panel-ciberseguridad",
    },
];

const colors = [
    "linear-gradient(135deg, #000049, #0a0a6e)",
    "linear-gradient(135deg, #582080, #3a1060)",
    "linear-gradient(135deg, #0a0a6e, #000049)",
    "linear-gradient(135deg, #3a1060, #582080)",
    "linear-gradient(135deg, #000030, #000049)",
    "linear-gradient(135deg, #582080, #000049)",
    "linear-gradient(135deg, #0a0a6e, #3a1060)",
    "linear-gradient(135deg, #000049, #000030)",
    "linear-gradient(135deg, #3a1060, #0a0a6e)",
];

function MediaCard({ item, index }: { item: MultimediaItem; index: number }) {
    const hasImage = !!item.imageUrl;

    const card = (
        <div
            className="hover-lift"
            style={{
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid #e8e8f4",
                cursor: "pointer",
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >

            <div
                style={{
                    background: hasImage ? undefined : colors[index % colors.length],
                    height: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {hasImage ? (
                    <Image
                        src={item.imageUrl!}
                        alt={item.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, 400px"
                    />
                ) : (
                    <>
                        {item.type === "foto" && (
                            <ImageIcon size={48} color="rgba(255,255,255,0.3)" />
                        )}
                        {item.type === "video" && (
                            <div
                                style={{
                                    width: 64,
                                    height: 64,
                                    borderRadius: "50%",
                                    background: "rgba(255,255,255,0.15)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backdropFilter: "blur(4px)",
                                }}
                            >
                                <Play size={28} color="#fff" style={{ marginLeft: 4 }} />
                            </div>
                        )}
                        {item.type === "publicacion" && (
                            <FileText size={48} color="rgba(255,255,255,0.3)" />
                        )}
                    </>
                )}

                {item.type === "video" && hasImage && (
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "rgba(0,0,0,0.25)",
                        }}
                    >
                        <div
                            style={{
                                width: 56,
                                height: 56,
                                borderRadius: "50%",
                                background: "rgba(255,255,255,0.2)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backdropFilter: "blur(4px)",
                                border: "2px solid rgba(255,255,255,0.4)",
                            }}
                        >
                            <Play size={24} color="#fff" style={{ marginLeft: 3 }} />
                        </div>
                    </div>
                )}

                {item.type === "video" && item.duration && (
                    <span
                        style={{
                            position: "absolute",
                            bottom: "0.75rem",
                            right: "0.75rem",
                            background: "rgba(0,0,0,0.7)",
                            color: "#fff",
                            padding: "0.2rem 0.5rem",
                            borderRadius: "6px",
                            fontSize: "0.75rem",
                            fontWeight: 500,
                        }}
                    >
                        {item.duration}
                    </span>
                )}
            </div>

            <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <div
                    style={{
                        display: "inline-block",
                        background:
                            item.type === "foto"
                                ? "#e8e8f4"
                                : item.type === "video"
                                    ? "#fef3cd"
                                    : "#e8d5f5",
                        color:
                            item.type === "foto"
                                ? "#000049"
                                : item.type === "video"
                                    ? "#856404"
                                    : "#582080",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "999px",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        marginBottom: "0.5rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        width: "fit-content",
                    }}
                >
                    {item.type === "foto"
                        ? "Fotografía"
                        : item.type === "video"
                            ? "Video"
                            : "Publicación"}
                </div>
                <h3
                    style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#000049",
                        marginBottom: "0.35rem",
                    }}
                >
                    {item.title}
                </h3>
                <p
                    style={{
                        fontSize: "0.85rem",
                        color: "#64648a",
                        lineHeight: 1.5,
                        flex: 1,
                    }}
                >
                    {item.description}
                </p>
                {item.externalLink && (
                    <div style={{ marginTop: "0.75rem" }}>
                        <span
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.3rem",
                                color: "#000049",
                                fontWeight: 600,
                                fontSize: "0.8rem",
                            }}
                        >
                            <ExternalLink size={13} />
                            Ver recurso
                        </span>
                    </div>
                )}
            </div>
        </div>
    );




    if (item.videoUrl) {
        return (
            <a href={item.videoUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                {card}
            </a>
        );
    }
    if (item.externalLink) {
        return (
            <a href={item.externalLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                {card}
            </a>
        );
    }
    // Make photos clickable to view the image
    if (item.type === "foto" && item.imageUrl) {
        return (
            <a href={item.imageUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                {card}
            </a>
        );
    }

    return card;
}

export default async function MultimediaPage() {
    let items = await getMultimedia();


    if (items.length === 0) {
        items = fallbackItems;
    }


    items = items.filter(item => item.type !== "publicacion");

    return (
        <ScrollRevealWrapper>

            <section
                style={{
                    background: "linear-gradient(135deg, #000049 0%, #0a0a6e 50%, #000030 100%)",
                    color: "#fff",
                    padding: "5rem 1.5rem 4rem",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <div
                    className="animate-float"
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
                <div className="container-custom scroll-reveal" style={{ position: "relative", zIndex: 1 }}>
                    <h1
                        style={{
                            fontSize: "clamp(2rem, 4vw, 3rem)",
                            fontWeight: 800,
                            marginBottom: "1rem",
                        }}
                    >
                        Multimedia
                    </h1>
                    <p
                        style={{
                            fontSize: "1.1rem",
                            opacity: 0.75,
                            maxWidth: "600px",
                            margin: "0 auto",
                            lineHeight: 1.6,
                        }}
                    >
                        Galería de fotografías, videos y publicaciones de nuestros eventos y
                        actividades académicas.
                    </p>
                </div>
            </section>


            <section style={{ background: "#fff", padding: "2rem 1.5rem 0" }}>
                <div className="container-custom scroll-reveal">
                    <div
                        style={{
                            display: "flex",
                            gap: "0.75rem",
                            flexWrap: "wrap",
                            justifyContent: "center",
                        }}
                    >
                        {categories.map((cat) => (
                            <div
                                key={cat.id}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    padding: "0.6rem 1.25rem",
                                    borderRadius: "999px",
                                    background: "#f0f0f8",
                                    color: "#000049",
                                    fontSize: "0.875rem",
                                    fontWeight: 500,
                                    border: "1px solid #d8d8e8",
                                }}
                            >
                                <cat.icon size={16} />
                                {cat.label}
                                <span
                                    style={{
                                        background: "#000049",
                                        color: "#fff",
                                        padding: "0.1rem 0.5rem",
                                        borderRadius: "999px",
                                        fontSize: "0.7rem",
                                        fontWeight: 600,
                                    }}
                                >
                                    {cat.id === "todos"
                                        ? items.length
                                        : cat.id === "fotos"
                                            ? items.filter((i) => i.type === "foto").length
                                            : cat.id === "videos"
                                                ? items.filter((i) => i.type === "video").length
                                                : items.filter((i) => i.type === "publicacion").length}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="section-padding" style={{ background: "#fff" }}>
                <div className="container-custom">
                    {items.length > 0 ? (
                        <div
                            className="stagger-children"
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                                gap: "1.5rem",
                            }}
                        >
                            {items.map((item, i) => (
                                <MediaCard key={item.slug || i} item={item} index={i} />
                            ))}
                        </div>
                    ) : (
                        <div className="scroll-reveal" style={{ textAlign: "center", padding: "3rem 1rem", color: "#64648a" }}>
                            <p style={{ fontSize: "1.1rem" }}>No hay contenido multimedia disponible en este momento.</p>
                        </div>
                    )}
                </div>
            </section>
        </ScrollRevealWrapper>
    );
}
