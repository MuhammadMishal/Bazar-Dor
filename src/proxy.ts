import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/lib/auth";

export async function proxy(request: NextRequest) {
  console.log("proxy called", request.nextUrl.pathname);
  const session = await auth.api.getSession({
    headers: request.headers,
  });
  if (!session?.user) {
    const signInUrl = new URL("/signin", request.url);

    signInUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/product/:path*"],
};
