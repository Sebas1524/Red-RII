import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowLeft, MapPin, Star, ExternalLink } from "lucide-react";
import { getEvents, getEventBySlug } from "@/lib/wordpress";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";


const fallbackContent: Record<string, {
    title: string;
    content: string;
    date: string;
    location: string;
    imageUrl?: string;
    featured: boolean;
    link: string;
}> = {
    "caiseb-2026": {
        title: "CAISEB 2026",
        content: `<p>El <strong>Congreso Académico Internacional CAISEB 2026</strong> es el evento insignia de la Red Iberoamericana de Investigación.</p>
<p>Se celebrará los días <strong>10 y 11 de marzo de 2026</strong>, reuniendo a investigadores, académicos y profesionales de toda Iberoamérica.</p>
<h2>¿Qué esperar?</h2>
<ul>
<li>Ponencias magistrales de expertos internacionales</li>
<li>Presentación de trabajos de investigación</li>
<li>Mesas de trabajo y networking</li>
<li>Talleres prácticos</li>
</ul>
<h2>Áreas Temáticas</h2>
<p>El congreso abarcará múltiples líneas de investigación, incluyendo ciencias de la salud, tecnología educativa, turismo sostenible, emprendimiento e innovación, y muchas más.</p>
<p>Las inscripciones ya están abiertas. ¡No te lo pierdas!</p>`,
        date: "10 - 11 de Marzo, 2026",
        location: "Internacional",
        featured: true,
        link: "/caiseb",
    },
};

export async function generateStaticParams() {
    const { upcoming, past } = await getEvents();
    const all = [...upcoming, ...past];
    if (all.length > 0) {
        return all.map((e) => ({ slug: e.slug }));
    }

    return Object.keys(fallbackContent).map((slug) => ({ slug }));
}

export default async function EventoDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;


    let event = await getEventBySlug(slug);


    if (!event) {
        const fb = fallbackContent[slug];
        if (!fb) notFound();
        event = fb;
    }

    return (
        <>

            <section
                style={{
                    background: event.featured
                        ? "linear-gradient(135deg, #582080 0%, #3a1060 50%, #582080 100%)"
                        : "linear-gradient(135deg, #000049 0%, #0a0a6e 50%, #000030 100%)",
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
                        background: event.featured
                            ? "radial-gradient(circle, rgba(254,199,4,0.08) 0%, transparent 70%)"
                            : "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
                    }}
                />
                <div className="container-custom" style={{ position: "relative", zIndex: 1, maxWidth: "800px" }}>
                    <Link
                        href="/eventos"
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
                        Volver a Eventos
                    </Link>
                    {event.featured && (
                        <div style={{ marginBottom: "1rem" }}>
                            <span
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.35rem",
                                    background: "#FEC704",
                                    color: "#582080",
                                    padding: "0.3rem 0.75rem",
                                    borderRadius: "999px",
                                    fontSize: "0.75rem",
                                    fontWeight: 700,
                                    letterSpacing: "0.5px",
                                    textTransform: "uppercase",
                                }}
                            >
                                <Star size={12} />
                                Evento Destacado
                            </span>
                        </div>
                    )}
                    <h1
                        style={{
                            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                            fontWeight: 800,
                            marginBottom: "1rem",
                            lineHeight: 1.3,
                        }}
                    >
                        {event.title}
                    </h1>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1.25rem",
                            opacity: 0.8,
                            fontSize: "0.95rem",
                            flexWrap: "wrap",
                        }}
                    >
                        <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                            <Calendar size={16} />
                            {event.date}
                        </span>
                        {event.location && (
                            <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                                <MapPin size={16} />
                                {event.location}
                            </span>
                        )}
                    </div>
                </div>
            </section>


            {event.imageUrl && (
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
                                src={event.imageUrl}
                                alt={event.title}
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 800px) 100vw, 800px"
                                priority
                            />
                        </div>
                    </div>
                </section>
            )}


            <section style={{ background: "#fff", padding: event.imageUrl ? "1rem 1.5rem 5rem" : "3rem 1.5rem 5rem" }}>
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <div
                        className="wp-content"
                        style={{
                            fontSize: "1.05rem",
                            lineHeight: 1.8,
                            color: "#333",
                        }}
                        dangerouslySetInnerHTML={{ __html: event.content }}
                    />


                    {event.link && event.link !== "#" && (
                        <div style={{ marginTop: "2rem" }}>
                            <Link
                                href={event.link}
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.4rem",
                                    background: event.featured ? "#582080" : "#000049",
                                    color: "#fff",
                                    padding: "0.85rem 1.75rem",
                                    borderRadius: "12px",
                                    fontWeight: 600,
                                    textDecoration: "none",
                                    fontSize: "0.95rem",
                                }}
                            >
                                <ExternalLink size={16} />
                                Ir al evento
                            </Link>
                        </div>
                    )}

                    <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid #e8e8f4" }}>
                        <Link
                            href="/eventos"
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
                            }}
                        >
                            <ArrowLeft size={16} />
                            Volver a Eventos
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
