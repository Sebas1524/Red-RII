"use client";

import {
    BookOpen,
    Eye,
    Microscope,
    GraduationCap,
    Wrench,
    BarChart3,
    Code2,
    Heart,
    ChefHat,
    Sparkles,
    TreePine,
    Zap,
    Brain,
    Globe2,
} from "lucide-react";
import dynamic from 'next/dynamic';

const ResearchMap = dynamic(() => import('@/components/dashboard/ResearchMap'), {
    ssr: false,
    loading: () => <div className="w-full h-[600px] bg-slate-900/50 rounded-3xl animate-pulse" />
});

const researchLines = [
    {
        icon: GraduationCap,
        title: "Educación",
        items: [
            "Innovación educativa inclusiva",
            "Modelos pedagógicos presenciales y virtuales",
            "Tecnología aplicada a la educación",
            "Prevención de dificultades de aprendizaje",
            "Entorno socio-familiar",
        ],
    },
    {
        icon: Wrench,
        title: "Mecánica Automotriz",
        items: [
            "Emprendimiento e innovación en el sector",
            "Energías renovables",
            "Sostenibilidad energética",
            "Diseño de sistemas mecatrónicos",
        ],
    },
    {
        icon: BarChart3,
        title: "Administración, Contabilidad y Marketing",
        items: [
            "Gestión empresarial con enfoque de género",
            "Finanzas estratégicas",
            "Transformación digital",
            "Cultura organizacional en Pymes",
            "Desarrollo de programas económicos",
        ],
    },
    {
        icon: Code2,
        title: "Desarrollo de Software",
        items: [
            "Software para educación y empresas",
            "Aplicaciones móviles",
            "Redes y ciberseguridad",
        ],
    },
    {
        icon: Heart,
        title: "Salud y Bienestar",
        items: [
            "Enfermería: desarrollo humano integral",
            "Rehabilitación física y fisioterapia",
            "Odontología: seguridad del paciente",
            "Atención hospitalaria y comunitaria",
        ],
    },
    {
        icon: ChefHat,
        title: "Gastronomía",
        items: [
            "Seguridad e higiene alimentaria",
            "Manipulación de alimentos",
            "Gastronomía y cultura",
        ],
    },
    {
        icon: Sparkles,
        title: "Estética Integral",
        items: [
            "Emprendimientos en cosmetología",
            "Promoción de salud y calidad de vida",
        ],
    },
    {
        icon: TreePine,
        title: "Turismo",
        items: [
            "Ecoturismo y sostenibilidad",
            "Educación ambiental",
            "Adaptación del sector turístico",
        ],
    },
    {
        icon: Zap,
        title: "Electricidad",
        items: [
            "Eficiencia energética",
            "Calidad de la energía eléctrica",
            "Estudio de máquinas eléctricas",
        ],
    },
];

const transversalAreas = [
    { icon: Globe2, label: "Cambio climático" },
    { icon: Brain, label: "IA aplicada a salud y educación" },
    { icon: Microscope, label: "Diversidad y convivencia en la pospandemia" },
];

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Image from "next/image";
import NetworkIllustration from "@/components/decorative/NetworkIllustration";

