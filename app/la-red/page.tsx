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
                    background: "linear-gradient(135deg, #000049, #0a0a6e)",
                    padding: "3.5rem 1.5rem",
                }}
            >
                <div className="container-custom scroll-reveal" style={{ textAlign: "center" }}>
                    <h2
                        style={{
                            color: "#fff",
                            fontSize: "1.3rem",
                            fontWeight: 600,
                            marginBottom: "0.5rem",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                        }}
                    >
                        Áreas Temáticas Transversales
                    </h2>
                    <p
                        style={{
                            color: "rgba(255,255,255,0.6)",
                            marginBottom: "2rem",
                            fontSize: "0.95rem",
                        }}
                    >
                        Temas que cruzan todas las líneas de investigación
                    </p>
                    <div
                        className="stagger-children"
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "1rem",
                            justifyContent: "center",
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
                                    background: "rgba(255,255,255,0.08)",
                                    padding: "1rem 1.5rem",
                                    borderRadius: "14px",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    color: "#fff",
                                }}
                            >
                                <area.icon size={22} style={{ opacity: 0.8 }} />
                                <span style={{ fontSize: "0.95rem", fontWeight: 500 }}>
                                    {area.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
