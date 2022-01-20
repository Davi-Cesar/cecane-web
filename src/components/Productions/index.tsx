/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import styles from "./styles.module.scss";

interface ProductionsPros {
  img: string;
  title: string;
  description: string;
  link: string;
}

export function Productions({
  img,
  title,
  description,
  link,
}: ProductionsPros) {
  return (
    <div className={styles.Productions}>
      <img src={img} alt={title} />
      <div className={styles.ProductionsFooter}>
        <h5>{title}</h5>
        <p>{description}</p>
        <Link href={link}>
          <button>Dowload</button>
        </Link>
      </div>
    </div>
  );
}
