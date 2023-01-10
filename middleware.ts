import { gql } from '@apollo/client';
import { nexoClient } from 'lib/api/client';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const cookies = req.cookies.get('access_token');

  console.log({ cookies });

  if (path.startsWith('/profile')) {
    try {
      const res = await nexoClient.query({
        query: gql`
          query getUser {
            getMyUser {
              email
              firstName
              lastName
            }
          }
        `,
      });
      console.log({ res });
      return NextResponse.next();
    } catch (error) {
      // console.log('error', error);
      return redirectToHome(req);
    }
  }

  return NextResponse.next();
}

function redirectToHome(req: NextRequest) {
  const url = req.nextUrl.clone();
  url.pathname = '/';
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/profile', '/new-profile'],
};
