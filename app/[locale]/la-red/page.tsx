"use client";

import {
  BookOpen, Eye, Microscope, GraduationCap, Wrench,
  BarChart3, Code2, Heart, ChefHat, Sparkles, TreePine,
  Zap, Brain, Globe2,
} from "lucide-react";
import dynamic from "next/dynamic";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Image from "next/image";
import NetworkIllustration from "@/components/decorative/NetworkIllustration";
import { useTranslations } from "next-intl";

const ResearchMap = dynamic(() => import("@/components/dashboard/ResearchMap"), {
  ssr: false,
  loading: () => <div className="w-full h-[600px] bg-slate-900/50 rounded-3xl animate-pulse" />,
});

const researchLineIcons = [GraduationCap, Wrench, BarChart3, Code2, Heart, ChefHat, Sparkles, TreePine, Zap];

const researchLinesData = {
  es: [
    { title: "Educación", items: ["Innovación educativa inclusiva", "Modelos pedagógicos presenciales y virtuales", "Tecnología aplicada a la educación", "Prevención de dificultades de aprendizaje", "Entorno socio-familiar"] },
    { title: "Mecánica Automotriz", items: ["Emprendimiento e innovación en el sector", "Energías renovables", "Sostenibilidad energética", "Diseño de sistemas mecatrónicos"] },
    { title: "Administración, Contabilidad y Marketing", items: ["Gestión empresarial con enfoque de género", "Finanzas estratégicas", "Transformación digital", "Cultura organizacional en Pymes", "Desarrollo de programas económicos"] },
    { title: "Desarrollo de Software", items: ["Software para educación y empresas", "Aplicaciones móviles", "Redes y ciberseguridad"] },
    { title: "Salud y Bienestar", items: ["Enfermería: desarrollo humano integral", "Rehabilitación física y fisioterapia", "Odontología: seguridad del paciente", "Atención hospitalaria y comunitaria"] },
    { title: "Gastronomía", items: ["Seguridad e higiene alimentaria", "Manipulación de alimentos", "Gastronomía y cultura"] },
    { title: "Estética Integral", items: ["Emprendimientos en cosmetología", "Promoción de salud y calidad de vida"] },
    { title: "Turismo", items: ["Ecoturismo y sostenibilidad", "Educación ambiental", "Adaptación del sector turístico"] },
    { title: "Electricidad", items: ["Eficiencia energética", "Calidad de la energía eléctrica", "Estudio de máquinas eléctricas"] },
  ],
  en: [
    { title: "Education", items: ["Inclusive educational innovation", "In-person and virtual pedagogical models", "Technology applied to education", "Prevention of learning difficulties", "Socio-family environment"] },
    { title: "Automotive Mechanics", items: ["Entrepreneurship and innovation in the sector", "Renewable energies", "Energy sustainability", "Mechatronic systems design"] },
    { title: "Administration, Accounting & Marketing", items: ["Gender-focused business management", "Strategic finance", "Digital transformation", "Organizational culture in SMEs", "Economic program development"] },
    { title: "Software Development", items: ["Software for education and business", "Mobile applications", "Networks and cybersecurity"] },
    { title: "Health & Wellness", items: ["Nursing: integral human development", "Physical rehabilitation and physiotherapy", "Dentistry: patient safety", "Hospital and community care"] },
    { title: "Gastronomy", items: ["Food safety and hygiene", "Food handling", "Gastronomy and culture"] },
    { title: "Integral Aesthetics", items: ["Cosmetology entrepreneurship", "Health promotion and quality of life"] },
    { title: "Tourism", items: ["Ecotourism and sustainability", "Environmental education", "Tourism sector adaptation"] },
    { title: "Electricity", items: ["Energy efficiency", "Electrical energy quality", "Study of electrical machines"] },
  ],
  fr: [
    { title: "Éducation", items: ["Innovation éducative inclusive", "Modèles pédagogiques présentiel et virtuel", "Technologie appliquée à l'éducation", "Prévention des difficultés d'apprentissage", "Environnement socio-familial"] },
    { title: "Mécanique Automobile", items: ["Entrepreneuriat et innovation dans le secteur", "Énergies renouvelables", "Durabilité énergétique", "Conception de systèmes mécatroniques"] },
    { title: "Administration, Comptabilité et Marketing", items: ["Gestion d'entreprise avec approche de genre", "Finances stratégiques", "Transformation numérique", "Culture organisationnelle dans les PME", "Développement de programmes économiques"] },
    { title: "Développement Logiciel", items: ["Logiciels pour l'éducation et les entreprises", "Applications mobiles", "Réseaux et cybersécurité"] },
    { title: "Santé et Bien-être", items: ["Soins infirmiers: développement humain intégral", "Rééducation physique et kinésithérapie", "Dentisterie: sécurité des patients", "Soins hospitaliers et communautaires"] },
    { title: "Gastronomie", items: ["Sécurité et hygiène alimentaire", "Manipulation des aliments", "Gastronomie et culture"] },
    { title: "Esthétique Intégrale", items: ["Entrepreneuriat en cosmétologie", "Promotion de la santé et qualité de vie"] },
    { title: "Tourisme", items: ["Écotourisme et durabilité", "Éducation environnementale", "Adaptation du secteur touristique"] },
    { title: "Électricité", items: ["Efficacité énergétique", "Qualité de l'énergie électrique", "Étude des machines électriques"] },
  ],
  pt: [
    { title: "Educação", items: ["Inovação educacional inclusiva", "Modelos pedagógicos presencial e virtual", "Tecnologia aplicada à educação", "Prevenção de dificuldades de aprendizagem", "Ambiente sócio-familiar"] },
    { title: "Mecânica Automotiva", items: ["Empreendedorismo e inovação no setor", "Energias renováveis", "Sustentabilidade energética", "Design de sistemas mecatrônicos"] },
    { title: "Administração, Contabilidade e Marketing", items: ["Gestão empresarial com enfoque de gênero", "Finanças estratégicas", "Transformação digital", "Cultura organizacional em PMEs", "Desenvolvimento de programas econômicos"] },
    { title: "Desenvolvimento de Software", items: ["Software para educação e empresas", "Aplicativos móveis", "Redes e cibersegurança"] },
    { title: "Saúde e Bem-estar", items: ["Enfermagem: desenvolvimento humano integral", "Reabilitação física e fisioterapia", "Odontologia: segurança do paciente", "Atendimento hospitalar e comunitário"] },
    { title: "Gastronomia", items: ["Segurança e higiene alimentar", "Manipulação de alimentos", "Gastronomia e cultura"] },
    { title: "Estética Integral", items: ["Empreendimentos em cosmetologia", "Promoção da saúde e qualidade de vida"] },
    { title: "Turismo", items: ["Ecoturismo e sustentabilidade", "Educação ambiental", "Adaptação do setor turístico"] },
    { title: "Eletricidade", items: ["Eficiência energética", "Qualidade da energia elétrica", "Estudo de máquinas elétricas"] },
  ],
};

