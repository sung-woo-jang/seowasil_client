import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const productsArray = request.url.split('/');
    if (productsArray[productsArray.length - 1] === 'products') {
        return NextResponse.redirect(new URL('/', request.url));
    }
    if (
        request.url.includes('/products/add') &&
        request.cookies.get('Authentication') === undefined
    ) {
        return NextResponse.redirect(new URL('/', request.url));
    }
}

export const config = {
    matcher: ['/products/add', '/products'],
};
