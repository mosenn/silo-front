import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("authToken")?.value;
  const requestPath = req.nextUrl.pathname;
  if (requestPath.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
  }

  if (requestPath.startsWith("/panel-user")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
  }

  if (requestPath.startsWith("/login")) {
    if (!token) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/admin", "/panel-user", "/login"],
};
