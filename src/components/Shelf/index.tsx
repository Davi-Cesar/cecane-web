import React from "react";
import styles from "./styles.module.scss";

interface ShelfPros {
  img: string;
  title: string;
  link: string;
}

export function Shelf({ img, title, link }: ShelfPros) {
  return (
    <div className={styles.shelf}>
      <img src={img} alt={title} />
      <p>{title}</p>
      <div className={styles.shelfFooter}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button>Download</button>
        </a>
      </div>
    </div>
  );
}
