"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import NetworkIllustration from "@/components/decorative/NetworkIllustration";
import { useEffect, useState, useRef } from "react";

import { Users, Search, MapPin, GraduationCap, Building2, MessageSquare, Award, Calendar } from "lucide-react";

const memberLogos = [
    { src: "AITEC.png", url: "https://aitec.edu.ec/" },
    { src: "ALBERTO ENRIQUEZ.webp", url: "https://www.istae.edu.ec/" },
    { src: "ALQUIMIA.png", url: "https://alquimia.edu.ec/" },
    { src: "BOLIVAR.png", url: "http://www.istbolivar.edu.ec:8081/web/index.php" },
    { src: "CARLOS CISNEROS.png", url: "https://istcarloscisneros.edu.ec/" },
    { src: "CENESTUR.png", url: "https://cenestur.edu.ec/" },
    { src: "CEPU_LOGO-2-scaled.png", url: "https://www.facebook.com/OportunidadCepu/?locale=es_LA" },
    { src: "COTACACHI.avif", url: "https://www.institutocotacachi.edu.ec/" },
    { src: "cuesttv_LOGO.png", url: "https://cuesttv.edu.ec/" },
    { src: "EDUPRAXIS.svg", url: "https://tecnologicoedupraxis.edu.ec/" },
    { src: "EL LIBERTADOR.png", url: "https://istel.edu.ec/" },
    { src: "ELOY ALFARO.png", url: "https://edusuperior.ec/oferta-academica/ies/instituto-superior-tecnologico-general-eloy-alfaro" },
    { src: "insituttuto-supeiro-guyaquil.png", url: "https://universidades.ec/universidades/instituto-superior-tecnologico-guayaquil" },
    { src: "instituto-tecnologico-iti-logo.png", url: "https://iti.edu.ec/" },
    { src: "ITCA.svg", url: "https://itca.edu.ec/" },
    { src: "ITSO.png", url: "https://itsoriente.edu.ec/" },
    { src: "Japon.png", url: "https://itsjapon.edu.ec/" },
    { src: "LEMA.png", url: "https://www.teclemas.edu.ec/inicio/" },
    { src: "logo-lendan.png", url: "https://tecnologicolendan.edu.ec/" },
    { src: "logo istla.png", url: "https://liceoaduanero.edu.ec/" },
    { src: "misael-costa.png", url: "https://www.istmas.edu.ec/" },
    { src: "nikola-tesla.png", url: "https://istnikolatesla.edu.ec/" },
    { src: "ORELLANA.png", url: "" },
    { src: "pichincha-logo.png", url: "https://www.tecnologicopichincha.edu.ec/" },
    { src: "QUININDE.png", url: "https://institutoquininde.edu.ec/" },
    { src: "QUITO.png", url: "https://itq.edu.ec/" },
    { src: "rey-david.png", url: "https://itred.edu.ec/" },
    { src: "sudaamericano-guayaquil.jpg", url: "https://www.tecsu-online.com/" },
    { src: "SUDAMERICANO.png", url: "https://sudamericano.edu.ec/" },
    { src: "traversari.jpg", url: "https://institutotraversari.edu.ec/" },
    { src: "Ulpiano-de-la-torre.png", url: "https://istluisulpianodelatorre.edu.ec/" },
    { src: "urdesa.png", url: "https://www.itsu.edu.ec/" },
    { src: "YAVIRAC.png", url: "https://yavirac.edu.ec/" },
    { src: "bolivariano.png", url: "https://tbolivariano.edu.ec/" },
    { src: "ohiggins.png", url: "https://www.instituto-ohiggins.edu.ec/" },
    { src: "wissen.png", url: "https://wissen.edu.ec/" },
    { src: "Sucre.png", url: "https://tecnologicosucre.edu.ec/web/" },
];

const stats = [
    { label: "Instituciones Miembro", value: 40, icon: Building2, suffix: "+" },
    { label: "Investigadores", value: 500, icon: Users, suffix: "+" },
    { label: "Países", value: 8, icon: MapPin, suffix: "+" },
    { label: "Proyectos Activos", value: 25, icon: Search, suffix: "+" },
];

// Componente de contador animado con tipos
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { 
    end: number; 
    duration?: number; 
    suffix?: string;
}) {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !started.current) {
                    started.current = true;
                    let start = 0;
                    const increment = end / (duration / 16);
                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);
                }
            },
            { threshold: 0.5 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, [end, duration]);

    return <span ref={countRef}>{count}{suffix}</span>;
}

