import { NextRequest, NextFetchEvent, NextResponse } from "next/server";

export function middleware(req: NextRequest, event: NextFetchEvent) {
  //console.log(req.cookies);
  const cookies = req.cookies;
  console.log(req.url);
  // if (!cookies.get("Authorization")) {
  //   return NextResponse.redirect("/start/signin");
  // }
}

// write / edit / profile 페이지는 접근 불가
