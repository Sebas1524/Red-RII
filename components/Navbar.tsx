"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, X, Globe, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: { es: "Inicio", en: "Home", fr: "Accueil", pt: "Início" } },
  {
    href: "/la-red",
    label: { es: "La Red", en: "The Network", fr: "Le Réseau", pt: "A Rede" },
    submenu: [
      {
        href: "/la-red#documentos",
        label: { es: "📄 Documentos Institucionales", en: "📄 Institutional Documents", fr: "📄 Documents Institutionnels", pt: "📄 Documentos Institucionais" },
      },
    ]
  },
  { href: "/miembros", label: { es: "Miembros", en: "Members", fr: "Membres", pt: "Membros" } },
  { href: "/caiseb", label: { es: "CAISEB", en: "CAISEB", fr: "CAISEB", pt: "CAISEB" } },
  { href: "/eventos", label: { es: "Eventos", en: "Events", fr: "Événements", pt: "Eventos" } },
  { href: "/multimedia", label: { es: "Multimedia", en: "Multimedia", fr: "Multimédia", pt: "Multimídia" } },
  { href: "/noticias", label: { es: "Noticias", en: "News", fr: "Actualités", pt: "Notícias" } },
  { href: "/contacto", label: { es: "Contacto", en: "Contact", fr: "Contact", pt: "Contato" } },
];

