import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta property="og:url" content="https://ikius-app.vercel.app/" />
          <meta property="og:title" content="Stefan's blog" />
          <meta
            property="og:description"
            content="Stefan Atanasov personal blog page"
          />
          <meta property="og:image" content="/image/profile.png" />
          <meta property="og:site_name" content="Stefan's Blog" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@site" />
          <meta name="twitter:creator" content="@handle" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
