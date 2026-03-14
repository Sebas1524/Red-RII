"use client";

import Link from "next/link";
import Image from "next/image";
import {
  BookOpen, Calendar, ArrowRight,
  GraduationCap, Lightbulb, Globe2,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslations } from "next-intl";

const highlightIcons = [GraduationCap, Lightbulb, Globe2];
const highlightImages = [
  "/images/highlight-research.jpg",
  "/images/highlight-innovation.jpg",
  "/images/highlight-global.jpg",
];

export default function HomePage() {
  const containerRef = useScrollReveal();
  const t = useTranslations();

  const highlights = t.raw("highlights.items") as Array<{ title: string; description: string }>;
  const researchAreas = t.raw("research.areas") as string[];

  return (
    <div ref={containerRef}>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #000049 0%, #0a0a6e 40%, #000030 100%)", color: "#fff", position: "relative", overflow: "hidden", minHeight: "85vh", display: "flex", alignItems: "center" }}>
        <div className="animate-float" style={{ position: "absolute", top: "-50%", right: "-20%", width: "800px", height: "800px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="animate-pulse-glow" style={{ position: "absolute", bottom: "-30%", left: "-10%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(254,199,4,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, opacity: 0.3 }}>
          <Image src="/hero-map.png" alt="Background Map" fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        </div>
        <div className="container-custom" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "center", padding: "4rem 1.5rem", position: "relative", zIndex: 1 }}>
          <div className="animate-fade-in-up">
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.08)", padding: "0.5rem 1rem", borderRadius: "999px", fontSize: "0.85rem", marginBottom: "1.5rem", border: "1px solid rgba(255,255,255,0.1)" }}>
              <Calendar size={14} />
              <span>{t("hero.badge")}</span>
            </div>
            <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "1.5rem", maxWidth: "700px" }}>
              {t("hero.title")}<br />
              <span style={{ color: "rgba(255,255,255,0.6)" }}>{t("hero.subtitle")}</span>
            </h1>
            <p style={{ fontSize: "1.15rem", lineHeight: 1.7, opacity: 0.75, maxWidth: "560px", marginBottom: "2rem" }}>{t("hero.description")}</p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/la-red" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fff", color: "#000049", padding: "0.85rem 1.75rem", borderRadius: "12px", fontWeight: 600, textDecoration: "none", fontSize: "0.95rem" }}>
                {t("hero.btnNetwork")} <ArrowRight size={18} />
              </Link>
              <Link href="/caiseb" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "transparent", color: "#FEC704", padding: "0.85rem 1.75rem", borderRadius: "12px", fontWeight: 600, textDecoration: "none", fontSize: "0.95rem", border: "2px solid #FEC704" }}>
                {t("hero.btnCaiseb")} <Calendar size={18} />
              </Link>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, overflow: "hidden", lineHeight: 0 }}>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
            <path d="M0 60L48 65C96 70 192 80 288 82C384 84 480 78 576 68C672 58 768 44 864 42C960 40 1056 50 1152 58C1248 66 1344 72 1392 75L1440 78V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="section-padding" style={{ background: "#fff" }}>
        <div className="container-custom">
          <div className="scroll-reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, color: "#000049", marginBottom: "0.75rem" }}>{t("highlights.title")}</h2>
            <p style={{ color: "#64648a", fontSize: "1.05rem", maxWidth: "500px", margin: "0 auto" }}>{t("highlights.subtitle")}</p>
          </div>
          <div className="stagger-children" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {highlights.map((item, i) => {
              const Icon = highlightIcons[i];
              return (
                <div key={i} className="hover-lift" style={{ background: "#f8f8ff", borderRadius: "16px", border: "1px solid #e8e8f4", overflow: "hidden" }}>
                  <div style={{ position: "relative", width: "100%", height: "160px", overflow: "hidden" }}>
                    <Image src={highlightImages[i]} alt={item.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 400px" />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(248,248,255,0.9) 100%)" }} />
                  </div>
                  <div style={{ padding: "1.5rem 2rem 2rem" }}>
                    <div style={{ width: 56, height: 56, borderRadius: "14px", background: "linear-gradient(135deg, #000049, #0a0a6e)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                      <Icon size={26} color="#fff" />
                    </div>
                    <h3 style={{ fontSize: "1.15rem", fontWeight: 600, color: "#000049", marginBottom: "0.5rem" }}>{item.title}</h3>
                    <p style={{ color: "#64648a", fontSize: "0.925rem", lineHeight: 1.6 }}>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESEARCH AREAS */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image src="/images/fondoV2.png" alt="Fondo" fill style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,49,0.6)", zIndex: 1 }} />
        </div>
        <div className="container-custom scroll-reveal" style={{ position: "relative", zIndex: 2, padding: "4rem 1.5rem", textAlign: "center" }}>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, marginBottom: "2rem", letterSpacing: "2px", textTransform: "uppercase" }}>{t("research.title")}</h2>
          <div style={{ width: "80px", height: "3px", background: "#FEC704", margin: "0 auto 2.5rem auto", borderRadius: "2px" }} />
          <div className="stagger-children" style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center", maxWidth: "1000px", margin: "0 auto" }}>
            {researchAreas.map((area, i) => (
              <span key={i} style={{ padding: "0.6rem 1.5rem", background: "rgba(255,255,255,0.1)", borderRadius: "999px", color: "#fff", fontSize: "0.95rem", border: "1px solid rgba(254,199,4,0.3)", backdropFilter: "blur(5px)", cursor: "default" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#FEC704"; e.currentTarget.style.color = "#000049"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#fff"; }}>
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="section-padding" style={{ background: "#f8f8ff" }}>
        <div className="container-custom">
          <div className="scroll-reveal" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <div style={{ width: "80px", height: "4px", background: "linear-gradient(90deg, #FEC704, #000049)", margin: "0 auto 2rem auto", borderRadius: "2px" }} />
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "#000049", marginBottom: "1.5rem", lineHeight: 1.2 }}>
              {t("vision.title1")}<br /><span style={{ color: "#FEC704" }}>{t("vision.title2")}</span>
            </h2>
            <p style={{ color: "#2c2c4a", fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.8, marginBottom: "2.5rem", opacity: 0.85 }}>{t("vision.description")}</p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{ height: "2px", width: "40px", background: "linear-gradient(90deg, transparent, #FEC704)" }} />
              <span style={{ fontSize: "0.9rem", fontWeight: 600, letterSpacing: "4px", textTransform: "uppercase", color: "#000049", opacity: 0.7 }}>{t("vision.exploreLabel")}</span>
              <div style={{ height: "2px", width: "40px", background: "linear-gradient(90deg, #FEC704, transparent)" }} />
            </div>
            <p style={{ fontSize: "1.1rem", color: "#64648a", marginBottom: "2rem", fontStyle: "italic" }}>{t("vision.exploreSubtitle")}</p>
            <Link href="/la-red" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "transparent", color: "#000049", padding: "1rem 2.5rem", borderRadius: "50px", fontWeight: 600, textDecoration: "none", fontSize: "1rem", border: "2px solid #000049" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#000049"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#000049"; }}>
              {t("vision.btn")} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CAISEB BANNER */}
      <section className="section-padding" style={{ background: "#fff" }}>
        <div className="container-custom">
          <div className="hover-lift scroll-reveal" style={{ background: "linear-gradient(135deg, #582080 0%, #3a1060 100%)", borderRadius: "20px", padding: "3rem 2.5rem", display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ display: "inline-block", background: "#FEC704", color: "#582080", padding: "0.35rem 1rem", borderRadius: "999px", fontSize: "0.8rem", fontWeight: 700, marginBottom: "1rem", letterSpacing: "1px", textTransform: "uppercase" }}>{t("caiseb.badge")}</div>
              <h3 style={{ color: "#fff", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>{t("caiseb.title")}</h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem", marginBottom: "1.5rem" }}>{t("caiseb.description")}</p>
              <Link href="/caiseb" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#FEC704", color: "#582080", padding: "0.8rem 1.5rem", borderRadius: "12px", fontWeight: 600, textDecoration: "none" }}>
                {t("caiseb.btn")} <ArrowRight size={18} />
              </Link>
            </div>
            <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: "200px", borderRadius: "16px", overflow: "hidden" }}>
              <Image src="/images/caiseb-banner.jpg" alt="CAISEB" width={400} height={300} style={{ objectFit: "cover", borderRadius: "16px", opacity: 0.65, width: "100%", height: "100%", maxWidth: "350px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* PRESENCE */}
      <section className="section-padding" style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src="/images/fondoV1.png" alt="Fondo" fill style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,49,0.5)", zIndex: 1 }} />
        </div>
        <div className="container-custom" style={{ position: "relative", zIndex: 2, padding: "5rem 1.5rem" }}>
          <div className="scroll-reveal" style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 64, height: 64, borderRadius: "16px", background: "linear-gradient(135deg, #000049, #0a0a6e)", marginBottom: "1.5rem" }}>
              <Globe2 size={32} color="#fff" />
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "#fff", marginBottom: "1rem" }}>{t("presence.title")}</h2>
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>{t("presence.description")}</p>
          </div>
          <div className="scroll-reveal" style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/la-red" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#fff", fontWeight: 600, textDecoration: "none", padding: "0.6rem 1.25rem", borderRadius: "10px", border: "2px solid #fff", backgroundColor: "rgba(0,0,49,0.2)", backdropFilter: "blur(5px)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#FEC704"; e.currentTarget.style.color = "#000049"; e.currentTarget.style.borderColor = "#FEC704"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(0,0,49,0.2)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#fff"; }}>
              {t("presence.btn")} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* UPDATES */}
      <section className="section-padding" style={{ background: "#fff", padding: "4rem 0" }}>
        <div className="container-custom">
          <div className="scroll-reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(254,199,4,0.1)", padding: "0.5rem 1.25rem", borderRadius: "999px", fontSize: "0.85rem", marginBottom: "1.5rem", border: "1px solid rgba(254,199,4,0.2)", color: "#000049", fontWeight: 600, letterSpacing: "1px" }}>
              <Calendar size={14} color="#FEC704" />
              <span>{t("updates.badge")}</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "#000049", marginBottom: "1rem", lineHeight: 1.2 }}>
              {t("updates.title1")}<br /><span style={{ color: "#FEC704" }}>{t("updates.title2")}</span>
            </h2>
            <p style={{ color: "#64648a", fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto", lineHeight: 1.7 }}>{t("updates.description")}</p>
            <div style={{ marginTop: "1.5rem", color: "#000049", fontWeight: 500 }}>{t("updates.question")}</div>
          </div>

          <div className="stagger-children" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0", borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,73,0.12)", maxWidth: "1000px", margin: "0 auto" }}>
            <div className="hover-lift" style={{ background: "#f8f8ff", padding: "3rem 2.5rem", position: "relative", borderRight: "1px solid rgba(0,0,73,0.05)" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #FEC704, #000049)", opacity: 0.5 }} />
              <div style={{ width: 64, height: 64, borderRadius: "16px", background: "linear-gradient(135deg, #FEC704, #fdd835)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem", boxShadow: "0 10px 20px rgba(254,199,4,0.3)" }}>
                <BookOpen size={32} color="#000049" />
              </div>
              <h3 style={{ fontSize: "2rem", fontWeight: 700, color: "#000049", marginBottom: "1rem", lineHeight: 1.2 }}>
                {t("updates.newsTitle")}<br /><span style={{ color: "#FEC704" }}>{t("updates.newsHighlight")}</span>
              </h3>
              <p style={{ color: "#000049", fontSize: "1rem", fontWeight: 600, marginBottom: "0.5rem", letterSpacing: "1px" }}>{t("updates.newsLabel")}</p>
              <p style={{ color: "#64648a", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "2rem" }}>{t("updates.newsDescription")}</p>
              <Link href="/noticias" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "#000049", color: "#fff", padding: "0.9rem 2rem", borderRadius: "12px", fontWeight: 600, textDecoration: "none", border: "2px solid #000049" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#FEC704"; e.currentTarget.style.color = "#000049"; e.currentTarget.style.borderColor = "#FEC704"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#000049"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#000049"; }}>
                {t("updates.newsBtn")} <ArrowRight size={18} />
              </Link>
            </div>

            <div className="hover-lift" style={{ background: "linear-gradient(135deg, #000049, #0a0a6e)", padding: "3rem 2.5rem", position: "relative" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #FEC704, #fff)", opacity: 0.3 }} />
              <div style={{ width: 64, height: 64, borderRadius: "16px", background: "#FEC704", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                <Calendar size={32} color="#000049" />
              </div>
              <h3 style={{ fontSize: "2rem", fontWeight: 700, color: "#fff", marginBottom: "1rem", lineHeight: 1.2 }}>
                {t("updates.eventsTitle")}<br /><span style={{ color: "#FEC704" }}>{t("updates.eventsHighlight")}</span>
              </h3>
              <p style={{ color: "#FEC704", fontSize: "1rem", fontWeight: 600, marginBottom: "0.5rem", letterSpacing: "1px" }}>{t("updates.eventsLabel")}</p>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "2rem" }}>{t("updates.eventsDescription")}</p>
              <Link href="/eventos" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "transparent", color: "#FEC704", padding: "0.9rem 2rem", borderRadius: "12px", fontWeight: 600, textDecoration: "none", border: "2px solid #FEC704" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#FEC704"; e.currentTarget.style.color = "#000049"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#FEC704"; }}>
                {t("updates.eventsBtn")} <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="scroll-reveal" style={{ textAlign: "center", marginTop: "3rem" }}>
            <p style={{ color: "#64648a", fontSize: "0.95rem" }}>
              {t("updates.memberText")}{" "}
              <Link href="/contacto" style={{ color: "#000049", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "4px", textDecorationColor: "#FEC704" }}>
                {t("updates.memberLink")}
              </Link>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
