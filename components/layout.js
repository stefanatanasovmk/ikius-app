import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Footer from "../pages/footer";

const name = "Stefan Atanasov";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="My personal blog page" />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
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
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={name}
              />
              <p className={utilStyles.introductionParagraph}>
                Olen Stefan Atansov, olen koodari
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
