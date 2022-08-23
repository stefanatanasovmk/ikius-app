import Link from "next/link";
import footerStyles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={footerStyles.container}>
      <div className={footerStyles.listContainer}>
        <h5 className={footerStyles.smallerHeader}>Blogipostaukset</h5>
        <Link href="#">
          <a className={footerStyles.links}>Linkki postaukseen</a>
        </Link>
        <br />
        <Link href="#">
          <a className={footerStyles.links}>Linkki toiseen postaukseen</a>
        </Link>
      </div>
      <div className={footerStyles.listContainer}>
        <h4 className={footerStyles.biggerHeader}>Alaotsikko</h4>
        <p className={footerStyles.linklessListItem}>Lorem Ipsum</p>
      </div>
    </div>
  );
}
