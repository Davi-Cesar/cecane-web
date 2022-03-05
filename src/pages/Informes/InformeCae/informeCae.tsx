import Head from "next/head";
import React from "react";
import { Informes } from "../../../components/Informes";
import styles from "../styles.module.scss";

import informesCae from "../../../data/informes_cae.json";

export default function informeCae() {
  return (
    <>
      <Head>
        <title>Informe CAE</title>
      </Head>
      <div className={styles.Container}>
        <h2>Informe CAE</h2>
        {informesCae.map((i) => (
          <Informes
            key={i.title}
            title={i.title}
            date={i.date}
            description={i.description}
            link={i.link}
            //linkSecundario={i.linkSecundario}
          />
        ))}
      </div>
    </>
  );
}
