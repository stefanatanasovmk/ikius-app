import Layout from "../../components/layout";
import {
  getAllPostIds,
  getPostData,
  getSortedPostsData,
} from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";
import postStyle from "../../styles/PostStyle.module.css";
import postCardStyles from "../../styles/PostCards.module.css";
import PostCards from "../postCards";
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const allPostsData = getSortedPostsData();
  return {
    props: {
      postData,
      allPostsData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData, allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className={postStyle.topContainer}>
        <div className={postStyle.imageAndNameContainer}>
          <Link href="/">
            <a>
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height="30%"
                width="30%"
                alt="Stefan Atansov"
              />
            </a>
          </Link>
          <Link href="/">
            <a className={postStyle.authorName}>Stefan Atanasov</a>
          </Link>
        </div>
        <div className={postStyle.dateContainer}>
          <small className={postStyle.date}>
            <Date dateString={postData.date} />
          </small>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "30vh",
          position: "relative",
          left: "0px",
          top: "0px",
        }}
      >
        <Image src={postData.image} layout="fill" />
      </div>
      <Link href="/">
        <a>← Back to home</a>
      </Link>
      <article className={postStyle.articleContainer}>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <div className={postCardStyles.container}>
        {allPostsData.map(({ id, date, title, image }) => (
          <PostCards id={id} date={date} title={title} image={image} key={id} />
        ))}
      </div>
    </Layout>
  );
}
