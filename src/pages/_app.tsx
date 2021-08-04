import type { AppProps } from "next/app";
import Head from "next/head";
import NProgress from "nprogress";
import { useEffect } from "react";

import { useNavigationState } from "src/hooks/useNavigationState";

import 'src/styles/global.css';
import "normalize.css/normalize.css";

const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;

function App({ Component, pageProps }: AppProps): JSX.Element {
  const { isNavigating } = useNavigationState();

  useEffect(() => {
    if (isNavigating) {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [isNavigating]);

  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        {/* Set the maximum-scale value to 0.99 so that Safari can't automatically change scale to 1 */}
        {/* ...so that the device can be detected as a touch device (based on the viewport.scale value) */}
        {/* ...and the user can see the unsupported device warning  */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#da532c" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default App;