const transversalAreasData = {
  es: [{ icon: Globe2, label: "Cambio climático" }, { icon: Brain, label: "IA aplicada a salud y educación" }, { icon: Microscope, label: "Diversidad y convivencia en la pospandemia" }],
  en: [{ icon: Globe2, label: "Climate change" }, { icon: Brain, label: "AI applied to health and education" }, { icon: Microscope, label: "Diversity and coexistence in the post-pandemic" }],
  fr: [{ icon: Globe2, label: "Changement climatique" }, { icon: Brain, label: "IA appliquée à la santé et l'éducation" }, { icon: Microscope, label: "Diversité et coexistence post-pandémie" }],
  pt: [{ icon: Globe2, label: "Mudança climática" }, { icon: Brain, label: "IA aplicada à saúde e educação" }, { icon: Microscope, label: "Diversidade e convivência no pós-pandemia" }],
};

const adhesionDocs = [
  { file: "ACTA ADHESION ALQUIMIA-signed-signed.pdf", name: "Instituto Superior Tecnológico Alquimia" },
  { file: "ACTA ADHESION CARLOS CISNEROS-signed-signed.pdf", name: "Instituto Superior Tecnológico Carlos Cisneros" },
  { file: "ACTA ADHESION EL LIBERTADOR-signed-signed.pdf", name: "Instituto Superior Tecnológico El Libertador" },
  { file: "ACTA ADHESION INSTITUTO QUITO-signed-signed-signed.pdf", name: "Instituto Superior Tecnológico Quito" },
  { file: "ACTA ADHESION INSTITUTO SUDAMERICANO-signed-signed.pdf", name: "Instituto Superior Tecnológico Sudamericano" },
  { file: "ACTA ADHESION QUININDÉ-signed-signed-signed.pdf", name: "Instituto Superior Tecnológico Quinindé" },
  { file: "ACTA ADHESION UNIVERSITARIO BOLIVARIANO-signed-signed.pdf", name: "Instituto Superior Universitario Bolivariano" },
  { file: "ACTA DE ADHESIÓN EDUPRAXIS-signed-signed.pdf", name: "Edupraxis" },
  { file: "ACTA DE ADHESION INSTITUTO ORELLANA-signed-signed.pdf", name: "Instituto Superior Tecnológico Orellana" },
  { file: "ACTA DE ADHESION ITCA-signed-signed.pdf", name: "Instituto Tecnológico Superior ITCA" },
  { file: "Acta de adhesión-productividad-signed-signed.pdf", name: "Instituto Superior Tecnológico Productividad" },
  { file: "Acta de adhesión-YAVIRAC-signed-signed.pdf", name: "Instituto Superior Tecnológico Yavirac" },
  { file: "ACTA INSTITUTO ELOY ALFARO-signed-signed.pdf", name: "Instituto Superior Tecnológico Eloy Alfaro" },
  { file: "Acta de Adhesion Bolivar.pdf", name: "Instituto Superior Tecnológico Bolívar" },
  { file: "ACTA DE ADHESIÓN-inst-Guayaquil.pdf", name: "Instituto Superior Tecnológico Guayaquil" },
  { file: "ACTA DE ADHESIÓN_ ACTIONGROW.pdf", name: "ACTIONGROW" },
  { file: "Carta de Intencion Bolivar.pdf", name: "Carta de Intención - Bolívar" },
  { file: "Carta de intención IST SUCRE 2023.pdf", name: "Carta de Intención - IST Sucre 2023" },
  { file: "CENESTUR.pdf", name: "CENESTUR" },
  { file: "CEPU.pdf", name: "CEPU" },
  { file: "CUESTTV.pdf", name: "CUESTTV" },
  { file: "ILLINGWORTH-SERVIENTREGA.pdf", name: "Instituto Superior Tecnológico Illingworth" },
  { file: "ITI.pdf", name: "Instituto Tecnológico ITI" },
  { file: "ITSU-SERVIENTREGA.pdf", name: "Instituto Superior Tecnológico ITSU" },
  { file: "JAPON.pdf", name: "Instituto Superior Tecnológico Japón" },
  { file: "LENDAN.pdf", name: "LENDAN" },
  { file: "MISAEL ACOSTA-SERVIENTREGA.pdf", name: "Instituto Superior Tecnológico Misael Acosta" },
  { file: "NELSON TORRES-SERVIENTREGA.pdf", name: "Instituto Superior Tecnológico Nelson Torres" },
  { file: "PICHINCHA.pdf", name: "Instituto Superior Tecnológico Pichincha" },
  { file: "REY DAVID-SERVIENTREGA.pdf", name: "Instituto Superior Tecnológico Rey David" },
  { file: "SUDAMERICANO.pdf", name: "Instituto Superior Tecnológico Sudamericano" },
  { file: "TECLEMAS-SERVIENTREGA.pdf", name: "Instituto Superior Tecnológico TECLEMAS" },
  { file: "TRAVERSARI.pdf", name: "Instituto Superior Tecnológico Traversari" },
  { file: "UNIVERSITARIO ORIENTE.pdf", name: "Instituto Superior Universitario Oriente" },
  { file: "WISSEN-SERVIENTREGA.pdf", name: "Instituto Superior Tecnológico Wissen" },
];

