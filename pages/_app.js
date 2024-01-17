import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Head>
        <title>EnqDb</title>
        <meta
          name="description"
          content="The ultimate way to get more website traffic and grow your online business."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
