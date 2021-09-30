import "../css/index.css";
import Head from "next/head";

// pages/_app.js

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <Head>
        <title>Next.js Starter Tailwind</title>
        <meta
          name="Description"
          content="A Next.js starter styled using Tailwind CSS."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
