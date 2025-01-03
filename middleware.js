import { NextResponse } from "next/server";
import { checkToken } from "./lib/auth";
import { cookies } from "next/headers";

let tokenCache = {
    isValid: false,
    expiresAt: null,
};

export async function middleware(request) {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth-token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const now = Date.now();

  if (tokenCache.isValid && tokenCache.expiresAt > now) {
    return NextResponse.next();
  }

  const isValidToken = await checkToken(token);

  if (!isValidToken) {
    cookieStore.delete('auth-token');
    return NextResponse.redirect(new URL('/login', request.url));
  }

  tokenCache.isValid = true;
  tokenCache.expiresAt = now + 120 * 60 * 1000; 

  return NextResponse.next();
}

export const config = {
  matcher: "/home/:path*",
};