export default function MiembrosPage() {
    const containerRef = useScrollReveal();

    return (
        <div ref={containerRef}>

            <section
                style={{
                    background: "linear-gradient(135deg, #000049 0%, #0a0a6e 100%)",
                    color: "#fff",
                    padding: "6rem 1.5rem 4rem",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%) scale(1.5)",
                        width: "100%",
                        height: "100%",
                        opacity: 0.4,
                        pointerEvents: "none",
                    }}
                >
                    <NetworkIllustration />
                </div>

                <div className="container-custom scroll-reveal" style={{ position: "relative", zIndex: 1 }}>
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            background: "rgba(255,255,255,0.1)",
                            padding: "0.5rem 1rem",
                            borderRadius: "999px",
                            marginBottom: "1.5rem",
                            backdropFilter: "blur(4px)",
                        }}
                    >
                        <Users size={18} />
                        <span style={{ fontSize: "0.9rem", fontWeight: 500 }}>
                            Nuestra Comunidad
                        </span>
                    </div>
                    <h1
                        style={{
                            fontSize: "clamp(2.5rem, 5vw, 4rem)",
                            fontWeight: 800,
                            marginBottom: "1.5rem",
                            lineHeight: 1.1,
                        }}
                    >
                        Miembros de la Red
                    </h1>
                    <p
                        style={{
                            fontSize: "1.25rem",
                            opacity: 0.9,
                            maxWidth: "700px",
                            margin: "0 auto",
                            lineHeight: 1.6,
                        }}
                    >
                        Instituciones líderes unidas por el compromiso con la investigación,
                        la innovación y la excelencia académica en Iberoamérica.
                    </p>
                </div>
            </section>

            {/* Foto del Presidente + Mensaje */}
            <section style={{ padding: "4rem 1.5rem", background: "#fff" }}>
                <div className="container-custom">
                    <div className="scroll-reveal" 
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1.5fr",
                            gap: "3rem",
                            alignItems: "center",
                            maxWidth: "1000px",
                            margin: "0 auto",
                        }}
                    >
                        {/* Foto del Presidente */}
                        <div
                            className="hover-lift"
                            style={{
                                background: "#fff",
                                borderRadius: "20px",
                                overflow: "hidden",
                                boxShadow: "0 8px 30px rgba(0,0,73,0.1)",
                                border: "1px solid #e8e8f4",
                                width: "100%",
                                textAlign: "center",
                            }}
                        >
                            <div
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    height: "400px",
                                    overflow: "hidden",
                                    background: "linear-gradient(135deg, #f0f0f8 0%, #e8e8f4 100%)",
                                }}
                            >
                                <img
                                    src="/miembros/dr-milton-altamirano.jpeg"
                                    alt="Dr. Milton Altamirano Pazmiño"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        objectPosition: "top",
                                    }}
                                />
                            </div>
                            <div style={{ padding: "1.5rem 2rem 2rem" }}>
                                <div
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                                        color: "#fff",
                                        padding: "0.3rem 1rem",
                                        borderRadius: "999px",
                                        fontSize: "0.75rem",
                                        fontWeight: 600,
                                        letterSpacing: "1px",
                                        textTransform: "uppercase",
                                        marginBottom: "0.75rem",
                                    }}
                                >
                                    <GraduationCap size={14} />
                                    Presidente
                                </div>
                                <h3
                                    style={{
                                        fontSize: "1.3rem",
                                        fontWeight: 700,
                                        color: "#000049",
                                        marginBottom: "0.25rem",
                                    }}
                                >
                                    Dr. Milton Altamirano Pazmiño
                                </h3>
                            </div>
                        </div>

                        {/* Mensaje de la Presidencia */}
                        <div
                            className="hover-lift"
                            style={{
                                background: "linear-gradient(135deg, #f8f8ff, #fff)",
                                padding: "2.5rem",
                                borderRadius: "20px",
                                border: "1px solid #e8e8f4",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            {/* Elemento decorativo */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "-20%",
                                    right: "-10%",
                                    width: "200px",
                                    height: "200px",
                                    borderRadius: "50%",
                                    background: "radial-gradient(circle, rgba(254,199,4,0.1) 0%, transparent 70%)",
                                    pointerEvents: "none",
                                }}
                            />
                            
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                                <div
                                    style={{
                                        width: 48,
                                        height: 48,
                                        borderRadius: "12px",
                                        background: "linear-gradient(135deg, #FEC704, #fdd835)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <MessageSquare size={24} color="#000049" />
                                </div>
                                <h2
                                    style={{
                                        fontSize: "1.5rem",
                                        fontWeight: 700,
                                        color: "#000049",
                                    }}
                                >
                                    Mensaje de la Presidencia
                                </h2>
                            </div>

                            <p
                                style={{
                                    fontSize: "1rem",
                                    lineHeight: 1.8,
                                    color: "#2c2c4a",
                                    fontStyle: "italic",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                "La Red Iberoamericana de Investigación (RII) nació con la convicción de que la ciencia no debe ser un esfuerzo aislado, sino un puente hacia el desarrollo común. Nuestra visión para el 2026 es consolidar un ecosistema donde la tecnología y la ética caminen de la mano, transformando cada hallazgo en una solución tangible para nuestra sociedad.
                            </p>

                            <p
                                style={{
                                    fontSize: "1rem",
                                    lineHeight: 1.8,
                                    color: "#2c2c4a",
                                    fontStyle: "italic",
                                }}
                            >
                                A través de eventos como el CAISEB, reafirmamos nuestro compromiso de potenciar las capacidades de nuestros académicos y profesionales, alineándonos a las metas de desarrollo nacional e internacional. No solo estamos construyendo una red de conocimientos; estamos diseñando el futuro productivo y humano de Iberoamérica."
                            </p>

                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    marginTop: "2rem",
                                }}
                            >
                                <Calendar size={16} color="#FEC704" />
                                <span style={{ fontSize: "0.9rem", color: "#64648a" }}>
                                    2026 - Visión de futuro
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Estadísticas con animación */}
            <section style={{ padding: "4rem 1.5rem", background: "#f8f9fc" }}>
                <div className="container-custom">
                    <div
                        className="stagger-children"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: "2rem",
                        }}
                    >
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="hover-lift"
                                style={{
                                    background: "#fff",
                                    padding: "2rem",
                                    borderRadius: "16px",
                                    textAlign: "center",
                                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                                }}
                            >
                                <div
                                    style={{
                                        display: "inline-flex",
                                        padding: "1rem",
                                        borderRadius: "50%",
                                        background: "#f0f0f8",
                                        color: "#000049",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    <stat.icon size={24} />
                                </div>
                                <div
                                    style={{
                                        fontSize: "2.5rem",
                                        fontWeight: 800,
                                        color: "#000049",
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                </div>
                                <div
                                    style={{
                                        fontSize: "0.9rem",
                                        color: "#64648a",
                                        fontWeight: 500,
                                    }}
                                >
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Instituciones Aliadas */}
            <section style={{ padding: "4rem 1.5rem 6rem", background: "#fff" }}>
                <div className="container-custom">
                    <div className="scroll-reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <h2
                            style={{
                                fontSize: "2rem",
                                fontWeight: 700,
                                color: "#000049",
                                marginBottom: "1rem",
                            }}
                        >
                            Instituciones Aliadas
                        </h2>
                        <p style={{ color: "#64648a", maxWidth: "600px", margin: "0 auto" }}>
                            Conoce a las organizaciones que hacen posible nuestra misión de fortalecer la investigación.
                        </p>
                    </div>

                    <div
                        className="stagger-children"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                            gap: "2rem",
                        }}
                    >
                        {memberLogos.map((item, index) => {
                            const name = item.src.replace(/\.(png|jpg|jpeg|webp|svg|avif)$/i, "").replace(/_/g, " ");
                            const cardContent = (
                                <div
                                    className="logo-hover"
                                    style={{
                                        background: "#fff",
                                        borderRadius: "12px",
                                        padding: "1.5rem",
                                        display: "flex",
                                        justifyContent: "center",
                                        height: "160px",
                                        border: "1px solid #eef0f5",
                                        boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
                                        transition: "all 0.3s ease",
                                        position: "relative",
                                        cursor: "pointer",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                                        e.currentTarget.style.boxShadow = "0 20px 30px rgba(0,0,73,0.15)";
                                        e.currentTarget.style.borderColor = "#FEC704";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "translateY(0) scale(1)";
                                        e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.02)";
                                        e.currentTarget.style.borderColor = "#eef0f5";
                                    }}
                                >
                                    <img
                                        src={`/miembros/${item.src}`}
                                        alt={name}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "contain",
                                            filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.2)) drop-shadow(0px 0px 2px rgba(0,0,0,0.4))",
                                            transition: "all 0.3s ease",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.filter = "drop-shadow(0px 4px 8px rgba(254,199,4,0.3)) drop-shadow(0px 0px 4px rgba(0,0,0,0.5))";
                                            e.currentTarget.style.transform = "scale(1.05)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.filter = "drop-shadow(0px 2px 4px rgba(0,0,0,0.2)) drop-shadow(0px 0px 2px rgba(0,0,0,0.4))";
                                            e.currentTarget.style.transform = "scale(1)";
                                        }}
                                    />
                                </div>
                            );

                            return item.url ? (
                                <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" style={{ display: "block", textDecoration: "none" }}>
                                    {cardContent}
                                </a>
                            ) : (
                                <div key={index}>
                                    {cardContent}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <style jsx>{`
                .logo-hover {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .logo-hover:hover {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
            `}</style>
        </div>
    );
}
