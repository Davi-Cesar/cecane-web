import Head from "next/head";
import React from "react";
import styles from "../styles.module.scss";

import informesAgriculturaFamiliar from "../../../data/informe_agricultura_familiar.json"

import { Informes } from "../../../components/Informes";

export default function informeAgriculturaFamiliar() {
  return (
    <>
      <Head>
        <title>
            Informe Agricultura Familiar e PNAE | Centro Colaborador em Alimentação e Nutrição Escolar
        </title>
      </Head>
      <div className={styles.Container}>
        <h2>Informe Agricultura Familiar e PNAE</h2>
        {informesAgriculturaFamiliar.map((i) => (
          <Informes
            key={i.title}
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
