import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  // Unauthenticated
  if (!req.auth) {
    const url = req.url.replace(req.nextUrl.pathname, `/?callbackUrl=${req.nextUrl.pathname}`);
    return Response.redirect(url);
  }
  // Authenticated
  if (req.auth && req.nextUrl.pathname === "/") {
    const searchParams = req.nextUrl.searchParams;
    const callbackUrl = searchParams.get("callbackUrl") ?? "/dashboard";
    return NextResponse.redirect(new URL(callbackUrl, req.url));
  }
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico).*)"],
};
