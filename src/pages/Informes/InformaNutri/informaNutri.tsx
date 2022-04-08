import Head from "next/head";
import React from "react";
import styles from "../styles.module.scss";
import { Informes } from "../../../components/Informes";
import informesNutri from "../../../data/informes_nutri.json";

export default function informaNutri() {
  return (
    <>
      <Head>
        <title>
          InformaNutri | Centro Colaborador em Alimentação e Nutrição Escolar
        </title>
      </Head>
      <div className={styles.Container}>
        <h2>InformaNutri</h2>
        {informesNutri.map((i) => (
          <Informes
            key={i.title}
            title={i.title}
            date={i.date}
            description={i.description}
            link={i.link}
            linkSecundario={i.linkSecundario}
          />
        ))}
      </div>
    </>
  );
}
