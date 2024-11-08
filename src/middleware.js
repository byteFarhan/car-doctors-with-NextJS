import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware = (request) => {
  const token = cookies(request).get("next-auth.session-token");
  //   console.log(token);
  const pathname = request?.nextUrl?.pathname;
  if (!token) {
    return NextResponse.redirect(
      new URL(`/login?_redirect=${pathname}`, request?.url)
    );
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    "/services/update/:path*",
    "/add-service/:path*",
    "/my-services/:path*",
    "/my-bookings/:path*",
    "/checkout/:path*",
  ],
};
