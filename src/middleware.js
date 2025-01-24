import { NextResponse } from "next/server";

const user = false;

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith("/about"))
    return NextResponse.rewrite(new URL("/about/mission", request.url));
}

// export const config = {
//   matcher: "/dashboard",
// };

// Topics are concepts:
// next()
// redirect()
// rewrite()
// startsWith
// cookies.get
// cors
