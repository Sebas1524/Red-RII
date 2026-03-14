import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["es", "en", "fr", "pt"],
  defaultLocale: "es",
  localeDetection: true,
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
