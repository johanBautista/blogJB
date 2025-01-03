import Head from "next/head";
import Layout from "../components/layout/Layout";
import "highlight.js/styles/nord.css";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Johan Bautista DEV</title>
        <meta
          name="description"
          content="Protfolio personal Johan Bautista frontend developer, javascript, web"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon1.ico" />
      </Head>
      <Layout>
        <div className="container">
          <Component {...pageProps} />
        </div>
      </Layout>
    </>
  );
}
