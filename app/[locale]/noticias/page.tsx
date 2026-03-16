import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Tag, Clock } from "lucide-react";
import { getNews } from "@/lib/wordpress";
import type { Article } from "@/lib/wordpress-types";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import { getTranslations } from "next-intl/server";

export const dynamic = "force-dynamic";

const categoryColors: Record<string, { bg: string; color: string }> = {
  Congreso: { bg: "#e8d5f5", color: "#582080" },
  Convocatoria: { bg: "#fef3cd", color: "#856404" },
  Investigación: { bg: "#d4edda", color: "#155724" },
  Alianzas: { bg: "#cce5ff", color: "#004085" },
  Publicación: { bg: "#e8e8f4", color: "#000049" },
  Eventos: { bg: "#f0e6ff", color: "#582080" },
  Resultados: { bg: "#d1ecf1", color: "#0c5460" },
  General: { bg: "#e8e8f4", color: "#000049" },
};

const fallbackArticles: Article[] = [
  { title: "CAISEB 2026: El congreso que reunirá a investigadores de toda Iberoamérica", excerpt: "La Red Iberoamericana de Investigación anuncia la próxima edición de su congreso insignia.", date: "15 de Febrero, 2026", category: "Congreso", readTime: "5 min", slug: "caiseb-2026", imageUrl: "/placeholder-news.jpg" },
  { title: "Convocatoria abierta para ponencias CAISEB 2026", excerpt: "Se abre el período de recepción de ponencias para el Congreso Académico Internacional.", date: "10 de Febrero, 2026", category: "Convocatoria", readTime: "3 min", slug: "convocatoria-caiseb" },
  { title: "Nuevas líneas de investigación en inteligencia artificial", excerpt: "La RII amplía sus áreas temáticas transversales incorporando la IA aplicada a la salud y educación.", date: "5 de Febrero, 2026", category: "Investigación", readTime: "4 min", slug: "nuevas-lineas-ia" },
  { title: "Alianza estratégica con universidades de España", excerpt: "Se formaliza la incorporación de tres nuevas universidades españolas a la Red.", date: "28 de Enero, 2026", category: "Alianzas", readTime: "3 min", slug: "alianza-espana" },
  { title: "Publicación de la Revista de Investigación Vol. 5", excerpt: "Ya está disponible el quinto volumen de nuestra revista.", date: "20 de Enero, 2026", category: "Publicación", readTime: "2 min", slug: "revista-vol-5" },
  { title: "Taller de metodología de investigación para docentes", excerpt: "Se realizó con éxito el taller sobre técnicas avanzadas de investigación.", date: "12 de Enero, 2026", category: "Eventos", readTime: "4 min", slug: "taller-metodologia" },
  { title: "Resultados del Simposio de Innovación Educativa 2025", excerpt: "Compartimos las conclusiones surgidas del simposio sobre modelos pedagógicos innovadores.", date: "5 de Enero, 2026", category: "Resultados", readTime: "6 min", slug: "simposio-innovacion-2025" },
];

export default async function NoticiasPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "noticias" });

  let articles = await getNews(locale);
  if (articles.length === 0) articles = fallbackArticles;

  const [featuredArticle, ...news] = articles;

  return (
    <ScrollRevealWrapper>
      <section style={{ background: "linear-gradient(135deg, #000049 0%, #0a0a6e 50%, #000030 100%)", color: "#fff", padding: "5rem 1.5rem 4rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div className="animate-float" style={{ position: "absolute", top: "-40%", left: "50%", transform: "translateX(-50%)", width: "800px", height: "800px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)" }} />
        <div className="container-custom scroll-reveal" style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "1rem" }}>{t("title")}</h1>
          <p style={{ fontSize: "1.1rem", opacity: 0.75, maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>{t("description")}</p>
        </div>
      </section>

      <section className="section-padding" style={{ background: "#fff" }}>
        <div className="container-custom">
          {featuredArticle && (
            <div className="scroll-reveal">
              <Link href={`/${locale}/noticias/${featuredArticle.slug}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div className="hover-lift" style={{ background: "linear-gradient(135deg, #000049 0%, #0a0a6e 100%)", borderRadius: "20px", color: "#fff", position: "relative", overflow: "hidden", marginBottom: "3rem", display: "flex", flexDirection: "column" }}>
                  {featuredArticle.imageUrl && (
                    <div style={{ position: "relative", width: "100%", height: "320px" }}>
                      <Image src={featuredArticle.imageUrl} alt={featuredArticle.title} fill style={{ objectFit: "cover", borderRadius: "20px 20px 0 0" }} sizes="(max-width: 1200px) 100vw, 1200px" />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,73,0.8) 100%)", borderRadius: "20px 20px 0 0" }} />
                    </div>
                  )}
                  <div style={{ position: "relative", zIndex: 1, padding: "2.5rem" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", background: "rgba(255,255,255,0.1)", padding: "0.3rem 0.75rem", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 600, marginBottom: "1rem", border: "1px solid rgba(255,255,255,0.15)" }}>
                      <Tag size={12} />{featuredArticle.category}
                    </div>
                    <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, marginBottom: "1rem", maxWidth: "700px" }}>{featuredArticle.title}</h2>
                    <p style={{ opacity: 0.75, fontSize: "1rem", lineHeight: 1.7, maxWidth: "600px", marginBottom: "1.5rem" }}>{featuredArticle.excerpt}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.85rem", opacity: 0.6 }}><Calendar size={14} />{featuredArticle.date}</span>
                      <span style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.85rem", opacity: 0.6 }}><Clock size={14} />{featuredArticle.readTime} {t("reading")}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {news.length > 0 && (
            <div className="stagger-children" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.5rem" }}>
              {news.map((article, i) => (
                <Link key={i} href={`/${locale}/noticias/${article.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <article className="hover-lift" style={{ background: "#fff", borderRadius: "16px", border: "1px solid #e8e8f4", display: "flex", flexDirection: "column", overflow: "hidden", height: "100%" }}>
                    {article.imageUrl && (
                      <div style={{ position: "relative", width: "100%", height: "180px" }}>
                        <Image src={article.imageUrl} alt={article.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 400px" />
                      </div>
                    )}
                    <div style={{ padding: "1.75rem", display: "flex", flexDirection: "column", flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", background: categoryColors[article.category]?.bg || "#e8e8f4", color: categoryColors[article.category]?.color || "#000049", padding: "0.2rem 0.6rem", borderRadius: "999px", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                          <Tag size={10} />{article.category}
                        </span>
                        <span style={{ fontSize: "0.75rem", color: "#999", display: "flex", alignItems: "center", gap: "0.25rem" }}><Clock size={11} />{article.readTime}</span>
                      </div>
                      <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#000049", marginBottom: "0.5rem", lineHeight: 1.4 }}>{article.title}</h3>
                      <p style={{ fontSize: "0.875rem", color: "#64648a", lineHeight: 1.6, flex: 1, marginBottom: "1rem" }}>{article.excerpt}</p>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{ fontSize: "0.8rem", color: "#999", display: "flex", alignItems: "center", gap: "0.3rem" }}><Calendar size={12} />{article.date}</span>
                        <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", color: "#000049", fontWeight: 600, fontSize: "0.85rem" }}>{t("readMore")} <ArrowRight size={14} /></span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}

          {articles.length === 0 && (
            <div className="scroll-reveal" style={{ textAlign: "center", padding: "3rem 1rem", color: "#64648a" }}>
              <p style={{ fontSize: "1.1rem" }}>{t("noNews")}</p>
            </div>
          )}
        </div>
      </section>
    </ScrollRevealWrapper>
  );
}