const mainDocs = [
  { file: "1ACTARII1-27 MARZO DEL 2024.pdf", title: "Acta RII-ACTA DE REUNIÓN", date: "27 Marzo 2024" },
  { file: "2ACTA_RED1-27 JUNIO DEL 2024.pdf", title: "Acta RED-ACTA DE REUNIÓN", date: "27 Junio 2024" },
  { file: "ACTA CONSTITUTIVA-RED RII.pdf", title: "Acta Constitutiva", date: "Documento fundacional de la Red RII" },
  { file: "Acuerdo de Cooperacion RII_ ABUSO SEXUAL INFANTIL.pdf", title: "Acuerdo de Cooperación", date: "Abuso Sexual Infantil" },
  { file: "DIR-INV-TECSU-043-M - INFORME INICIAL CAISEB 2024 CONSOLIDADO (2).pdf", title: "Informe Inicial CAISEB 2024", date: "Consolidado del congreso" },
  { file: "PLAN TRABAJO 2023-2025-RED RII-1.pdf", title: "Plan de Trabajo", date: "2023-2025" },
  { file: "RII- PLAN DE DE TRABAJO-2025-2027-2.pdf", title: "Plan de Trabajo", date: "2025-2027" },
  { file: "Reglamento de la Red.pdf", title: "Reglamento de la Red", date: "Normativa interna" },
  { file: "SENESCYT-SDIC-DIC-2023-0233-O.pdf", title: "Reconocimiento SENESCYT", date: "SDIC-DIC-2023-0233-O" },
];

