import "@/styles/globals.css";
import Head from "next/head";
import Logo from "../../public/img/synergix.ico";

import "@fortawesome/fontawesome-free/css/all.min.css";
// import '../../public/vendor/fontawesome-free/css/all.min.css';
import "../../public/vendor/boxicons-2.1.4/css/boxicons.min.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Monitoring Dashboard</title>
        <link rel="icon" type="image/x-icon" href={Logo.src} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
