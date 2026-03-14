"use client";

import { useState, useRef, FormEvent } from "react";
import { Mail, Phone, Building2, User, MessageSquare, Send } from "lucide-react";
import Script from "next/script";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslations } from "next-intl";

declare global {
  interface Window {
    emailjs: {
      init: (publicKey: string) => void;
      sendForm: (
        serviceId: string,
        templateId: string,
        form: HTMLFormElement
      ) => Promise<{ status: number; text: string }>;
    };
  }
}

export default function ContactoPage() {
  const containerRef = useScrollReveal();
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [perteneceOrg, setPerteneceOrg] = useState<string>("");
  const t = useTranslations("contacto");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (perteneceOrg === t("orgYes")) {
      const nombreOrg = (formRef.current.elements.namedItem("nombre_organizacion") as HTMLInputElement)?.value;
      const paisOrg = (formRef.current.elements.namedItem("pais_organizacion") as HTMLSelectElement)?.value;
      if (!nombreOrg || !paisOrg) {
        alert("Por favor, completa el nombre y país de la organización");
        return;
      }
    }

    setSending(true);
    setError(false);

    try {
      await window.emailjs.sendForm("service_2fqxh6c", "template_gs6fezf", formRef.current);
      setSent(true);
      formRef.current.reset();
      setPerteneceOrg("");
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <div ref={containerRef}>
      <Script
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        strategy="beforeInteractive"
        onLoad={() => { if (window.emailjs) window.emailjs.init("fLGDwkE2AK3H23iy5"); }}
      />

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #000049 0%, #0a0a6e 40%, #000030 100%)", color: "#fff", position: "relative", overflow: "hidden", padding: "5rem 1.5rem 4rem" }}>
        <div className="animate-float" style={{ position: "absolute", top: "-40%", right: "-15%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="animate-pulse-glow" style={{ position: "absolute", bottom: "-20%", left: "-10%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(254,199,4,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="container-custom" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="animate-fade-in-up">
            <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 64, height: 64, borderRadius: "16px", background: "rgba(255,255,255,0.1)", marginBottom: "1.5rem", border: "1px solid rgba(255,255,255,0.15)" }}>
              <Mail size={32} />
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "1rem" }}>{t("title")}</h1>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.7, opacity: 0.7, maxWidth: "550px", margin: "0 auto" }}>{t("description")}</p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="section-padding" style={{ background: "#f8f8ff" }}>
        <div className="container-custom" style={{ maxWidth: "800px" }}>

          {sent && (
            <div className="scroll-reveal revealed" style={{ background: "linear-gradient(135deg, #059669, #047857)", color: "#fff", padding: "1.5rem 2rem", borderRadius: "16px", marginBottom: "2rem", textAlign: "center", fontSize: "1rem", fontWeight: 500, boxShadow: "0 8px 24px rgba(5,150,105,0.2)" }}>
              {t("success")}
            </div>
          )}

          {error && (
            <div style={{ background: "linear-gradient(135deg, #dc2626, #b91c1c)", color: "#fff", padding: "1.5rem 2rem", borderRadius: "16px", marginBottom: "2rem", textAlign: "center", fontSize: "1rem", fontWeight: 500 }}>
              {t("error")}
            </div>
          )}

          <form ref={formRef} id="contact-form" onSubmit={handleSubmit}>

            {/* ORGANIZACIÓN */}
            <div className="contact-form-section scroll-reveal">
              <div className="contact-section-header">
                <Building2 size={20} />
                <span className="contact-section-title">{t("orgSection")}</span>
              </div>
              <div className="contact-form-group">
                <label className="contact-label required">{t("orgQuestion")}</label>
                <div className="contact-radio-group">
                  <label className="contact-radio-option">
                    <input type="radio" name="pertenece_organizacion" value={t("orgYes")} required checked={perteneceOrg === t("orgYes")} onChange={(e) => setPerteneceOrg(e.target.value)} />
                    <span>{t("orgYes")}</span>
                  </label>
                  <label className="contact-radio-option">
                    <input type="radio" name="pertenece_organizacion" value={t("orgNo")} required checked={perteneceOrg === t("orgNo")} onChange={(e) => setPerteneceOrg(e.target.value)} />
                    <span>{t("orgNo")}</span>
                  </label>
                </div>
              </div>
              <div className="contact-form-group">
                <label htmlFor="nombre_organizacion" className="contact-label">{t("orgName")}</label>
                <input type="text" id="nombre_organizacion" name="nombre_organizacion" className="contact-input" placeholder={t("orgNamePlaceholder")} disabled={perteneceOrg !== t("orgYes")} required={perteneceOrg === t("orgYes")} />
              </div>
              <div className="contact-form-group">
                <label htmlFor="pais_organizacion" className="contact-label">{t("orgCountry")}</label>
                <select id="pais_organizacion" name="pais_organizacion" className="contact-select" disabled={perteneceOrg !== t("orgYes")} required={perteneceOrg === t("orgYes")}>
                  <option value="">{t("orgCountryPlaceholder")}</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Brasil">Brasil</option>
                  <option value="Chile">Chile</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Cuba">Cuba</option>
                  <option value="España">España</option>
                  <option value="México">México</option>
                  <option value="Perú">Perú</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
            </div>

            {/* JEFE */}
            <div className="contact-form-section scroll-reveal">
              <div className="contact-section-header">
                <User size={20} />
                <span className="contact-section-title">{t("bossSection")}</span>
              </div>
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="jefe_nombre" className="contact-label required">{t("firstName")}</label>
                  <input type="text" id="jefe_nombre" name="jefe_nombre" className="contact-input" placeholder={t("bossFirstPlaceholder")} required />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="jefe_apellido" className="contact-label required">{t("lastName")}</label>
                  <input type="text" id="jefe_apellido" name="jefe_apellido" className="contact-input" placeholder={t("bossLastPlaceholder")} required />
                </div>
              </div>
              <div className="contact-form-group">
                <label htmlFor="jefe_cargo" className="contact-label">{t("position")}</label>
                <input type="text" id="jefe_cargo" name="jefe_cargo" className="contact-input" placeholder={t("bossPositionPlaceholder")} />
              </div>
            </div>

            {/* CONTACTO */}
            <div className="contact-form-section scroll-reveal">
              <div className="contact-section-header">
                <Phone size={20} />
                <span className="contact-section-title">{t("contactSection")}</span>
              </div>
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="contacto_nombre" className="contact-label required">{t("firstName")}</label>
                  <input type="text" id="contacto_nombre" name="contacto_nombre" className="contact-input" placeholder={t("contactFirstPlaceholder")} required />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="contacto_apellido" className="contact-label required">{t("lastName")}</label>
                  <input type="text" id="contacto_apellido" name="contacto_apellido" className="contact-input" placeholder={t("contactLastPlaceholder")} required />
                </div>
              </div>
              <div className="contact-form-group">
                <label htmlFor="contacto_cargo" className="contact-label required">{t("department")}</label>
                <input type="text" id="contacto_cargo" name="contacto_cargo" className="contact-input" placeholder={t("departmentPlaceholder")} required />
              </div>
            </div>

            {/* DATOS */}
            <div className="contact-form-section scroll-reveal">
              <div className="contact-section-header">
                <Mail size={20} />
                <span className="contact-section-title">{t("dataSection")}</span>
              </div>
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="telefono" className="contact-label required">{t("phone")}</label>
                  <input type="tel" id="telefono" name="telefono" className="contact-input" placeholder="+593 123456789" required />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="email" className="contact-label required">{t("email")}</label>
                  <input type="email" id="email" name="email" className="contact-input" placeholder="correo@ejemplo.com" required />
                </div>
              </div>
            </div>

            {/* MENSAJE */}
            <div className="contact-form-section scroll-reveal">
              <div className="contact-section-header">
                <MessageSquare size={20} />
                <span className="contact-section-title">{t("messageSection")}</span>
              </div>
              <div className="contact-form-group">
                <label htmlFor="mensaje" className="contact-label required">{t("message")}</label>
                <textarea id="mensaje" name="mensaje" className="contact-textarea" placeholder={t("messagePlaceholder")} required rows={5} />
              </div>
            </div>

            <button type="submit" className="contact-btn-submit scroll-reveal" disabled={sending}>
              <Send size={18} />
              {sending ? t("sending") : t("send")}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