export default function LaRedPage() {
    const containerRef = useScrollReveal();

    return (
        <div ref={containerRef}>

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
                        La Red
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
                        Conoce nuestra misión, visión y las líneas de investigación que
                        impulsan el desarrollo educativo y social en Iberoamérica.
                    </p>
                </div>


                <div
                    style={{
                        position: "absolute",
                        top: "55%",
                        right: "-15%",
                        transform: "translateY(-50%)",
                        width: "800px",
                        height: "800px",
                        opacity: 0.6,
                        pointerEvents: "none",
                    }}
                >
                    <NetworkIllustration />
                </div>
            </section>


            <section className="section-padding" style={{ background: "#fff" }}>
                <div className="container-custom">
                    <div
                        className="stagger-children"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                            gap: "2rem",
                        }}
                    >

                        <div
                            className="hover-lift"
                            style={{
                                background: "linear-gradient(135deg, #000049, #0a0a6e)",
                                borderRadius: "20px",
                                padding: "2.5rem",
                                color: "#fff",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >

                            <div
                                style={{
                                    position: "relative",
                                    height: "200px",
                                    margin: "-2.5rem -2.5rem 1.5rem -2.5rem",
                                }}
                            >
                                <Image
                                    src="/images/mission-teamwork.jpg"
                                    alt="Misión"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    sizes="(max-width: 768px) 100vw, 400px"
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,73,0.3) 100%)",
                                    }}
                                />
                            </div>
                            <div
                                className="animate-pulse-glow"
                                style={{
                                    position: "absolute",
                                    top: "-20%",
                                    right: "-15%",
                                    width: "200px",
                                    height: "200px",
                                    borderRadius: "50%",
                                    background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
                                }}
                            />
                            <div
                                style={{
                                    width: 56,
                                    height: 56,
                                    borderRadius: "14px",
                                    background: "rgba(255,255,255,0.12)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "1.25rem",
                                }}
                            >
                                <BookOpen size={28} color="#fff" />
                            </div>
                            <h2
                                style={{
                                    fontSize: "1.5rem",
                                    fontWeight: 700,
                                    marginBottom: "1rem",
                                }}
                            >
                                Misión
                            </h2>
                            <p style={{ lineHeight: 1.8, opacity: 0.85, fontSize: "0.95rem" }}>
                                La misión de la Red es hacer de la investigación un proceso vital
                                que parta de los intereses, motivaciones y afinidades de las
                                diversas áreas del conocimiento que la integran. Este proceso
                                debe realizarse de manera colegiada, organizada y sistemática
                                entre todos sus miembros y colaboradores.
                            </p>
                        </div>


                        <div
                            className="hover-lift"
                            style={{
                                background: "#f8f8ff",
                                borderRadius: "20px",
                                padding: "2.5rem",
                                border: "2px solid #e8e8f4",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >

                            <div
                                style={{
                                    position: "relative",
                                    height: "200px",
                                    margin: "-2.5rem -2.5rem 1.5rem -2.5rem",
                                }}
                            >
                                <Image
                                    src="/images/vision-future.jpg"
                                    alt="Visión"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    sizes="(max-width: 768px) 100vw, 400px"
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,73,0.1) 100%)",
                                    }}
                                />
                            </div>
                            <div
                                className="animate-pulse-glow"
                                style={{
                                    position: "absolute",
                                    bottom: "-20%",
                                    left: "-15%",
                                    width: "200px",
                                    height: "200px",
                                    borderRadius: "50%",
                                    background: "radial-gradient(circle, rgba(0,0,73,0.04) 0%, transparent 70%)",
                                }}
                            />
                            <div
                                style={{
                                    width: 56,
                                    height: 56,
                                    borderRadius: "14px",
                                    background: "#000049",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "1.25rem",
                                }}
                            >
                                <Eye size={28} color="#fff" />
                            </div>
                            <h2
                                style={{
                                    fontSize: "1.5rem",
                                    fontWeight: 700,
                                    color: "#000049",
                                    marginBottom: "1rem",
                                }}
                            >
                                Visión
                            </h2>
                            <p style={{ lineHeight: 1.8, color: "#444", fontSize: "0.95rem" }}>
                                La visión de la RII es posicionarse como el eje central de las
                                investigaciones que den apoyo a la solución de diversas
                                problemáticas que surjan en el ámbito educativo. Busca el
                                fortalecimiento de los currículos y, por ende, la formación
                                integral universitaria en las diferentes áreas del conocimiento,
                                considerando las tendencias, procesos y actores actuales.
                            </p>
                        </div>
                    </div>
                </div>
            </section>




            <section className="section-padding bg-slate-900 text-white overflow-hidden">
                <div className="container-custom">
                    <div className="scroll-reveal text-center !mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                            Presencia en Iberoamérica
                        </h2>
                        <p className="text-slate-400 text-lg text-center">
                            Una red viva de colaboración científica que une a 16 países y más de 80 investigadores.
                        </p>
                    </div>
                    <div className="scroll-reveal shadow-2xl rounded-3xl border border-slate-700/50">
                        <ResearchMap className="h-[700px] w-full" />
                    </div>
                </div>
            </section>


            <section className="section-padding" style={{ background: "#f8f8ff" }}>
                <div className="container-custom">
                    <div className="scroll-reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <h2
                            style={{
                                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                                fontWeight: 700,
                                color: "#000049",
                                marginBottom: "0.75rem",
                            }}
                        >
                            Líneas de Investigación
                        </h2>
                        <p
                            style={{
                                color: "#64648a",
                                fontSize: "1.05rem",
                                maxWidth: "600px",
                                margin: "0 auto",
                            }}
                        >
                            Orientadas al fortalecimiento de proyectos que generen impacto en
                            el desarrollo, la innovación y el mejoramiento de la sociedad.
                        </p>
                    </div>

                    <div
                        className="stagger-children"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                            gap: "1.5rem",
                        }}
                    >
                        {researchLines.map((line, i) => (
                            <div
                                key={i}
                                className="hover-lift"
                                style={{
                                    background: "#fff",
                                    borderRadius: "16px",
                                    padding: "1.75rem",
                                    border: "1px solid #e8e8f4",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.75rem",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 44,
                                            height: 44,
                                            borderRadius: "12px",
                                            background: "linear-gradient(135deg, #000049, #0a0a6e)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <line.icon size={22} color="#fff" />
                                    </div>
                                    <h3
                                        style={{
                                            fontSize: "1.05rem",
                                            fontWeight: 600,
                                            color: "#000049",
                                        }}
                                    >
                                        {line.title}
                                    </h3>
                                </div>
                                <ul
                                    style={{
                                        listStyle: "none",
                                        padding: 0,
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "0.4rem",
                                    }}
                                >
                                    {line.items.map((item, j) => (
                                        <li
                                            key={j}
                                            style={{
                                                display: "flex",
                                                alignItems: "flex-start",
                                                gap: "0.5rem",
                                                color: "#555",
                                                fontSize: "0.875rem",
                                                lineHeight: 1.5,
                                            }}
                                        >
                                            <span
                                                style={{
                                                    width: 6,
                                                    height: 6,
                                                    borderRadius: "50%",
                                                    background: "#000049",
                                                    flexShrink: 0,
                                                    marginTop: "0.45rem",
                                                }}
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section
    style={{
        position: "relative",
        overflow: "hidden",
    }}
>
    {/* Imagen de Fondo */}
    <div
        style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
        }}
    >
        <Image
            src="/images/fondoV3.png"
            alt="Fondo Áreas Transversales"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority={false}
        />
        {/* Overlay oscuro para mejorar la legibilidad del texto */}
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0, 0, 49, 0.7)", // Overlay más oscuro para mejor contraste
                zIndex: 1,
            }}
        />
    </div>

    {/* Contenido */}
    <div className="container-custom scroll-reveal" 
        style={{ 
            position: "relative", 
            zIndex: 2, 
            padding: "4rem 1.5rem",
            textAlign: "center",
        }}
    >
        <h2
            style={{
                color: "#fff",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 700,
                marginBottom: "0.5rem",
                letterSpacing: "1px",
                textTransform: "uppercase",
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
        >
            Áreas Temáticas Transversales
        </h2>
        <p
            style={{
                color: "rgba(255,255,255,0.8)",
                marginBottom: "2.5rem",
                fontSize: "1rem",
                textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
            }}
        >
            Temas que cruzan todas las líneas de investigación
        </p>

        {/* Línea decorativa */}
        <div
            style={{
                width: "80px",
                height: "3px",
                background: "#FEC704",
                margin: "0 auto 2.5rem auto",
                borderRadius: "2px",
            }}
        />
        
        <div
            className="stagger-children"
            style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                justifyContent: "center",
                maxWidth: "800px",
                margin: "0 auto",
            }}
        >
            {transversalAreas.map((area, i) => (
                <div
                    key={i}
                    className="hover-lift"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        background: "rgba(255,255,255,0.12)",
                        padding: "1rem 2rem",
                        borderRadius: "50px",
                        border: "1px solid rgba(254,199,4,0.3)",
                        color: "#fff",
                        backdropFilter: "blur(8px)",
                        transition: "all 0.3s ease",
                        cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#FEC704";
                        e.currentTarget.style.color = "#000049";
                        e.currentTarget.style.borderColor = "#FEC704";
                        e.currentTarget.style.transform = "translateY(-3px)";
                        e.currentTarget.style.boxShadow = "0 10px 25px rgba(254,199,4,0.3)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                        e.currentTarget.style.color = "#fff";
                        e.currentTarget.style.borderColor = "rgba(254,199,4,0.3)";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                    }}
                >
                                    <area.icon size={22} style={{ opacity: 0.9 }} />
                                    <span style={{ fontSize: "1rem", fontWeight: 500 }}>
                                        {area.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>            {/* Documentos Legales */}
<section className="section-padding" style={{ background: "#fff", padding: "4rem 1.5rem" }}>
    <div className="container-custom">
        <div className="scroll-reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
            {/* Icono decorativo */}
            <div
                style={{
                    width: 64,
                    height: 64,
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, #FEC704, #fdd835)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem auto",
                }}
            >
                <BookOpen size={32} color="#000049" />
            </div>

            <h2
                style={{
                    fontSize: "clamp(1.8rem, 3vw, 2.2rem)",
                    fontWeight: 700,
                    color: "#000049",
                    marginBottom: "1rem",
                }}
            >
                Documentos Legales
            </h2>
            <p
                style={{
                    color: "#64648a",
                    fontSize: "1.1rem",
                    maxWidth: "700px",
                    margin: "0 auto",
                    lineHeight: 1.6,
                }}
            >
                Conoce los documentos fundamentales que respaldan y guían el trabajo 
                de la Red Iberoamericana de Investigación.
            </p>
        </div>

        {/* Documentos Principales */}
        <div className="scroll-reveal" style={{ marginBottom: "3rem" }}>
            <h3
                style={{
                    fontSize: "1.3rem",
                    fontWeight: 600,
                    color: "#000049",
                    marginBottom: "1.5rem",
                    paddingBottom: "0.5rem",
                    borderBottom: "2px solid #FEC704",
                }}
            >
                Documentos Fundamentales
            </h3>
            <div
                className="stagger-children"
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
                    gap: "1.5rem",
                }}
            >
                {/* ACTA 27 MARZO 2024 */}
                <a
                    href="/documentos-legales/1ACTARII1-27 MARZO DEL 2024.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                >
                    <div
                        className="hover-lift"
                        style={{
                            background: "#f8f8ff",
                            borderRadius: "16px",
                            padding: "1.5rem",
                            border: "1px solid #e8e8f4",
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                            height: "100%",
                        }}
                    >
                        <div
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: "12px",
                                background: "linear-gradient(135deg, #000049, #0a0a6e)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                            }}
                        >
                            <BookOpen size={24} color="#FEC704" />
                        </div>
                        <div style={{ flex: 1 }}>
                            <h3
                                style={{
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    color: "#000049",
                                    marginBottom: "0.25rem",
                                }}
                            >
                                Acta RII-ACTA DE REUNIÓN
                            </h3>
                            <p
                                style={{
                                    fontSize: "0.85rem",
                                    color: "#64648a",
                                }}
                            >
                                27 Marzo 2024
                            </p>
                        </div>
                    </div>
                </a>

                {/* ACTA 27 JUNIO 2024 */}
                <a
                    href="/documentos-legales/2ACTA_RED1-27 JUNIO DEL 2024.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                >
                    <div
                        className="hover-lift"
                        style={{
                            background: "#f8f8ff",
                            borderRadius: "16px",
                            padding: "1.5rem",
                            border: "1px solid #e8e8f4",
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                            height: "100%",
                        }}
                    >
                        <div
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: "12px",
                                background: "linear-gradient(135deg, #000049, #0a0a6e)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                            }}
                        >
                            <BookOpen size={24} color="#FEC704" />
                        </div>
                        <div style={{ flex: 1 }}>
                            <h3
                                style={{
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    color: "#000049",
                                    marginBottom: "0.25rem",
                                }}
                            >
                                Acta RED-ACTA DE REUNIÓN
                            </h3>
                            <p
                                style={{
                                    fontSize: "0.85rem",
                                    color: "#64648a",
                                }}
                            >
                                27 Junio 2024
                            </p>
                        </div>
                    </div>
                </a>

                {/* Acta Constitutiva */}
                <a
                    href="/documentos-legales/ACTA CONSTITUTIVA-RED RII.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                >
                    <div
                        className="hover-lift"
                        style={{
                            background: "#f8f8ff",
                            borderRadius: "16px",
                            padding: "1.5rem",
                            border: "1px solid #e8e8f4",
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                            height: "100%",
                        }}
                    >
                        <div
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: "12px",
                                background: "linear-gradient(135deg, #000049, #0a0a6e)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                            }}
                        >
                            <BookOpen size={24} color="#FEC704" />
                        </div>
                        <div style={{ flex: 1 }}>
                            <h3
                                style={{
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    color: "#000049",
                                    marginBottom: "0.25rem",
                                }}
                            >
                                Acta Constitutiva
                            </h3>
                            <p
                                style={{
                                    fontSize: "0.85rem",
                                    color: "#64648a",
                                }}
                            >
                                Documento fundacional de la Red RII
                            </p>
                        </div>
                    </div>
                </a>

                {/* Acuerdo de Cooperación */}
                <a
                    href="/documentos-legales/Acuerdo de Cooperacion RII_ ABUSO SEXUAL INFANTIL.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                >
                    <div
                        className="hover-lift"
                        style={{
                            background: "#f8f8ff",
                            borderRadius: "16px",
                            padding: "1.5rem",
                            border: "1px solid #e8e8f4",
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                            height: "100%",
                        }}
                    >
                        <div
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: "12px",
                                background: "linear-gradient(135deg, #000049, #0a0a6e)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                            }}
                        >
                            <BookOpen size={24} color="#FEC704" />
                        </div>
                        <div style={{ flex: 1 }}>
                            <h3
                                style={{
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    color: "#000049",
                                    marginBottom: "0.25rem",
                                }}
                            >
                                Acuerdo de Cooperación
                            </h3>
                            <p
                                style={{
                                    fontSize: "0.85rem",
                                    color: "#64648a",
                                }}
                            >
                                Abuso Sexual Infantil
                            </p>
                        </div>
                    </div>
                </a>

                {/* Informe Inicial CAISEB 2024 */}
                <a
                    href="/documentos-legales/DIR-INV-TECSU-043-M - INFORME INICIAL CAISEB 2024 CONSOLIDADO (2).pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                >
                    <div
                        className="hover-lift"
                        style={{
                            background: "#f8f8ff",
                            borderRadius: "16px",
                            padding: "1.5rem",
                            border: "1px solid #e8e8f4",
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                            height: "100%",
                        }}
                    >
                        <div
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: "12px",
                                background: "linear-gradient(135deg, #000049, #0a0a6e)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                            }}
                        >
                            <BookOpen size={24} color="#FEC704" />
                        </div>
                        <div style={{ flex: 1 }}>
                            <h3
                                style={{
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    color: "#000049",
                                    marginBottom: "0.25rem",
                                }}
                            >
                                Informe Inicial CAISEB 2024
                            </h3>
                            <p
                                style={{
                                    fontSize: "0.85rem",
                                    color: "#64648a",
                                }}
                            >
                                Consolidado del congreso
                            </p>
                        </div>
                    </div>
                </a>

                {/* Plan de Trabajo 2023-2025 */}
                <a
                    href="/documentos-legales/PLAN TRABAJO 2023-2025-RED RII-1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                >
                    <div
                        className="hover-lift"
                        style={{
                            background: "#f8f8ff",
                            borderRadius: "16px",
                            padding: "1.5rem",
                            border: "1px solid #e8e8f4",
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                            height: "100%",
                        }}
                    >
                        <div
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: "12px",
                                background: "linear-gradient(135deg, #000049, #0a0a6e)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                            }}
                        >
                            <BookOpen size={24} color="#FEC704" />
                        </div>
                        <div style={{ flex: 1 }}>
                            <h3
                                style={{
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    color: "#000049",
                                    marginBottom: "0.25rem",
                                }}
                            >
                                Plan de Trabajo
                            </h3>
                            <p
                                style={{
                                    fontSize: "0.85rem",
                                    color: "#64648a",
                                }}
                            >
                                2023-2025
                            </p>
                        </div>
                    </div>
                </a>

                {/* Plan de Trabajo 2025-2027 */}
                <a
                    href="/documentos-legales/RII- PLAN DE DE TRABAJO-2025-2027-2.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                >
                    <div
                        className="hover-lift"
                        style={{
                            background: "#f8f8ff",
                            borderRadius: "16px",
                            padding: "1.5rem",
                            border: "1px solid #e8e8f4",
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                            height: "100%",
                        }}
                    >
                        <div
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: "12px",
                                background: "linear-gradient(135deg, #000049, #0a0a6e)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                            }}
                        >
                            <BookOpen size={24} color="#FEC704" />
                        </div>
                        <div style={{ flex: 1 }}>
                            <h3
                                style={{
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    color: "#000049",
                                    marginBottom: "0.25rem",
                                }}
                            >
                                Plan de Trabajo
                            </h3>
                            <p
                                style={{
                                    fontSize: "0.85rem",
                                    color: "#64648a",
                                }}
                            >
                                2025-2027
                            </p>
                        </div>
                    </div>
                </a>

                {/* Reglamento de la Red */}
                <a
                    href="/documentos-legales/Reglamento de la Red.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                >
                    <div
                        className="hover-lift"
                        style={{
                            background: "#f8f8ff",
                            borderRadius: "16px",
                            padding: "1.5rem",
                            border: "1px solid #e8e8f4",
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                            height: "100%",
                        }}
                    >
                        <div
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: "12px",
                                background: "linear-gradient(135deg, #000049, #0a0a6e)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                            }}
                        >
                            <BookOpen size={24} color="#FEC704" />
                        </div>
                        <div style={{ flex: 1 }}>
                            <h3
                                style={{
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    color: "#000049",
                                    marginBottom: "0.25rem",
                                }}
                            >
                                Reglamento de la Red
                            </h3>
                            <p
                                style={{
                                    fontSize: "0.85rem",
                                    color: "#64648a",
                                }}
                            >
                                Normativa interna
                            </p>
                        </div>
                    </div>
                </a>

                {/* SENESCYT */}
                <a
                    href="/documentos-legales/SENESCYT-SDIC-DIC-2023-0233-O.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                >
                    <div
                        className="hover-lift"
                        style={{
                            background: "#f8f8ff",
                            borderRadius: "16px",
                            padding: "1.5rem",
                            border: "1px solid #e8e8f4",
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                            height: "100%",
                        }}
                    >
                        <div
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: "12px",
                                background: "linear-gradient(135deg, #000049, #0a0a6e)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                            }}
                        >
                            <BookOpen size={24} color="#FEC704" />
                        </div>
                        <div style={{ flex: 1 }}>
                            <h3
                                style={{
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    color: "#000049",
                                    marginBottom: "0.25rem",
                                }}
                            >
                                Reconocimiento SENESCYT
                            </h3>
                            <p
                                style={{
                                    fontSize: "0.85rem",
                                    color: "#64648a",
                                }}
                            >
                                SDIC-DIC-2023-0233-O
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>

        {/* Cartas de Adhesión */}
<div className="scroll-reveal">
    <h3
        style={{
            fontSize: "1.3rem",
            fontWeight: 600,
            color: "#000049",
            marginBottom: "1.5rem",
            paddingBottom: "0.5rem",
            borderBottom: "2px solid #FEC704",
        }}
    >
        Cartas de Adhesión Institucional
    </h3>
    <p
        style={{
            color: "#64648a",
            fontSize: "0.95rem",
            marginBottom: "1.5rem",
            fontStyle: "italic",
        }}
    >
        Documentos de adhesión de instituciones que forman parte de la Red Iberoamericana de Investigación
    </p>
    <div
        className="stagger-children"
        style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
        }}
    >
        {/* ALQUIMIA */}
        <a
            href="/documentos-legales/ACTA ADHESION ALQUIMIA-signed-signed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        Instituto Superior Tecnológico Alquimia
                    </h4>
                </div>
            </div>
        </a>

        {/* CARLOS CISNEROS */}
        <a
            href="/documentos-legales/ACTA ADHESION CARLOS CISNEROS-signed-signed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        Instituto Superior Tecnológico Carlos Cisneros
                    </h4>
                </div>
            </div>
        </a>

        {/* EL LIBERTADOR */}
        <a
            href="/documentos-legales/ACTA ADHESION EL LIBERTADOR-signed-signed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        Instituto Superior Tecnológico El Libertador
                    </h4>
                </div>
            </div>
        </a>

        {/* INSTITUTO QUITO */}
        <a
            href="/documentos-legales/ACTA ADHESION INSTITUTO QUITO-signed-signed-signed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        Instituto Superior Tecnológico Quito
                    </h4>
                </div>
            </div>
        </a>

        {/* INSTITUTO SUDAMERICANO */}
        <a
            href="/documentos-legales/ACTA ADHESION INSTITUTO SUDAMERICANO-signed-signed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        Instituto Superior Tecnológico Sudamericano
                    </h4>
                </div>
            </div>
        </a>

        {/* QUININDÉ */}
        <a
            href="/documentos-legales/ACTA ADHESION QUININDÉ-signed-signed-signed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        Instituto Superior Tecnológico Quinindé
                    </h4>
                </div>
            </div>
        </a>

        {/* UNIVERSITARIO BOLIVARIANO */}
        <a
            href="/documentos-legales/ACTA ADHESION UNIVERSITARIO BOLIVARIANO-signed-signed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        Instituto Superior Universitario Bolivariano
                    </h4>
                </div>
            </div>
        </a>

        {/* EDUPRAXIS */}
        <a
            href="/documentos-legales/ACTA DE ADHESIÓN EDUPRAXIS-signed-signed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        Edupraxis
                    </h4>
                </div>
            </div>
        </a>

        {/* INSTITUTO ORELLANA */}
        <a
            href="/documentos-legales/ACTA DE ADHESION INSTITUTO ORELLANA-signed-signed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        Instituto Superior Tecnológico Orellana
                    </h4>
                </div>
            </div>
        </a>

        {/* ITCA */}
        <a
            href="/documentos-legales/ACTA DE ADHESION ITCA-signed-signed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        Instituto Tecnológico Superior ITCA
                    </h4>
                </div>
            </div>
        </a>

        {/* PRODUCTIVIDAD */}
        <a
            href="/documentos-legales/Acta de adhesión-productividad-signed-signed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        Instituto Superior Tecnológico Productividad
                    </h4>
                </div>
            </div>
        </a>

        {/* YAVIRAC */}
        <a
            href="/documentos-legales/Acta de adhesión-YAVIRAC-signed-signed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        Instituto Superior Tecnológico Yavirac
                    </h4>
                </div>
            </div>
        </a>

        {/* ELOY ALFARO */}
        <a
            href="/documentos-legales/ACTA INSTITUTO ELOY ALFARO-signed-signed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        Instituto Superior Tecnológico Eloy Alfaro
                    </h4>
                </div>
            </div>
        </a>

        {/* BOLIVAR (Actualizado con nombre formal) */}
        <a
            href="/documentos-legales/Acta de Adhesion Bolivar.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        Instituto Superior Tecnológico Bolívar
                    </h4>
                </div>
            </div>
        </a>

        {/* Inst-Guayaquil (Actualizado con nombre formal) */}
        <a
            href="/documentos-legales/ACTA DE ADHESIÓN-inst-Guayaquil.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        Instituto Superior Tecnológico Guayaquil
                    </h4>
                </div>
            </div>
        </a>

        {/* ACTIONGROW (Actualizado con nombre formal) */}
        <a
            href="/documentos-legales/ACTA DE ADHESIÓN_ ACTIONGROW.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        ACTIONGROW
                    </h4>
                </div>
            </div>
        </a>

        {/* Carta Intención Bolívar (Actualizado) */}
        <a
            href="/documentos-legales/Carta de Intencion Bolivar.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        Carta de Intención - Bolívar
                    </h4>
                </div>
            </div>
        </a>

        {/* IST SUCRE (Actualizado) */}
        <a
            href="/documentos-legales/Carta de intención IST SUCRE 2023.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        Carta de Intención - IST Sucre 2023
                    </h4>
                </div>
            </div>
        </a>

        {/* CENESTUR (Actualizado) */}
        <a
            href="/documentos-legales/CENESTUR.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        CENESTUR
                    </h4>
                </div>
            </div>
        </a>

        {/* CEPU (Actualizado) */}
        <a
            href="/documentos-legales/CEPU.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        CEPU
                    </h4>
                </div>
            </div>
        </a>

        {/* CUESTTV (Actualizado) */}
        <a
            href="/documentos-legales/CUESTTV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        CUESTTV
                    </h4>
                </div>
            </div>
        </a>

        {/* Illingworth (Actualizado) */}
        <a
            href="/documentos-legales/ILLINGWORTH-SERVIENTREGA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        Instituto Superior Tecnológico Illingworth
                    </h4>
                </div>
            </div>
        </a>

        {/* ITI (Actualizado) */}
        <a
            href="/documentos-legales/ITI.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        Instituto Tecnológico ITI
                    </h4>
                </div>
            </div>
        </a>

        {/* ITSU (Actualizado) */}
        <a
            href="/documentos-legales/ITSU-SERVIENTREGA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        Instituto Superior Tecnológico ITSU
                    </h4>
                </div>
            </div>
        </a>

        {/* JAPON (Actualizado) */}
        <a
            href="/documentos-legales/JAPON.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        Instituto Superior Tecnológico Japón
                    </h4>
                </div>
            </div>
        </a>

        {/* LENDAN (Actualizado) */}
        <a
            href="/documentos-legales/LENDAN.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        LENDAN
                    </h4>
                </div>
            </div>
        </a>

        {/* Misael Acosta (Actualizado) */}
        <a
            href="/documentos-legales/MISAEL ACOSTA-SERVIENTREGA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        Instituto Superior Tecnológico Misael Acosta
                    </h4>
                </div>
            </div>
        </a>

        {/* Nelson Torres (Actualizado) */}
        <a
            href="/documentos-legales/NELSON TORRES-SERVIENTREGA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        Instituto Superior Tecnológico Nelson Torres
                    </h4>
                </div>
            </div>
        </a>

        {/* PICHINCHA (Actualizado) */}
        <a
            href="/documentos-legales/PICHINCHA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        Instituto Superior Tecnológico Pichincha
                    </h4>
                </div>
            </div>
        </a>

        {/* Rey David (Actualizado) */}
        <a
            href="/documentos-legales/REY DAVID-SERVIENTREGA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        Instituto Superior Tecnológico Rey David
                    </h4>
                </div>
            </div>
        </a>

        {/* SUDAMERICANO (Actualizado) */}
        <a
            href="/documentos-legales/SUDAMERICANO.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        Instituto Superior Tecnológico Sudamericano
                    </h4>
                </div>
            </div>
        </a>

        {/* TECLEMAS (Actualizado) */}
        <a
            href="/documentos-legales/TECLEMAS-SERVIENTREGA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        Instituto Superior Tecnológico TECLEMAS
                    </h4>
                </div>
            </div>
        </a>

        {/* TRAVERSARI (Actualizado) */}
        <a
            href="/documentos-legales/TRAVERSARI.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        Instituto Superior Tecnológico Traversari
                    </h4>
                </div>
            </div>
        </a>

        {/* Universitario Oriente (Actualizado) */}
        <a
            href="/documentos-legales/UNIVERSITARIO ORIENTE.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        Instituto Superior Universitario Oriente
                    </h4>
                </div>
            </div>
        </a>

        {/* WISSEN (Actualizado) */}
        <a
            href="/documentos-legales/WISSEN-SERVIENTREGA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <div
                className="hover-lift"
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "1rem",
                    border: "1px solid #e8e8f4",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #000049, #0a0a6e)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <BookOpen size={20} color="#FEC704" />
                </div>
                <div style={{ flex: 1 }}>
                    <h4
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#000049",
                        }}
                    >
                        Instituto Superior Tecnológico Wissen
                    </h4>
                </div>
            </div>
        </a>
    </div>
</div>
        </div>
    );
}
