import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight, Clock, Star } from "lucide-react";
import { getEvents } from "@/lib/wordpress";
import type { Event } from "@/lib/wordpress-types";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";

export const dynamic = "force-dynamic";


const fallbackUpcoming: Event[] = [
    {
        title: "CAISEB 2026",
        date: "10 - 11 de Marzo, 2026",
        location: "Internacional",
        description: "Congreso Académico Internacional — Encuentro de investigadores y académicos de toda Iberoamérica.",
        content: "",
        featured: true,
        link: "/caiseb",
        color: "#582080",
        rawDate: "2026-03-10",
        slug: "caiseb-2026",
    },
    {
        title: "Simposio de Innovación Educativa",
        date: "25 de Abril, 2026",
        location: "Virtual",
        description: "Espacio para compartir experiencias innovadoras en modelos pedagógicos y tecnología educativa.",
        content: "",
        featured: false,
        link: "#",
        color: "#000049",
        rawDate: "2026-04-25",
        slug: "simposio-innovacion",
    },
    {
        title: "Foro de Investigación en Salud",
        date: "15 de Mayo, 2026",
        location: "Ecuador",
        description: "Discusión sobre avances en enfermería, rehabilitación física y odontología.",
        content: "",
        featured: false,
        link: "#",
        color: "#000049",
        rawDate: "2026-05-15",
        slug: "foro-salud",
    },
];

const fallbackPast: Event[] = [
    {
        title: "CAISEB 2025",
        date: "Marzo, 2025",
        location: "",
        description: "Congreso Académico Internacional — Edición anterior del encuentro insignia de la RII.",
        content: "",
        featured: false,
        link: "#",
        color: "#000049",
        rawDate: "2025-03-01",
        slug: "caiseb-2025",
    },
    {
        title: "Taller de Ciberseguridad",
        date: "Noviembre, 2024",
        location: "",
        description: "Taller práctico sobre redes, seguridad informática y protección de datos.",
        content: "",
        featured: false,
        link: "#",
        color: "#000049",
        rawDate: "2024-11-01",
        slug: "taller-ciberseguridad",
    },
    {
        title: "Congreso de Turismo Sostenible",
        date: "Septiembre, 2024",
        location: "",
        description: "Encuentro sobre ecoturismo, educación ambiental y sostenibilidad en el sector.",
        content: "",
        featured: false,
        link: "#",
        color: "#000049",
        rawDate: "2024-09-01",
        slug: "turismo-sostenible",
    },
    {
        title: "Jornadas de Emprendimiento",
        date: "Junio, 2024",
        location: "",
        description: "Sesiones sobre emprendimiento en gastronomía, cosmetología y gestión empresarial.",
        content: "",
        featured: false,
        link: "#",
        color: "#000049",
        rawDate: "2024-06-01",
        slug: "jornadas-emprendimiento",
    },
];

