"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Globe, MapPin, Phone } from "lucide-react";

const quickLinks = [
    { href: "/", label: "Inicio" },
    { href: "/la-red", label: "La Red" },
    { href: "/miembros", label: "Miembros" },
    { href: "/caiseb", label: "CAISEB" },
    { href: "/eventos", label: "Eventos" },
    { href: "/multimedia", label: "Multimedia" },
    { href: "/noticias", label: "Noticias" },
    { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
    return (
        <footer
            style={{
                background: "linear-gradient(180deg, #000049 0%, #000030 100%)",
                color: "rgba(255,255,255,0.8)",
                padding: "3rem 1.5rem 1.5rem",
            }}
        >
            <div
                style={{
                    maxWidth: 1200,
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "2.5rem",
                }}
            >

                <div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                            marginBottom: "1rem",
                        }}
                    >
                        <Image
                            src="/logo.svg"
                            alt="RII"
                            width={40}
                            height={40}
                            style={{ filter: "brightness(0) invert(1)" }}
                        />
                        <span
                            style={{
                                color: "#fff",
                                fontWeight: 700,
                                fontSize: "1.1rem",
                            }}
                        >
                            Red Iberoamericana
                            <br />
                            de Investigación
                        </span>
                    </div>
                    <p style={{ fontSize: "0.875rem", lineHeight: 1.6, opacity: 0.7 }}>
                        Fortaleciendo la investigación y la formación integral universitaria
                        en Iberoamérica.
                    </p>
                </div>


                <div>
                    <h3
                        style={{
                            color: "#fff",
                            fontSize: "1rem",
                            fontWeight: 600,
                            marginBottom: "1rem",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                        }}
                    >
                        Enlaces
                    </h3>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem",
                        }}
                    >
                        {quickLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                style={{
                                    color: "rgba(255,255,255,0.65)",
                                    textDecoration: "none",
                                    fontSize: "0.875rem",
                                    transition: "color 0.2s",
                                }}
                                onMouseEnter={(e) =>
                                    ((e.target as HTMLElement).style.color = "#FEC704")
                                }
                                onMouseLeave={(e) =>
                                ((e.target as HTMLElement).style.color =
                                    "rgba(255,255,255,0.65)")
                                }
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>


                <div>
                    <h3
                        style={{
                            color: "#fff",
                            fontSize: "1rem",
                            fontWeight: 600,
                            marginBottom: "1rem",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                        }}
                    >
                        Contacto
                    </h3>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.75rem",
                            fontSize: "0.875rem",
                        }}
                    >
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


            <div
                style={{
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    marginTop: "2.5rem",
                    paddingTop: "1.5rem",
                    textAlign: "center",
                    fontSize: "0.8rem",
                    opacity: 0.5,
                }}
            >
                © {new Date().getFullYear()} Red Iberoamericana de Investigación. Todos
                los derechos reservados.
            </div>
        </footer>
    );
}
