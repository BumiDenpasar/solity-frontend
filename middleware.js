import { NextResponse } from 'next/server'
import { checkToken } from './lib/auth';
import { cookies } from 'next/headers';

 
export async function middleware(request) {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth-token')?.value;

    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
      }

    const isValidToken = await checkToken(token);


    if(!isValidToken){
        cookieStore.delete('auth-token'); 
        return NextResponse.redirect(new URL('/login', request.url))
    }

  return NextResponse.next();
}
 
export const config = {
  matcher: '/home/:path*',
}