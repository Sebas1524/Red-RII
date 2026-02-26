"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/la-red", label: "La Red" },
    { href: "/miembros", label: "Miembros" },
    { href: "/caiseb", label: "CAISEB" },
    { href: "/eventos", label: "Eventos" },
    { href: "/multimedia", label: "Multimedia" },
    { href: "/noticias", label: "Noticias" },
    { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav
            style={{
                position: "sticky",
                top: 0,
                zIndex: 100,
                background: "rgba(0, 0, 73, 0.97)",
                backdropFilter: "blur(12px)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
        >
            <div
                style={{
                    maxWidth: 1200,
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.75rem 1.5rem",
                }}
            >

                <Link
                    href="/"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        textDecoration: "none",
                    }}
                >
                    <Image
                        src="/logo.svg"
                        alt="RII Logo"
                        width={48}
                        height={48}
                        style={{ filter: "brightness(0) invert(1)" }}
                    />
                    <span
                        style={{
                            color: "#fff",
                            fontWeight: 700,
                            fontSize: "1.1rem",
                            letterSpacing: "0.5px",
                            lineHeight: 1.2,
                        }}
                    >
                        RII
                    </span>
                </Link>


                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.25rem",
                    }}
                    className="desktop-nav"
                >
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        const isCaiseb = link.href === "/caiseb";
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                style={{
                                    padding: "0.5rem 1rem",
                                    borderRadius: "8px",
                                    textDecoration: "none",
                                    fontSize: "0.9rem",
                                    fontWeight: isActive ? 600 : 400,
                                    color: isCaiseb ? "#FEC704" : isActive ? "#fff" : "rgba(255,255,255,0.75)",
                                    background: isActive
                                        ? "rgba(255,255,255,0.1)"
                                        : "transparent",
                                    transition: "all 0.2s ease",
                                    letterSpacing: "0.3px",
                                }}
                                onMouseEnter={(e) => {
                                    if (!isActive) {
                                        (e.target as HTMLElement).style.background =
                                            "rgba(255,255,255,0.07)";
                                        (e.target as HTMLElement).style.color = "#fff";
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isActive) {
                                        (e.target as HTMLElement).style.background = "transparent";
                                        (e.target as HTMLElement).style.color = isCaiseb
                                            ? "#FEC704"
                                            : "rgba(255,255,255,0.75)";
                                    }
                                }}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>


                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="mobile-menu-btn"
                    style={{
                        display: "none",
                        background: "transparent",
                        border: "none",
                        color: "#fff",
                        cursor: "pointer",
                        padding: "0.5rem",
                    }}
                    aria-label="Menu"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>


            {mobileOpen && (
                <div
                    className="mobile-nav"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "0.5rem 1.5rem 1rem",
                        gap: "0.25rem",
                        background: "rgba(0, 0, 73, 0.98)",
                    }}
                >
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        const isCaiseb = link.href === "/caiseb";
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                style={{
                                    padding: "0.75rem 1rem",
                                    borderRadius: "8px",
                                    textDecoration: "none",
                                    fontSize: "1rem",
                                    fontWeight: isActive ? 600 : 400,
                                    color: isCaiseb ? "#FEC704" : isActive ? "#fff" : "rgba(255,255,255,0.75)",
                                    background: isActive
                                        ? "rgba(255,255,255,0.1)"
                                        : "transparent",
                                }}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            )}

            <style jsx>{`
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
          .desktop-nav {
            display: flex !important;
          }
        }
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block !important;
          }
          .desktop-nav {
            display: none !important;
          }
        }
      `}</style>
        </nav>
    );
}
