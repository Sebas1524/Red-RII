"use client";

import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Calendar,
  ArrowRight,
  GraduationCap,
  Lightbulb,
  Globe2,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const highlights = [
  {
    icon: GraduationCap,
    title: "Investigación Colegiada",
    description:
      "Proceso vital que parte de los intereses y motivaciones de diversas áreas del conocimiento.",
    image: "/images/highlight-research.jpg",
  },
  {
    icon: Lightbulb,
    title: "Innovación Educativa",
    description:
      "Fortalecimiento de currículos y formación integral universitaria en múltiples disciplinas.",
    image: "/images/highlight-innovation.jpg",
  },
  {
    icon: Globe2,
    title: "Red Iberoamericana",
    description:
      "Colaboración internacional entre miembros y colaboradores de toda Iberoamérica.",
    image: "/images/highlight-global.jpg",
  },
];

const researchAreas = [
  "Educación",
  "Mecánica Automotriz",
  "Administración y Marketing",
  "Desarrollo de Software",
  "Salud y Bienestar",
  "Gastronomía",
  "Estética Integral",
  "Turismo",
  "Electricidad",
];

export default function HomePage() {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef}>

      {/* ═══════════════════════════════════════════ */}
      {/* HERO */}
      {/* ═══════════════════════════════════════════ */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #000049 0%, #0a0a6e 40%, #000030 100%)",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="animate-float"
          style={{
            position: "absolute",
            top: "-50%",
            right: "-20%",
            width: "800px",
            height: "800px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="animate-pulse-glow"
          style={{
            position: "absolute",
            bottom: "-30%",
            left: "-10%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(254,199,4,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
            opacity: 0.3,
          }}
        >
          <Image
            src="/hero-map.png"
            alt="Background Map"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </div>

        <div
          className="container-custom"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
            padding: "4rem 1.5rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div className="animate-fade-in-up">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(255,255,255,0.08)",
                padding: "0.5rem 1rem",
                borderRadius: "999px",
                fontSize: "0.85rem",
                marginBottom: "1.5rem",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <Calendar size={14} />
              <span>22-23 Octubre · Cartagena de Indias</span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                maxWidth: "700px",
              }}
            >
              Red Iberoamericana
              <br />
              <span style={{ color: "rgba(255,255,255,0.6)" }}>
                de Investigación
              </span>
            </h1>

            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: 1.7,
                opacity: 0.75,
                maxWidth: "560px",
                marginBottom: "2rem",
              }}
            >
              Fortalecemos la investigación colegiada, organizada y sistemática,
              impulsando la innovación educativa y el desarrollo integral
              universitario en Iberoamérica.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link
                href="/la-red"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "#fff",
                  color: "#000049",
                  padding: "0.85rem 1.75rem",
                  borderRadius: "12px",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontSize: "0.95rem",
                }}
              >
                Conocer la Red
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/caiseb"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "transparent",
                  color: "#FEC704",
                  padding: "0.85rem 1.75rem",
                  borderRadius: "12px",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  border: "2px solid #FEC704",
                }}
              >
                IV Congreso CAISEB 2026
                <Calendar size={18} />
              </Link>
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            overflow: "hidden",
            lineHeight: 0,
          }}
        >
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "auto" }}
          >
            <path
              d="M0 60L48 65C96 70 192 80 288 82C384 84 480 78 576 68C672 58 768 44 864 42C960 40 1056 50 1152 58C1248 66 1344 72 1392 75L1440 78V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* HIGHLIGHTS - ¿Qué hacemos? */}
      {/* ═══════════════════════════════════════════ */}
      <section className="section-padding" style={{ background: "#fff" }}>
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
              ¿Qué hacemos?
            </h2>
            <p
              style={{
                color: "#64648a",
                fontSize: "1.05rem",
                maxWidth: "500px",
                margin: "0 auto",
              }}
            >
              Impulsamos la investigación multidisciplinaria como motor de
              transformación social y educativa.
            </p>
          </div>

          <div
            className="stagger-children"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {highlights.map((item, i) => (
              <div
                key={i}
                className="hover-lift"
                style={{
                  background: "#f8f8ff",
                  borderRadius: "16px",
                  border: "1px solid #e8e8f4",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "160px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to bottom, transparent 40%, rgba(248,248,255,0.9) 100%)",
                    }}
                  />
                </div>
                <div style={{ padding: "1.5rem 2rem 2rem" }}>
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "14px",
                      background: "linear-gradient(135deg, #000049, #0a0a6e)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <item.icon size={26} color="#fff" />
                  </div>
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 600,
                      color: "#000049",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: "#64648a",
                      fontSize: "0.925rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* ÁREAS DE INVESTIGACIÓN */}
      {/* ═══════════════════════════════════════════ */}
      <section style={{ position: "relative", overflow: "hidden" }}>
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
            src="/images/fondoV2.png"
            alt="Fondo Áreas de Investigación"
            fill
            style={{ objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,49,0.6)",
              zIndex: 1,
            }}
          />
        </div>
        <div
          className="container-custom scroll-reveal"
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
              marginBottom: "2rem",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Áreas de Investigación
          </h2>
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
              gap: "0.75rem",
              justifyContent: "center",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {researchAreas.map((area, i) => (
              <span
                key={i}
                style={{
                  padding: "0.6rem 1.5rem",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "999px",
                  color: "#fff",
                  fontSize: "0.95rem",
                  border: "1px solid rgba(254,199,4,0.3)",
                  backdropFilter: "blur(5px)",
                  cursor: "default",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#FEC704";
                  e.currentTarget.style.color = "#000049";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "#fff";
                }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* VISIÓN */}
      {/* ═══════════════════════════════════════════ */}
      <section className="section-padding" style={{ background: "#f8f8ff" }}>
        <div className="container-custom">
          <div
            className="scroll-reveal"
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "4px",
                background: "linear-gradient(90deg, #FEC704, #000049)",
                margin: "0 auto 2rem auto",
                borderRadius: "2px",
              }}
            />
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 700,
                color: "#000049",
                marginBottom: "1.5rem",
                lineHeight: 1.2,
              }}
            >
              ¿Hacia dónde proyectamos
              <br />
              <span style={{ color: "#FEC704" }}>la ciencia y la tecnología?</span>
            </h2>
            <p
              style={{
                color: "#2c2c4a",
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
                opacity: 0.85,
              }}
            >
              Para años próximos, la Red RII será reconocida como el ecosistema de
              investigación tecnológica más influyente de Iberoamérica, liderando la
              creación de conocimiento aplicado y formando alianzas estratégicas que
              impulsen el desarrollo científico, ético y social de nuestras instituciones
              aliadas.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  height: "2px",
                  width: "40px",
                  background: "linear-gradient(90deg, transparent, #FEC704)",
                }}
              />
              <span
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  color: "#000049",
                  opacity: 0.7,
                }}
              >
                EXPLORA NUESTRA IDENTIDAD
              </span>
              <div
                style={{
                  height: "2px",
                  width: "40px",
                  background: "linear-gradient(90deg, #FEC704, transparent)",
                }}
              />
            </div>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#64648a",
                marginBottom: "2rem",
                fontStyle: "italic",
              }}
            >
              Descubre lo que nos mueve
            </p>
            <Link
              href="/la-red"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                background: "transparent",
                color: "#000049",
                padding: "1rem 2.5rem",
                borderRadius: "50px",
                fontWeight: 600,
                textDecoration: "none",
                fontSize: "1rem",
                border: "2px solid #000049",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#000049";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#000049";
              }}
            >
              Conocer nuestra identidad
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
{/* CAISEB BANNER */}
{/* ═══════════════════════════════════════════ */}
<section className="section-padding" style={{ background: "#fff" }}>
  <div className="container-custom">
    <div
      className="hover-lift scroll-reveal"
      style={{
        background: "linear-gradient(135deg, #582080 0%, #3a1060 100%)",
        borderRadius: "20px",
        padding: "3rem 2.5rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Efecto de brillo decorativo */}
      <div
        className="animate-pulse-glow"
        style={{
          position: "absolute",
          top: "-50%",
          right: "-10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(254,199,4,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Contenido textual */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "inline-block",
            background: "#FEC704",
            color: "#582080",
            padding: "0.35rem 1rem",
            borderRadius: "999px",
            fontSize: "0.8rem",
            fontWeight: 700,
            marginBottom: "1rem",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          IV Congreso Internacional
        </div>
        <h3
          style={{
            color: "#fff",
            fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
            fontWeight: 700,
            marginBottom: "0.5rem",
          }}
        >
          CAISEB 2026
        </h3>
        <p
          style={{
            color: "#FEC704",
            fontSize: "1rem",
            fontWeight: 600,
            marginBottom: "0.75rem",
            letterSpacing: "0.5px",
          }}
        >
          Congreso Académico Internacional de Salud, Educación y Bienestar
        </p>
        <p
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "0.95rem",
            lineHeight: 1.6,
            marginBottom: "1rem",
            maxWidth: "500px",
          }}
        >
          Foro internacional que reúne a investigadores, docentes y profesionales
          para intercambiar conocimientos orientados a mejorar la calidad de vida
          de las personas.
        </p>
        <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <span style={{ fontSize: "0.85rem" }}>📍</span>
            <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.85rem" }}>Quito · Ecuador</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <span style={{ fontSize: "0.85rem" }}>📍</span>
            <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.85rem" }}>Cartagena de Indias · Colombia</span>
          </div>
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(255,255,255,0.1)",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "0.9rem",
              fontWeight: 500,
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <Calendar size={16} color="#FEC704" />
            22 y 23 de octubre · Universidad de Cartagena
          </span>
        </div>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <Link
            href="/caiseb"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "#FEC704",
              color: "#582080",
              padding: "0.8rem 1.5rem",
              borderRadius: "12px",
              fontWeight: 600,
              textDecoration: "none",
              fontSize: "0.95rem",
            }}
          >
            Ver detalles
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/caiseb#convocatoria"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "transparent",
              color: "#fff",
              padding: "0.8rem 1.5rem",
              borderRadius: "12px",
              fontWeight: 600,
              textDecoration: "none",
              fontSize: "0.95rem",
              border: "2px solid rgba(255,255,255,0.5)",
            }}
          >
            Enviar ponencia
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Imagen - SIN CONTORNO, MÁS GRANDE */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
          minHeight: "350px",
        }}
      >
        <Image
          src="/images/caiseb_banner.jpg"
          alt="IV Congreso CAISEB 2026 - Cartagena de Indias"
          fill
          style={{
            objectFit: "cover",
            borderRadius: "12px",
          }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  </div>
</section>

      {/* ═══════════════════════════════════════════ */}
      {/* PRESENCIA EN IBEROAMÉRICA */}
      {/* ═══════════════════════════════════════════ */}
      <section className="section-padding" style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/images/fondoV1.png"
            alt="Fondo"
            fill
            style={{ objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,49,0.5)",
              zIndex: 1,
            }}
          />
        </div>
        <div className="container-custom" style={{ position: "relative", zIndex: 2, padding: "5rem 1.5rem" }}>
          <div className="scroll-reveal" style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 64,
                height: 64,
                borderRadius: "16px",
                background: "linear-gradient(135deg, #000049, #0a0a6e)",
                marginBottom: "1.5rem",
              }}
            >
              <Globe2 size={32} color="#fff" />
            </div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "1rem",
              }}
            >
              Conoce nuestra presencia en Iberoamérica
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "1.1rem",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Descubre las instituciones, investigadores y proyectos que forman parte
              de la Red Iberoamericana de Investigación a lo largo de toda la región.
            </p>
          </div>
          <div className="scroll-reveal" style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link
              href="/la-red"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#fff",
                fontWeight: 600,
                textDecoration: "none",
                padding: "0.6rem 1.25rem",
                borderRadius: "10px",
                border: "2px solid #fff",
                backgroundColor: "rgba(0,0,49,0.2)",
                backdropFilter: "blur(5px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#FEC704";
                e.currentTarget.style.color = "#000049";
                e.currentTarget.style.borderColor = "#FEC704";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0,0,49,0.2)";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderColor = "#fff";
              }}
            >
              Conocer más sobre la Red
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* ACTUALIDAD Y CONEXIÓN */}
      {/* ═══════════════════════════════════════════ */}
      <section className="section-padding" style={{ background: "#fff", padding: "4rem 0" }}>
        <div className="container-custom">
          <div className="scroll-reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(254,199,4,0.1)",
                padding: "0.5rem 1.25rem",
                borderRadius: "999px",
                fontSize: "0.85rem",
                marginBottom: "1.5rem",
                border: "1px solid rgba(254,199,4,0.2)",
                color: "#000049",
                fontWeight: 600,
                letterSpacing: "1px",
              }}
            >
              <Calendar size={14} color="#FEC704" />
              <span>ACTUALIDAD Y CONEXIÓN RII</span>
            </div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                fontWeight: 700,
                color: "#000049",
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}
            >
              El latido de la innovación
              <br />
              <span style={{ color: "#FEC704" }}>en un solo lugar</span>
            </h2>
            <p
              style={{
                color: "#64648a",
                fontSize: "1.1rem",
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Mantente conectado con el avance científico de la Red. Desde los hitos
              alcanzados en nuestras últimas investigaciones hasta la agenda de los
              próximos encuentros.
            </p>
            <div style={{ marginTop: "1.5rem", color: "#000049", fontWeight: 500 }}>
              ¿Qué deseas explorar hoy?
            </div>
          </div>

          <div
            className="stagger-children"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "0",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,73,0.12)",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {/* NOTICIAS */}
            <div
              className="hover-lift"
              style={{
                background: "#f8f8ff",
                padding: "3rem 2.5rem",
                position: "relative",
                borderRight: "1px solid rgba(0,0,73,0.05)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: "linear-gradient(90deg, #FEC704, #000049)",
                  opacity: 0.5,
                }}
              />
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #FEC704, #fdd835)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  boxShadow: "0 10px 20px rgba(254,199,4,0.3)",
                }}
              >
                <BookOpen size={32} color="#000049" />
              </div>
              <h3
                style={{
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "#000049",
                  marginBottom: "1rem",
                  lineHeight: 1.2,
                }}
              >
                LO QUE ESTÁ
                <br />
                <span style={{ color: "#FEC704" }}>PASANDO</span>
              </h3>
              <p
                style={{
                  color: "#000049",
                  fontSize: "1rem",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                  letterSpacing: "1px",
                }}
              >
                Noticias y Boletines
              </p>
              <p
                style={{
                  color: "#64648a",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  marginBottom: "2rem",
                }}
              >
                Descubre los logros, publicaciones y convenios más recientes de
                nuestra comunidad académica.
              </p>
              <Link
                href="/noticias"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  background: "#000049",
                  color: "#fff",
                  padding: "0.9rem 2rem",
                  borderRadius: "12px",
                  fontWeight: 600,
                  textDecoration: "none",
                  border: "2px solid #000049",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#FEC704";
                  e.currentTarget.style.color = "#000049";
                  e.currentTarget.style.borderColor = "#FEC704";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#000049";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.borderColor = "#000049";
                }}
              >
                VER NOTICIAS
                <ArrowRight size={18} />
              </Link>
              <div
                style={{
                  position: "absolute",
                  bottom: "2rem",
                  right: "2rem",
                  opacity: 0.1,
                  fontSize: "8rem",
                  fontWeight: 800,
                  color: "#000049",
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                01
              </div>
            </div>

            {/* EVENTOS */}
            <div
              className="hover-lift"
              style={{
                background: "linear-gradient(135deg, #000049, #0a0a6e)",
                padding: "3rem 2.5rem",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: "linear-gradient(90deg, #FEC704, #fff)",
                  opacity: 0.3,
                }}
              />
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "16px",
                  background: "#FEC704",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <Calendar size={32} color="#000049" />
              </div>
              <h3
                style={{
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "1rem",
                  lineHeight: 1.2,
                }}
              >
                LO QUE
                <br />
                <span style={{ color: "#FEC704" }}>VIENE</span>
              </h3>
              <p
                style={{
                  color: "#FEC704",
                  fontSize: "1rem",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                  letterSpacing: "1px",
                }}
              >
                Eventos y Próximos Encuentros
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  marginBottom: "0.75rem",
                }}
              >
                Asegura tu lugar en los webinars, talleres y la ruta oficial hacia
                el nuevo CAISEB.
              </p>

              {/* Info CAISEB */}
              <div
                style={{
                  background: "rgba(254,199,4,0.1)",
                  borderRadius: "8px",
                  padding: "0.75rem",
                  marginBottom: "1.25rem",
                  border: "1px solid rgba(254,199,4,0.2)",
                }}
              >
                <p
                  style={{
                    color: "#FEC704",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    marginBottom: "0.25rem",
                  }}
                >
                  🗓 IV CAISEB 2026
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "0.8rem",
                    margin: 0,
                  }}
                >
                  22-23 Oct · Cartagena de Indias
                </p>
              </div>

              <Link
                href="/eventos"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  background: "transparent",
                  color: "#FEC704",
                  padding: "0.9rem 2rem",
                  borderRadius: "12px",
                  fontWeight: 600,
                  textDecoration: "none",
                  border: "2px solid #FEC704",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#FEC704";
                  e.currentTarget.style.color = "#000049";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#FEC704";
                }}
              >
                VER EVENTOS
                <ArrowRight size={18} />
              </Link>
              <div
                style={{
                  position: "absolute",
                  bottom: "2rem",
                  right: "2rem",
                  opacity: 0.1,
                  fontSize: "8rem",
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                02
              </div>
            </div>
          </div>

          <div className="scroll-reveal" style={{ textAlign: "center", marginTop: "3rem" }}>
            <p style={{ color: "#64648a", fontSize: "0.95rem" }}>
              ¿Eres miembro?{" "}
              <Link
                href="/contacto"
                style={{
                  color: "#000049",
                  fontWeight: 600,
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                  textDecorationColor: "#FEC704",
                }}
              >
                Contribuye con noticias o propón un evento
              </Link>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
