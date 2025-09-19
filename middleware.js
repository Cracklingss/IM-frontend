import { NextResponse } from "next/server";

export function middleware(request){
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  const protectedRoutes = ["/home"];
  const authRoutes = ["/login"];

  if(!token && protectedRoutes.includes(pathname)){
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if(token && authRoutes.includes(pathname)){
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [ "/home", "/login" ]
}