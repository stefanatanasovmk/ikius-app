import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Footer from "./Footer";

const name = "Stefan Atanasov";
export const siteTitle = "Stefan's blog";

export default function Layout({ children, home }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Stefan Atanasov personal blog page"
          />
          <meta property="og:image" content="images/profile.png" />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <header className={styles.header}>
          {home ? (
            <>
              <h1>Minun blogini</h1>
              <Image
                priority
                src="/images/profile.png"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={name}
              />
              <p className={utilStyles.introductionParagraph}>
                Olen {name}, olen koodari
              </p>
            </>
          ) : (
            <></>
          )}
        </header>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