export default async function EventosPage() {
    const { upcoming: wpUpcoming, past: wpPast } = await getEvents();


    const upcomingEvents = wpUpcoming.length > 0 || wpPast.length > 0 ? wpUpcoming : fallbackUpcoming;
    const pastEvents = wpUpcoming.length > 0 || wpPast.length > 0 ? wpPast : fallbackPast;

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
                        Eventos
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
                        Congresos, simposios, talleres y foros que organizamos para
                        fomentar la investigación y la colaboración.
                    </p>
                </div>
            </section>


            <section className="section-padding" style={{ background: "#fff" }}>
                <div className="container-custom">
                    <h2
                        className="scroll-reveal"
                        style={{
                            fontSize: "clamp(1.4rem, 3vw, 2rem)",
                            fontWeight: 700,
                            color: "#000049",
                            marginBottom: "2rem",
                        }}
                    >
                        Próximos Eventos
                    </h2>

                    {upcomingEvents.length > 0 ? (
                        <div className="stagger-children" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                            {upcomingEvents.map((event, i) => (
                                <Link
                                    key={i}
                                    href={`/eventos/${event.slug}`}
                                    style={{ textDecoration: "none", color: "inherit" }}
                                >
                                    <div
                                        className="hover-lift event-card"
                                        style={{
                                            background: event.featured ? "linear-gradient(135deg, #582080, #3a1060)" : "#f8f8ff",
                                            borderRadius: "20px",
                                            border: event.featured ? "none" : "1px solid #e8e8f4",
                                            color: event.featured ? "#fff" : "inherit",
                                            position: "relative",
                                            overflow: "hidden",
                                        }}
                                    >

                                        {event.imageUrl && (
                                            <div className="event-card-image">
                                                <Image
                                                    src={event.imageUrl}
                                                    alt={event.title}
                                                    fill
                                                    style={{ objectFit: "cover" }}
                                                    sizes="(max-width: 768px) 100vw, 280px"
                                                />
                                            </div>
                                        )}
                                        {event.featured && (
                                            <div
                                                className="animate-pulse-glow"
                                                style={{
                                                    position: "absolute",
                                                    top: "-30%",
                                                    right: "-10%",
                                                    width: "300px",
                                                    height: "300px",
                                                    borderRadius: "50%",
                                                    background: "radial-gradient(circle, rgba(254,199,4,0.12) 0%, transparent 70%)",
                                                }}
                                            />
                                        )}
                                        <div style={{ position: "relative", zIndex: 1, padding: "2rem", flex: 1 }}>
                                            {event.featured && (
                                                <div
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
                                                        marginBottom: "1rem",
                                                        letterSpacing: "0.5px",
                                                        textTransform: "uppercase",
                                                    }}
                                                >
                                                    <Star size={12} />
                                                    Destacado
                                                </div>
                                            )}
                                            <h3
                                                style={{
                                                    fontSize: "1.3rem",
                                                    fontWeight: 700,
                                                    marginBottom: "0.75rem",
                                                    color: event.featured ? "#fff" : "#000049",
                                                }}
                                            >
                                                {event.title}
                                            </h3>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    flexWrap: "wrap",
                                                    gap: "1rem",
                                                    marginBottom: "0.75rem",
                                                    fontSize: "0.875rem",
                                                    opacity: event.featured ? 0.8 : 1,
                                                    color: event.featured ? "#fff" : "#64648a",
                                                }}
                                            >
                                                <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                                                    <Calendar size={14} />
                                                    {event.date}
                                                </span>
                                                {event.location && (
                                                    <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                                                        <MapPin size={14} />
                                                        {event.location}
                                                    </span>
                                                )}
                                            </div>
                                            <p
                                                style={{
                                                    fontSize: "0.925rem",
                                                    lineHeight: 1.6,
                                                    opacity: event.featured ? 0.8 : 1,
                                                    color: event.featured ? "#fff" : "#555",
                                                    marginBottom: "1.25rem",
                                                }}
                                            >
                                                {event.description}
                                            </p>
                                            <span
                                                style={{
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    gap: "0.35rem",
                                                    background: event.featured ? "#FEC704" : "#000049",
                                                    color: event.featured ? "#582080" : "#fff",
                                                    padding: "0.6rem 1.25rem",
                                                    borderRadius: "10px",
                                                    fontWeight: 600,
                                                    fontSize: "0.875rem",
                                                }}
                                            >
                                                Ver más
                                                <ArrowRight size={16} />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="scroll-reveal" style={{ textAlign: "center", padding: "2rem 1rem", color: "#64648a" }}>
                            <p>No hay eventos próximos programados.</p>
                        </div>
                    )}
                </div>
            </section>


            {pastEvents.length > 0 && (
                <section className="section-padding" style={{ background: "#f8f8ff" }}>
                    <div className="container-custom">
                        <h2
                            className="scroll-reveal"
                            style={{
                                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                                fontWeight: 700,
                                color: "#000049",
                                marginBottom: "2rem",
                            }}
                        >
                            Eventos Pasados
                        </h2>

                        <div
                            className="stagger-children"
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                                gap: "1.5rem",
                            }}
                        >
                            {pastEvents.map((event, i) => (
                                <Link
                                    key={i}
                                    href={`/eventos/${event.slug}`}
                                    style={{ textDecoration: "none", color: "inherit" }}
                                >
                                    <div
                                        className="hover-lift"
                                        style={{
                                            background: "#fff",
                                            borderRadius: "16px",
                                            border: "1px solid #e8e8f4",
                                            borderLeft: "4px solid #000049",
                                            overflow: "hidden",
                                            height: "100%",
                                        }}
                                    >

                                        {event.imageUrl && (
                                            <div style={{ position: "relative", width: "100%", height: "160px" }}>
                                                <Image
                                                    src={event.imageUrl}
                                                    alt={event.title}
                                                    fill
                                                    style={{ objectFit: "cover" }}
                                                    sizes="(max-width: 768px) 100vw, 350px"
                                                />
                                            </div>
                                        )}
                                        <div style={{ padding: "1.75rem" }}>
                                            <div
                                                style={{
                                                    fontSize: "0.8rem",
                                                    color: "#64648a",
                                                    marginBottom: "0.5rem",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.35rem",
                                                }}
                                            >
                                                <Clock size={12} />
                                                {event.date}
                                            </div>
                                            <h3
                                                style={{
                                                    fontSize: "1.05rem",
                                                    fontWeight: 600,
                                                    color: "#000049",
                                                    marginBottom: "0.5rem",
                                                }}
                                            >
                                                {event.title}
                                            </h3>
                                            <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.6 }}>
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </ScrollRevealWrapper>
    );
}
