import { getPageBySlug } from "@/lib/wordpress";
import { Calendar, MapPin } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function CaisebPage() {
    const page = await getPageBySlug("caiseb");

    return (
        <div>

            {page?.cssUrls.map((url, i) => (
                <link key={i} rel="stylesheet" href={url} />
            ))}

            {page && page.content ? (

                <div
                    className="wp-elementor-content"
                    dangerouslySetInnerHTML={{ __html: page.content }}
                />
            ) : (

                <section
                    style={{
                        background: "linear-gradient(135deg, #582080 0%, #3a1060 40%, #2a0848 100%)",
                        color: "#fff",
                        minHeight: "60vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        padding: "4rem 1.5rem",
                    }}
                >
                    <div style={{ maxWidth: "600px" }}>
                        <div
                            style={{
                                display: "inline-block",
                                background: "#FEC704",
                                color: "#582080",
                                padding: "0.4rem 1.25rem",
                                borderRadius: "999px",
                                fontSize: "0.85rem",
                                fontWeight: 700,
                                marginBottom: "1.5rem",
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                            }}
                        >
                            IV Congreso Académico Internacional
                        </div>
                        <h1
                            style={{
                                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                                fontWeight: 900,
                                lineHeight: 1.1,
                                marginBottom: "1.5rem",
                            }}
                        >
                            CAISEB 2026
                        </h1>
                        <p style={{ opacity: 0.7, fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                            Innovación, Salud, Educación y Bienestar
                        </p>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                gap: "2rem",
                                flexWrap: "wrap",
                                opacity: 0.8,
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                <Calendar size={18} color="#FEC704" />
                                <span>Próximamente</span>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                <MapPin size={18} color="#FEC704" />
                                <span>Iberoamérica</span>
                            </div>
                        </div>
                        <p
                            style={{
                                marginTop: "3rem",
                                padding: "1.5rem",
                                background: "rgba(255,255,255,0.08)",
                                borderRadius: "16px",
                                border: "1px solid rgba(254,199,4,0.2)",
                                fontSize: "0.95rem",
                                opacity: 0.8,
                            }}
                        >
                            El contenido de esta página se está preparando.
                            Pronto estará disponible con toda la información del congreso.
                        </p>
                    </div>
                </section>
            )}
        </div>
    );
}
