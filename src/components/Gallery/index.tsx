/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import styles from "./styles.module.scss";

interface GalleryPros {
  img: string;
  title: string;
}

export function Gallery({ img, title }: GalleryPros) {
  return (
    <div className={styles.Gallery}>
      <img src={img} alt={title} />
      <div className={styles.down}>
        <p>{title}</p>
      </div>
    </div>
  );
}
