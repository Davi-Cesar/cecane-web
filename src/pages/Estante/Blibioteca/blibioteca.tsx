import Head from "next/head";
import React, { useState } from "react";
import { Shelf } from "../../../components/Shelf";
import shelfs from "../../../data/shelfs.json";
import styles from "./styles.module.scss";

export default function Blibioteca() {
  const [search, setSearch] = useState("");
  const [shelfSearch] = useState(shelfs);

  const lowerCaseSearch = search.toLocaleLowerCase();

  const selection = shelfSearch.filter((s) =>
    s.title.toLocaleLowerCase().includes(lowerCaseSearch)
  ); // se o elemento esta dentro lowerCaseSearch ele coloca no shelfSearch

  return (
    <>
      <Head>
        <title>
          Material de apoio | Centro Colaborador em Alimentação e Nutrição
          Escolar
        </title>
      </Head>
      <div className={styles.Container}>
        <h2>Material de apoio</h2>
        <h3>Material de apoio utilizados e recomendados pelo CECANE/UFRN</h3>
        <div className={styles.search}>
          <img src="/images/search.svg" alt="Buscar" />
          <input
            className={styles.inputSearch}
            type="text"
            placeholder="Buscar Material"
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <div className={styles.Content}>
          {(search === "" &&
            shelfs.map((s) => (
              <Shelf key={s.title} title={s.title} img={s.img} link={s.link} />
            ))) ||
            selection.map((s2) => (
              <Shelf
                key={s2.title}
                title={s2.title}
                img={s2.img}
                link={s2.link}
              />
            ))}
        </div>
      </div>
    </>
  );
}