export default function LaRedPage() {
  const containerRef = useScrollReveal();
  const t = useTranslations("lared");
  const locale = (typeof window !== "undefined" ? window.location.pathname.split("/")[1] : "es") as keyof typeof researchLinesData;
  const safeLocale = ["es", "en", "fr", "pt"].includes(locale) ? locale : "es";
  const researchLines = researchLinesData[safeLocale];
  const transversalAreas = transversalAreasData[safeLocale];

  const docCardStyle = { background: "#f8f8ff", borderRadius: "16px", padding: "1.5rem", border: "1px solid #e8e8f4", display: "flex", alignItems: "center", gap: "1rem", cursor: "pointer", height: "100%" };
  const docIconStyle = { width: 50, height: 50, borderRadius: "12px", background: "linear-gradient(135deg, #000049, #0a0a6e)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 as const };
  const smallDocCardStyle = { background: "#fff", borderRadius: "12px", padding: "1rem", border: "1px solid #e8e8f4", display: "flex", alignItems: "center", gap: "0.75rem", cursor: "pointer", height: "100%" };
  const smallDocIconStyle = { width: 40, height: 40, borderRadius: "8px", background: "linear-gradient(135deg, #000049, #0a0a6e)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 as const };

  return (
    <div ref={containerRef}>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #000049 0%, #0a0a6e 50%, #000030 100%)", color: "#fff", padding: "5rem 1.5rem 4rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div className="animate-float" style={{ position: "absolute", top: "-40%", left: "50%", transform: "translateX(-50%)", width: "800px", height: "800px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)" }} />
        <div className="container-custom scroll-reveal" style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "1rem" }}>{t("title")}</h1>
          <p style={{ fontSize: "1.1rem", opacity: 0.75, maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>{t("description")}</p>
        </div>
        <div style={{ position: "absolute", top: "55%", right: "-15%", transform: "translateY(-50%)", width: "800px", height: "800px", opacity: 0.6, pointerEvents: "none" }}>
          <NetworkIllustration />
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="section-padding" style={{ background: "#fff" }}>
        <div className="container-custom">
          <div className="stagger-children" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            <div className="hover-lift" style={{ background: "linear-gradient(135deg, #000049, #0a0a6e)", borderRadius: "20px", padding: "2.5rem", color: "#fff", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "relative", height: "200px", margin: "-2.5rem -2.5rem 1.5rem -2.5rem" }}>
                <Image src="/images/mission-teamwork.jpg" alt={t("missionTitle")} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 400px" />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,73,0.3) 100%)" }} />
              </div>
              <div style={{ width: 56, height: 56, borderRadius: "14px", background: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                <BookOpen size={28} color="#fff" />
              </div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>{t("missionTitle")}</h2>
              <p style={{ lineHeight: 1.8, opacity: 0.85, fontSize: "0.95rem" }}>{t("missionText")}</p>
            </div>

            <div className="hover-lift" style={{ background: "#f8f8ff", borderRadius: "20px", padding: "2.5rem", border: "2px solid #e8e8f4", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "relative", height: "200px", margin: "-2.5rem -2.5rem 1.5rem -2.5rem" }}>
                <Image src="/images/vision-future.jpg" alt={t("visionTitle")} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 400px" />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,73,0.1) 100%)" }} />
              </div>
              <div style={{ width: 56, height: 56, borderRadius: "14px", background: "#000049", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                <Eye size={28} color="#fff" />
              </div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#000049", marginBottom: "1rem" }}>{t("visionTitle")}</h2>
              <p style={{ lineHeight: 1.8, color: "#444", fontSize: "0.95rem" }}>{t("visionText")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAPA */}
      <section className="section-padding bg-slate-900 text-white overflow-hidden">
        <div className="container-custom">
          <div className="scroll-reveal text-center !mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">{t("mapTitle")}</h2>
            <p className="text-slate-400 text-lg text-center">{t("mapDescription")}</p>
          </div>
          <div className="scroll-reveal shadow-2xl rounded-3xl border border-slate-700/50">
            <ResearchMap className="h-[700px] w-full" />
          </div>
        </div>
      </section>

      {/* LÍNEAS DE INVESTIGACIÓN */}
      <section className="section-padding" style={{ background: "#f8f8ff" }}>
        <div className="container-custom">
          <div className="scroll-reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, color: "#000049", marginBottom: "0.75rem" }}>{t("researchTitle")}</h2>
            <p style={{ color: "#64648a", fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto" }}>{t("researchDescription")}</p>
          </div>
          <div className="stagger-children" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.5rem" }}>
            {researchLines.map((line, i) => {
              const Icon = researchLineIcons[i];
              return (
                <div key={i} className="hover-lift" style={{ background: "#fff", borderRadius: "16px", padding: "1.75rem", border: "1px solid #e8e8f4" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                    <div style={{ width: 44, height: 44, borderRadius: "12px", background: "linear-gradient(135deg, #000049, #0a0a6e)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={22} color="#fff" />
                    </div>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#000049" }}>{line.title}</h3>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    {line.items.map((item, j) => (
                      <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#555", fontSize: "0.875rem", lineHeight: 1.5 }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#000049", flexShrink: 0, marginTop: "0.45rem" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ÁREAS TRANSVERSALES */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src="/images/fondoV3.png" alt="Fondo" fill style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,49,0.7)", zIndex: 1 }} />
        </div>
        <div className="container-custom scroll-reveal" style={{ position: "relative", zIndex: 2, padding: "4rem 1.5rem", textAlign: "center" }}>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, marginBottom: "0.5rem", letterSpacing: "1px", textTransform: "uppercase" }}>{t("transversalTitle")}</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2.5rem", fontSize: "1rem" }}>{t("transversalDescription")}</p>
          <div style={{ width: "80px", height: "3px", background: "#FEC704", margin: "0 auto 2.5rem auto", borderRadius: "2px" }} />
          <div className="stagger-children" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", maxWidth: "800px", margin: "0 auto" }}>
            {transversalAreas.map((area, i) => (
              <div key={i} className="hover-lift" style={{ display: "flex", alignItems: "center", gap: "0.75rem", background: "rgba(255,255,255,0.12)", padding: "1rem 2rem", borderRadius: "50px", border: "1px solid rgba(254,199,4,0.3)", color: "#fff", backdropFilter: "blur(8px)", cursor: "default" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#FEC704"; e.currentTarget.style.color = "#000049"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "#fff"; }}>
                <area.icon size={22} style={{ opacity: 0.9 }} />
                <span style={{ fontSize: "1rem", fontWeight: 500 }}>{area.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTOS LEGALES */}
      <section className="section-padding" style={{ background: "#fff", padding: "4rem 1.5rem" }}>
        <div className="container-custom">
          <div className="scroll-reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ width: 64, height: 64, borderRadius: "16px", background: "linear-gradient(135deg, #FEC704, #fdd835)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem auto" }}>
              <BookOpen size={32} color="#000049" />
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.2rem)", fontWeight: 700, color: "#000049", marginBottom: "1rem" }}>{t("docsTitle")}</h2>
            <p style={{ color: "#64648a", fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto", lineHeight: 1.6 }}>{t("docsDescription")}</p>
          </div>

          {/* Documentos principales */}
          <div className="scroll-reveal" style={{ marginBottom: "3rem" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 600, color: "#000049", marginBottom: "1.5rem", paddingBottom: "0.5rem", borderBottom: "2px solid #FEC704" }}>{t("docsMainTitle")}</h3>
            <div className="stagger-children" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: "1.5rem" }}>
              {mainDocs.map((doc, i) => (
                <a key={i} href={`/documentos-legales/${doc.file}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <div className="hover-lift" style={docCardStyle}>
                    <div style={docIconStyle}><BookOpen size={24} color="#FEC704" /></div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#000049", marginBottom: "0.25rem" }}>{doc.title}</h3>
                      <p style={{ fontSize: "0.85rem", color: "#64648a" }}>{doc.date}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Cartas de Adhesión */}
          <div className="scroll-reveal">
            <h3 style={{ fontSize: "1.3rem", fontWeight: 600, color: "#000049", marginBottom: "1.5rem", paddingBottom: "0.5rem", borderBottom: "2px solid #FEC704" }}>{t("adhesionTitle")}</h3>
            <p style={{ color: "#64648a", fontSize: "0.95rem", marginBottom: "1.5rem", fontStyle: "italic" }}>{t("adhesionDescription")}</p>
            <div className="stagger-children" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem" }}>
              {adhesionDocs.map((doc, i) => (
                <a key={i} href={`/documentos-legales/${doc.file}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <div className="hover-lift" style={smallDocCardStyle}>
                    <div style={smallDocIconStyle}><BookOpen size={20} color="#FEC704" /></div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: "0.95rem", fontWeight: 500, color: "#000049" }}>{doc.name}</h4>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
