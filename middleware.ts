import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = {
}
export function middleware(request:NextRequest){
    const response = NextResponse.next();
    const isAuthenticated = request.cookies.has("isAuthenticated")
     if(!isAuthenticated && request.nextUrl.pathname.match('/((profile|engagement|settings).*)')) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    return response
}

