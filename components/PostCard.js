import postCardStyles from "../styles/PostCard.module.css";
import Image from "next/image";
import Link from "next/link";
import Date from "./date";

export default function PostCard({ id, date, title, image }) {
  return (
    <div className={postCardStyles.blogPost} key={id}>
      <Link href={`/posts/${id}`}>
        <a className={postCardStyles.thumbnailContainer}>
          <Image
            layout="fill"
            src={image}
            alt={title}
            className={postCardStyles.thumbnail}
          />
        </a>
      </Link>

      <div className={postCardStyles.titleAndDateContainer}>
        <Link href={`/posts/${id}`}>
          <a className={postCardStyles.postTitle}>{title}</a>
        </Link>
        <br />
        <small className={postCardStyles.postDate}>
          <Date dateString={date}></Date>
        </small>
      </div>
    </div>
  );
}
