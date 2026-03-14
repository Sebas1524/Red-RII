"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

const languages = ["es", "en", "fr", "pt"];

const quickLinks = [
  { href: "/", label: { es: "Inicio", en: "Home", fr: "Accueil", pt: "Início" } },
  { href: "/la-red", label: { es: "La Red", en: "The Network", fr: "Le Réseau", pt: "A Rede" } },
  { href: "/miembros", label: { es: "Miembros", en: "Members", fr: "Membres", pt: "Membros" } },
  { href: "/caiseb", label: { es: "CAISEB", en: "CAISEB", fr: "CAISEB", pt: "CAISEB" } },
  { href: "/eventos", label: { es: "Eventos", en: "Events", fr: "Événements", pt: "Eventos" } },
  { href: "/multimedia", label: { es: "Multimedia", en: "Multimedia", fr: "Multimédia", pt: "Multimídia" } },
  { href: "/noticias", label: { es: "Noticias", en: "News", fr: "Actualités", pt: "Notícias" } },
  { href: "/contacto", label: { es: "Contacto", en: "Contact", fr: "Contact", pt: "Contato" } },
];

const texts = {
  es: {
    name: "Red Iberoamericana\nde Investigación",
    description: "Fortaleciendo la investigación y la formación integral universitaria en Iberoamérica.",
    links: "Enlaces",
    contact: "Contacto",
    rights: "Todos los derechos reservados.",
  },
  en: {
    name: "Ibero-American\nResearch Network",
    description: "Strengthening research and comprehensive university education across Ibero-America.",
    links: "Quick Links",
    contact: "Contact",
    rights: "All rights reserved.",
  },
  fr: {
    name: "Réseau Ibéro-Américain\nde Recherche",
    description: "Renforcer la recherche et la formation universitaire intégrale en Ibéro-Amérique.",
    links: "Liens",
    contact: "Contact",
    rights: "Tous droits réservés.",
  },
  pt: {
    name: "Rede Ibero-Americana\nde Pesquisa",
    description: "Fortalecendo a pesquisa e a formação universitária integral na Ibero-América.",
    links: "Links",
    contact: "Contato",
    rights: "Todos os direitos reservados.",
  },
};

export default function Footer() {
  const pathname = usePathname();
  const currentLocale = languages.find(l => pathname.startsWith(`/${l}`)) || "es";
  const t = texts[currentLocale as keyof typeof texts];

  return (
    <footer style={{ background: "linear-gradient(180deg, #000049 0%, #000030 100%)", color: "rgba(255,255,255,0.8)", padding: "3rem 1.5rem 1.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2.5rem" }}>

        {/* Logo */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <Image src="/logo.svg" alt="RII" width={40} height={40} style={{ filter: "brightness(0) invert(1)" }} />
            <span style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem", whiteSpace: "pre-line" }}>
              {t.name}
            </span>
          </div>
          <p style={{ fontSize: "0.875rem", lineHeight: 1.6, opacity: 0.7 }}>{t.description}</p>
        </div>

        {/* Links */}
        <div>
          <h3 style={{ color: "#fff", fontSize: "1rem", fontWeight: 600, marginBottom: "1rem", letterSpacing: "1px", textTransform: "uppercase" }}>
            {t.links}
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${currentLocale}${link.href === "/" ? "" : link.href}`}
                style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FEC704")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.65)")}
              >
                {link.label[currentLocale as keyof typeof link.label]}
              </Link>
            ))}
          </div>
        </div>

        {/* Contacto */}
        <div>
          <h3 style={{ color: "#fff", fontSize: "1rem", fontWeight: 600, marginBottom: "1rem", letterSpacing: "1px", textTransform: "uppercase" }}>
            {t.contact}
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.875rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Mail size={16} style={{ opacity: 0.6 }} />
              <span>direccioninvestigacion@itsjapon.edu.ec</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Phone size={16} style={{ opacity: 0.6 }} />
              <span>+593 99 252 6110</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: "2.5rem", paddingTop: "1.5rem", textAlign: "center", fontSize: "0.8rem", opacity: 0.5 }}>
        © {new Date().getFullYear()} {t.name.replace("\n", " ")}. {t.rights}
      </div>
    </footer>
  );
}
