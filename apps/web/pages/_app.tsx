import { Abril_Fatface } from '@next/font/google';
import type { AppProps } from 'next/app';

import GlobalStyles from '../styles/GlobalStyles';

const abril = Abril_Fatface({
  subsets: ['latin'],
  weight: '400',
});

function MyApp({ Component, pageProps }: AppProps) {
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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
