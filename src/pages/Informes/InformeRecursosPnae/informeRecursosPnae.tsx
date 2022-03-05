import Head from "next/head";
import React from "react";
import { Informes } from "../../../components/Informes";
import styles from "../styles.module.scss";
import informesRecursos from "../../../data/informes_recursos.json";

export default function informeRecursosPnae() {
  return (
    <>
      <Head>
        <title>Recursos PNAE</title>
      </Head>
      <div className={styles.Container}>
        <h2>Recursos PNAE</h2>
        {informesRecursos.map((i) => (
          <Informes
            key={i.link}
            title={i.title}
            date={i.date}
            description={i.description}
            link={i.link}
          />
        ))}
      </div>
    </>
  );
}
