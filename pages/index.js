import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import postCardStyles from "../styles/PostCards.module.css";
import { getSortedPostsData } from "../lib/posts";
import PostCards from "./PostCards";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}></section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <div className={postCardStyles.container}>
          {allPostsData.map(({ id, date, title, image }) => (
            <PostCards
              id={id}
              date={date}
              title={title}
              image={image}
              key={id}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}
