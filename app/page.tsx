"use client";

import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Users,
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
              <span>CAISEB 2026 — Proximamente</span>
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
                  transition: "transform 0.2s, box-shadow 0.2s",
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
                  transition: "transform 0.2s, background 0.2s",
                }}
              >
                CAISEB 2026
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
                  cursor: "default",
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
      </section >


      < section
        style={{
          background: "linear-gradient(135deg, #000049, #0a0a6e)",
          padding: "3rem 1.5rem",
          overflow: "hidden",
        }
        }
      >
        <div className="container-custom scroll-reveal" style={{ textAlign: "center" }}>
          <h2
            style={{
              color: "#fff",
              fontSize: "1.3rem",
              fontWeight: 600,
              marginBottom: "1.5rem",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Áreas de Investigación
          </h2>
          <div
            className="stagger-children"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              justifyContent: "center",
            }}
          >
            {researchAreas.map((area, i) => (
              <span
                key={i}
                style={{
                  padding: "0.5rem 1.25rem",
                  background: "rgba(255,255,255,0.08)",
                  borderRadius: "999px",
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "0.875rem",
                  border: "1px solid rgba(255,255,255,0.12)",
                  letterSpacing: "0.3px",
                }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section >


      < section className="section-padding" style={{ background: "#f8f8ff" }}>
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
              className="hover-lift scroll-reveal"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                background: "#fff",
                boxShadow: "0 4px 20px rgba(0,0,73,0.06)",
              }}
            >
              <div style={{ position: "relative", height: "200px" }}>
                <Image
                  src="/images/mission-teamwork.jpg"
                  alt="Equipo de investigación"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom, rgba(0,0,73,0.3) 0%, rgba(0,0,73,0.7) 100%)",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "1.5rem",
                  }}
                >
                  <h3 style={{ color: "#fff", fontSize: "1.4rem", fontWeight: 700 }}>
                    Nuestra Misión
                  </h3>
                </div>
              </div>
              <div style={{ padding: "1.5rem" }}>
                <p style={{ color: "#444", fontSize: "0.95rem", lineHeight: 1.7 }}>
                  Hacer de la investigación un proceso vital que parta de los
                  intereses y motivaciones de diversas áreas del conocimiento,
                  realizado de manera colegiada y sistemática.
                </p>
              </div>
            </div>


            <div
              className="hover-lift scroll-reveal"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                background: "#fff",
                boxShadow: "0 4px 20px rgba(0,0,73,0.06)",
              }}
            >
              <div style={{ position: "relative", height: "200px" }}>
                <Image
                  src="/images/vision-future.jpg"
                  alt="Visión educativa"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom, rgba(0,0,73,0.3) 0%, rgba(0,0,73,0.7) 100%)",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "1.5rem",
                  }}
                >
                  <h3 style={{ color: "#fff", fontSize: "1.4rem", fontWeight: 700 }}>
                    Nuestra Visión
                  </h3>
                </div>
              </div>
              <div style={{ padding: "1.5rem" }}>
                <p style={{ color: "#444", fontSize: "0.95rem", lineHeight: 1.7 }}>
                  Posicionarnos como eje central de las investigaciones que apoyen
                  la solución de problemáticas educativas, fortaleciendo la
                  formación integral universitaria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section >


      < section className="section-padding" style={{ background: "#fff" }}>
        <div className="container-custom">
          <div
            className="hover-lift scroll-reveal"
            style={{
              background: "linear-gradient(135deg, #582080 0%, #3a1060 100%)",
              borderRadius: "20px",
              padding: "3rem 2.5rem",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "2rem",
              alignItems: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
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
                Próximo Evento
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
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                10 y 11 de Marzo — Congreso Académico Internacional
              </p>
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
                  transition: "transform 0.2s",
                }}
              >
                Ver detalles
                <ArrowRight size={18} />
              </Link>
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "200px",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/caiseb-banner.jpg"
                alt="Colaboración académica"
                width={400}
                height={300}
                style={{
                  objectFit: "cover",
                  borderRadius: "16px",
                  opacity: 0.65,
                  width: "100%",
                  height: "100%",
                  maxWidth: "350px",
                }}
              />
            </div>
          </div>
        </div>
      </section >


      < section
        className="section-padding"
        style={{ background: "#f8f8ff" }}
      >
        <div className="container-custom">
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
                boxShadow: "0 10px 25px rgba(0, 0, 73, 0.2)",
              }}
            >
              <Globe2 size={32} color="#fff" />
            </div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                fontWeight: 700,
                color: "#000049",
                marginBottom: "1rem",
              }}
            >
              Conoce nuestra presencia en Iberoamérica
            </h2>
            <p
              style={{
                color: "#64648a",
                fontSize: "1.1rem",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Descubre las instituciones, investigadores y proyectos que forman parte de la Red Iberoamericana de Investigación a lo largo de toda la región.
            </p>
          </div>

          <div className="scroll-reveal" style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link
              href="/la-red"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#000049",
                fontWeight: 600,
                textDecoration: "none",
                fontSize: "0.95rem",
                padding: "0.6rem 1.25rem",
                borderRadius: "10px",
                border: "2px solid #000049",
                transition: "all 0.2s",
              }}
            >
              Conocer más sobre la Red
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section >
    </div >
  );
}
