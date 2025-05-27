import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { IUser } from "./interface/user.interface";

export default async function middleware(req: NextRequest) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value || "";

    if (!token) {
      return NextResponse.redirect(new URL("/auth/signin", req.nextUrl));
    }

    const user: IUser = jwtDecode(token);

    if (user.role !== "GUEST") {
      return NextResponse.redirect(new URL("/auth/signin", req.nextUrl));
    }

    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL("/auth/signin", req.nextUrl));
  }
}

export const config = {
  matcher: ["/"],
};
