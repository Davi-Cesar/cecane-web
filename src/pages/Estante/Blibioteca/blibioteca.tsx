import Head from "next/head";
import React, { useState } from "react";
import { Shelf } from "../../../components/Shelf";
import styles from "./styles.module.scss";

const shelfs = [
  {
    img: "/images/Estante/Livro_01.png",
    title: "Guia Alimentar para a População Brasileira",
    link: "https://bvsms.saude.gov.br/bvs/publicacoes/guia_alimentar_populacao_brasileira_2ed.pdf",
  },
  {
    img: "/images/Estante/Livro_02.png",
    title:
      "Cartilha de orientações para garantia da Alimentação Escolar em tempos de COVID-19",
    link: "",
  },
  {
    img: "/images/Estante/Livro_03.png",
    title: "Caderno de Legislação 2021",
    link: "",
  },
  {
    img: "/images/Estante/Livro_04.png",
    title: "Orientações para Eleição dos conselheiros do CAE",
    link: "",
  },
  {
    img: "/images/Estante/Livro_05.png",
    title: "Política Nacional de Alimentação e Nutrição",
    link: "",
  },
  {
    img: "/images/Estante/Livro_06.png",
    title: "Guia Alimentar para Crianças Brasileiras menores de 2 anos",
    link: "",
  },
  {
    img: "/images/Estante/Livro_07.png",
    title:
      "Marco de Referência de Educação Alimentar e Nutricional para as Políticas Públicas",
    link: "",
  },
  {
    img: "/images/Estante/Livro_08.png",
    title: "Alimentação escolar indígena e de comunidades tradicionais",
    link: "",
  },
  {
    img: "/images/Estante/Livro_09.png",
    title:
      "Cartilha de Orientação ao Agricultor Familiar (prevenção no meio rural ao novo coronavírus)",
    link: "",
  },
  {
    img: "/images/Estante/Livro_10.png",
    title:
      "Cartilha de Recomendações para a execução do PNAE no retorno presencial às aulas",
    link: "",
  },
  {
    img: "/images/Estante/Livro_11.png",
    title:
      "Guia educativo para alimentação saudável para pessoas com deficiência visual",
    link: "",
  },
  {
    img: "/images/Estante/Livro_12.png",
    title:
      "Orientações para execução do PANE durante a pandemia de coronavírus (COVID-19)",
    link: "",
  },
  {
    img: "/images/Estante/Livro_13.png",
    title: "Cartilha para conselheiros do PNAE 2017",
    link: "",
  },
];

export default function Blibioteca() {
  const [search, setSearch] = useState("");
  const [shelfSearch] = useState(shelfs);

  const lowerSearch = search.toLocaleLowerCase();

  const selection = shelfSearch.filter((s) =>
    s.title.toLocaleLowerCase().includes(lowerSearch)
  );

  return (
    <>
      <Head>
        <title>Blibioteca</title>
      </Head>
      <div className={styles.Container}>
        <h2>Blibioteca</h2>
        <h3>Materiais utilizados e recomendados pelo CECANE/UFRN</h3>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Buscar..."
            onChange={(event) => setSearch(event.target.value)}
          />
          <img src="/images/search.svg" alt="Buscar" />
        </div>
        <div className={styles.Content}>
          {(search == "" &&
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
