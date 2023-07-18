import { Abril_Fatface } from '@next/font/google';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

import { Nav } from '../components';
import AuthContextProvider from '../contexts/auth';
import NavContextStateProvider from '../contexts/nav';
import GlobalStyles from '../styles/GlobalStyles';

const abril = Abril_Fatface({
  subsets: ['latin'],
  weight: '400',
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --header-font: ${abril.style.fontFamily};
            --copy-font: aktiv-grotesk;
          }
        `}
      </style>
      <GlobalStyles />
      <SessionProvider session={session}>
        <AuthContextProvider>
          <NavContextStateProvider>
            <Nav />
            <Component {...pageProps} />
          </NavContextStateProvider>
        </AuthContextProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
