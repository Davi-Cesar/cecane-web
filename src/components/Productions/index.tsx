/* eslint-disable @next/next/link-passhref */
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
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button>Dowload</button>
        </a>
      </div>
    </div>
  );
}
