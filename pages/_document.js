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
          <meta property="og:url" content="https://www.example.com" />
          <meta property="og:title" content="Open Graph Title" />
          <meta property="og:description" content="Open Graph Description" />
          <meta
            property="og:image"
            content="https://www.example.com/og-image.jpg"
          />
          <meta property="og:site_name" content="YourSiteName" />
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
