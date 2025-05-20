import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;
const locales = ["en", "bn"];
const defaultLocale = "en";

export function middleware(request) {
  // For the home page, redirect to default locale directly
  if (request.nextUrl.pathname === "/") {
    const url = new URL(`/${defaultLocale}`, request.url);
    return NextResponse.redirect(url);
  }

  // Check if the pathname is for a public file like an image or CSS
  if (PUBLIC_FILE.test(request.nextUrl.pathname) || request.nextUrl.pathname.includes("/api/") || request.nextUrl.pathname.includes("_next")) {
    return;
  }

  // Check if the pathname already includes a locale
  const pathname = request.nextUrl.pathname;
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

  if (pathnameHasLocale) return;

  // Detect locale from headers or default
  let locale = defaultLocale;

  // Get language from user's browser settings or cookie if set
  if (request.cookies.has("NEXT_LOCALE")) {
    const cookieLocale = request.cookies.get("NEXT_LOCALE").value;
    if (locales.includes(cookieLocale)) {
      locale = cookieLocale;
    }
  } else if (request.headers.has("accept-language")) {
    const acceptLanguage = request.headers.get("accept-language");
    const preferredLocale = acceptLanguage
      .split(",")
      .map((lang) => lang.split(";")[0].trim().split("-")[0])
      .find((lang) => locales.includes(lang));

    if (preferredLocale) {
      locale = preferredLocale;
    }
  }

  // Redirect to locale path
  const url = new URL(`/${locale}${pathname === "/" ? "" : pathname}`, request.url);
  url.search = request.nextUrl.search;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images folder
     * - public folder files
     */
    "/((?!_next/static|_next/image|favicon.ico|images/|public/).*)",
  ],
};
