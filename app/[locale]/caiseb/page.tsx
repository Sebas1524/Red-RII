import { getPageBySlug } from "@/lib/wordpress";
import { Calendar, MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";

export const dynamic = "force-dynamic";

// ✅ Función para procesar el HTML y corregir URLs
function processHtmlContent(html: string): string {
  let processed = html;

  // 1. Convertir http://blog.redibero.com a https://blog.redibero.com
  processed = processed.replace(
    /http:\/\/blog\.redibero\.com/g,
    'https://blog.redibero.com'
  );

  // 2. Convertir http://i.postimg.cc a https://i.postimg.cc
  processed = processed.replace(
    /http:\/\/i\.postimg\.cc/g,
    'https://i.postimg.cc'
  );

  // 3. Convertir http://postimg.cc a https://postimg.cc
  processed = processed.replace(
    /http:\/\/postimg\.cc/g,
    'https://postimg.cc'
  );

  // 4. Añadir referrerpolicy="no-referrer" a todas las imágenes (evita bloqueos CORS)
  processed = processed.replace(
    /<img\s+/g,
    '<img referrerpolicy="no-referrer" loading="lazy" '
  );

  // 5. Asegurar que todas las URLs de imágenes tengan protocolo https
  processed = processed.replace(
    /src="\/\//g,
    'src="https://'
  );

  // 6. Eliminar enlaces <a> que envuelven imágenes (si los hay)
  processed = processed.replace(
    /<a\s+href="https?:\/\/postimages\.org\/?"\s+target="_blank">/g,
    ''
  );
  processed = processed.replace(/<\/a><br><br>/g, '');
  processed = processed.replace(/<br><br>/g, '');

  return processed;
}

export default async function CaisebPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "caiseb" });
  const page = await getPageBySlug("caiseb", locale);

  // ✅ Procesa el contenido HTML
  const processedContent = page?.content ? processHtmlContent(page.content) : null;

  return (
    <div>
      {page?.cssUrls.map((url, i) => (
        <link key={i} rel="stylesheet" href={url} />
      ))}

      {page && processedContent ? (
        <div 
          className="wp-elementor-content" 
          dangerouslySetInnerHTML={{ __html: processedContent }} 
        />
      ) : (
        <section style={{ 
          background: "linear-gradient(135deg, #582080 0%, #3a1060 40%, #2a0848 100%)", 
          color: "#fff", 
          minHeight: "60vh", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          textAlign: "center", 
          padding: "4rem 1.5rem" 
        }}>
          <div style={{ maxWidth: "600px" }}>
            <div style={{ 
              display: "inline-block", 
              background: "#FEC704", 
              color: "#582080", 
              padding: "0.4rem 1.25rem", 
              borderRadius: "999px", 
              fontSize: "0.85rem", 
              fontWeight: 700, 
              marginBottom: "1.5rem", 
              letterSpacing: "1px", 
              textTransform: "uppercase" 
            }}>
              {t("badge")}
            </div>
            <h1 style={{ 
              fontSize: "clamp(2.5rem, 6vw, 4rem)", 
              fontWeight: 900, 
              lineHeight: 1.1, 
              marginBottom: "1.5rem" 
            }}>
              CAISEB 2026
            </h1>
            <p style={{ 
              opacity: 0.7, 
              fontSize: "1.1rem", 
              lineHeight: 1.7, 
              marginBottom: "2rem" 
            }}>
              {t("innovation")}
            </p>
            <div style={{ 
              display: "flex", 
              justifyContent: "center", 
              gap: "2rem", 
              flexWrap: "wrap", 
              opacity: 0.8 
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Calendar size={18} color="#FEC704" />
                <span>{t("comingSoon")}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <MapPin size={18} color="#FEC704" />
                <span>{t("location")}</span>
              </div>
            </div>
            <p style={{ 
              marginTop: "3rem", 
              padding: "1.5rem", 
              background: "rgba(255,255,255,0.08)", 
              borderRadius: "16px", 
              border: "1px solid rgba(254,199,4,0.2)", 
              fontSize: "0.95rem", 
              opacity: 0.8 
            }}>
              {t("preparing")}
            </p>
          </div>
        </section>
      )}
    </div>
  );
}

esto donde lo pego?
