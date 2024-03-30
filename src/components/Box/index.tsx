import Link from "next/link";
import styles from "./styles.module.scss";

interface BoxPros {
  date?: string;
  description: string;
  title: string;
  link: string;
}

export function Box({ date, description, title, link }: BoxPros) {
  return (
    <>
      <div className={styles.informe}>
        <div className={styles.title}>
          <h3>{title}</h3>
          <p>{date}</p>
        </div>
        <div className={styles.custonInforme}>
          <a type="text">{description}</a>
          <Link legacyBehavior href={link} passHref>
            <button>Saiba mais {">"} </button>
          </Link>
        </div>
      </div>
    </>
  );
}
