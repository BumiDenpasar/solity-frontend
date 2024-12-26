import { NextResponse } from 'next/server'
import { getUserData } from './lib/auth';

 
export async function middleware(request) {
    const token = request.cookies.get('auth-token')?.value;
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
      }

    const isValidToken = await getUserData(token);


    if(!isValidToken){
        response.cookies.delete('auth-token');
        return NextResponse.redirect(new URL('/login', request.url))
    }

  return NextResponse.next();
}
 
export const config = {
  matcher: '/home/:path*',
}