import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  const protectedRoutes = ["/home"];
  const authRoutes = ["/login"];

  const token = req.cookies.get("__Secure-next-auth.session-token")?.value 
             || req.cookies.get("next-auth.session-token")?.value;

  if (protectedRoutes.includes(pathname) && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (authRoutes.includes(pathname) && token) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/home", "/login"],
};