const languages = [
  { code: "es", flag: "🇪🇸", label: "Español" },
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "fr", flag: "🇫🇷", label: "Français" },
  { code: "pt", flag: "🇧🇷", label: "Português" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState<string | null>(null);
  const submenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = languages.find(l => pathname.startsWith(`/${l.code}`))?.code || "es";
  const currentLang = languages.find(l => l.code === currentLocale)!;
  const pathnameWithoutLocale = pathname.replace(/^\/(es|en|fr|pt)/, "") || "/";

  // Cerrar submenu al hacer click fuera
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (submenuRef.current && !submenuRef.current.contains(e.target as Node)) {
        setSubmenuOpen(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLanguage = (locale: string) => {
    const segments = pathname.split("/");
    const isLocaleSegment = languages.some(l => l.code === segments[1]);
    if (isLocaleSegment) {
      segments[1] = locale;
      router.push(segments.join("/"));
    } else {
      router.push(`/${locale}${pathname}`);
    }
    setLangOpen(false);
  };

  return (
    <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(0, 0, 73, 0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.75rem 1.5rem" }}>

        {/* Logo */}
        <Link href={`/${currentLocale}`} style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
          <Image src="/logo-red-actual.jpeg" alt="RII Logo" width={48} height={48} style={{ borderRadius: "8px", objectFit: "contain" }} />
          <span style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "0.5px", lineHeight: 1.2 }}>RII</span>
        </Link>

        {/* Desktop Nav */}
        <div ref={submenuRef} style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = pathnameWithoutLocale === link.href || pathnameWithoutLocale.startsWith(link.href + "/");
            const isCaiseb = link.href === "/caiseb";
            const hasSubmenu = !!link.submenu;
            const isSubmenuOpen = submenuOpen === link.href;

            return (
              <div key={link.href} style={{ position: "relative" }}>
                {hasSubmenu ? (
                  <button
                    onClick={() => setSubmenuOpen(isSubmenuOpen ? null : link.href)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      padding: "0.5rem 1rem",
                      borderRadius: "8px",
                      background: isActive ? "rgba(255,255,255,0.1)" : "transparent",
                      border: "none",
                      color: isActive ? "#fff" : "rgba(255,255,255,0.75)",
                      cursor: "pointer",
                      fontSize: "0.9rem",
                      fontWeight: isActive ? 600 : 400,
                      letterSpacing: "0.3px",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => { if (!isActive) { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLElement).style.color = "#fff"; } }}
                    onMouseLeave={(e) => { if (!isActive) { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)"; } }}
                  >
                    <Link
                      href={`/${currentLocale}${link.href}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {link.label[currentLocale as keyof typeof link.label]}
                    </Link>
                    <ChevronDown size={14} style={{ transition: "transform 0.2s", transform: isSubmenuOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
                  </button>
                ) : (
                  <Link
                    href={`/${currentLocale}${link.href === "/" ? "" : link.href}`}
                    style={{
                      padding: "0.5rem 1rem",
                      borderRadius: "8px",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      fontWeight: isActive ? 600 : 400,
                      color: isCaiseb ? "#FEC704" : isActive ? "#fff" : "rgba(255,255,255,0.75)",
                      background: isActive ? "rgba(255,255,255,0.1)" : "transparent",
                      transition: "all 0.2s ease",
                      letterSpacing: "0.3px",
                      display: "block",
                    }}
                    onMouseEnter={(e) => { if (!isActive) { (e.target as HTMLElement).style.background = "rgba(255,255,255,0.07)"; (e.target as HTMLElement).style.color = isCaiseb ? "#FEC704" : "#fff"; } }}
                    onMouseLeave={(e) => { if (!isActive) { (e.target as HTMLElement).style.background = "transparent"; (e.target as HTMLElement).style.color = isCaiseb ? "#FEC704" : "rgba(255,255,255,0.75)"; } }}
                  >
                    {link.label[currentLocale as keyof typeof link.label]}
                  </Link>
                )}

                {/* Submenu dropdown */}
                {hasSubmenu && isSubmenuOpen && (
                  <div style={{
                    position: "absolute",
                    top: "calc(100% + 8px)",
                    left: 0,
                    background: "#000049",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "10px",
                    overflow: "hidden",
                    minWidth: "220px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                    zIndex: 200,
                  }}>
                    {link.submenu!.map((item) => (
                      <Link
                        key={item.href}
                        href={`/${currentLocale}${item.href}`}
                        onClick={() => setSubmenuOpen(null)}
                        style={{
                          display: "block",
                          padding: "0.75rem 1rem",
                          color: "rgba(255,255,255,0.85)",
                          textDecoration: "none",
                          fontSize: "0.875rem",
                          fontWeight: 400,
                          transition: "background 0.2s",
                          borderBottom: "1px solid rgba(255,255,255,0.06)",
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(254,199,4,0.1)"; (e.currentTarget as HTMLElement).style.color = "#FEC704"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)"; }}
                      >
                        {item.label[currentLocale as keyof typeof item.label]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Selector de idioma */}
          <div style={{ position: "relative", marginLeft: "0.5rem" }}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: "0.5rem 0.85rem", borderRadius: "8px", background: "rgba(254,199,4,0.1)", border: "1px solid rgba(254,199,4,0.3)", color: "#FEC704", cursor: "pointer", fontSize: "0.9rem", fontWeight: 600, transition: "all 0.2s ease" }}
            >
              <Globe size={14} />
              <span>{currentLang.flag} {currentLang.code.toUpperCase()}</span>
            </button>
            {langOpen && (
              <div style={{ position: "absolute", top: "calc(100% + 8px)", right: 0, background: "#000049", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", overflow: "hidden", minWidth: "140px", boxShadow: "0 10px 30px rgba(0,0,0,0.3)", zIndex: 200 }}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => switchLanguage(lang.code)}
                    style={{ display: "flex", alignItems: "center", gap: "0.5rem", width: "100%", padding: "0.65rem 1rem", background: lang.code === currentLocale ? "rgba(254,199,4,0.15)" : "transparent", border: "none", color: lang.code === currentLocale ? "#FEC704" : "rgba(255,255,255,0.8)", cursor: "pointer", fontSize: "0.9rem", fontWeight: lang.code === currentLocale ? 600 : 400, textAlign: "left", transition: "background 0.2s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = lang.code === currentLocale ? "rgba(254,199,4,0.15)" : "transparent"; }}
                  >
                    <span>{lang.flag}</span><span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Botón móvil */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-menu-btn" style={{ display: "none", background: "transparent", border: "none", color: "#fff", cursor: "pointer", padding: "0.5rem" }} aria-label="Menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div style={{ display: "flex", flexDirection: "column", padding: "0.5rem 1.5rem 1rem", gap: "0.25rem", background: "rgba(0, 0, 73, 0.98)" }}>
          {navLinks.map((link) => {
            const isActive = pathnameWithoutLocale === link.href;
            const isCaiseb = link.href === "/caiseb";
            return (
              <div key={link.href}>
                <Link
                  href={`/${currentLocale}${link.href === "/" ? "" : link.href}`}
                  onClick={() => setMobileOpen(false)}
                  style={{ padding: "0.75rem 1rem", borderRadius: "8px", textDecoration: "none", fontSize: "1rem", fontWeight: isActive ? 600 : 400, color: isCaiseb ? "#FEC704" : isActive ? "#fff" : "rgba(255,255,255,0.75)", background: isActive ? "rgba(255,255,255,0.1)" : "transparent", display: "block" }}
                >
                  {link.label[currentLocale as keyof typeof link.label]}
                </Link>
                {link.submenu && (
                  <div style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                    {link.submenu.map((item) => (
                      <Link
                        key={item.href}
                        href={`/${currentLocale}${item.href}`}
                        onClick={() => setMobileOpen(false)}
                        style={{ padding: "0.5rem 1rem", borderRadius: "8px", textDecoration: "none", fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", display: "block" }}
                      >
                        {item.label[currentLocale as keyof typeof item.label]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Selector de idioma móvil */}
          <div style={{ marginTop: "0.5rem", paddingTop: "0.5rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", marginBottom: "0.5rem", paddingLeft: "1rem" }}>Idioma / Language</p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", paddingLeft: "0.5rem" }}>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => { switchLanguage(lang.code); setMobileOpen(false); }}
                  style={{ padding: "0.4rem 0.85rem", borderRadius: "8px", background: lang.code === currentLocale ? "rgba(254,199,4,0.2)" : "rgba(255,255,255,0.07)", border: lang.code === currentLocale ? "1px solid #FEC704" : "1px solid rgba(255,255,255,0.1)", color: lang.code === currentLocale ? "#FEC704" : "rgba(255,255,255,0.8)", cursor: "pointer", fontSize: "0.85rem", fontWeight: lang.code === currentLocale ? 600 : 400 }}
                >
                  {lang.flag} {lang.code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 769px) { .mobile-menu-btn { display: none !important; } .desktop-nav { display: flex !important; } }
        @media (max-width: 768px) { .mobile-menu-btn { display: block !important; } .desktop-nav { display: none !important; } }
      `}</style>
    </nav>
  );
}
