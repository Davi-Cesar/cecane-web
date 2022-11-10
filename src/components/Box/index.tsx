/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import { useState } from "react";
import Modal from "react-modal";
import styles from "./styles.module.scss";

interface BoxPros {
  date?: string;
  description: string;
  title: string;
  link: string;
}

export function Box({ date, description, title }: BoxPros) {
  return (
    <>
      <div className={styles.informe}>
        <div className={styles.title}>
          <h3>{title}</h3>
          <p>{date}</p>
        </div>
        <div className={styles.custonInforme}>
          <a type="text">{description}</a>
          <Link href="/Noticias/noticias">
            <button>SAIBA MAIS</button>
          </Link>
        </div>
      </div>
    </>
  );
}
