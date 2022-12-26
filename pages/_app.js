import Head from "next/head";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import "highlight.js/styles/nord.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Johan_DEV</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis deserunt"
        />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
