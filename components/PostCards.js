import postCardStyles from "../styles/PostCards.module.css";
import Image from "next/image";
import Link from "next/link";
import Date from "./date";

export default function PostCards({ id, date, title, image }) {
  return (
    <div className={postCardStyles.blogPost} key={id}>
      <Image
        width="100%"
        height="150%"
        src={image}
        alt={title}
        className={postCardStyles.blogThumbnail}
      />
      <div className={postCardStyles.titleAndDateContainer}>
        <Link href={`/posts/${id}`}>
          <a className={postCardStyles.blogTitle}>{title}</a>
        </Link>
        <br />
        <small className={postCardStyles.blogDate}>
          <Date dateString={date}></Date>
        </small>
      </div>
    </div>
  );
}
