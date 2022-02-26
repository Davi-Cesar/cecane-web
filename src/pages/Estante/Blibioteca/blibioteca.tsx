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
    link: "https://drive.google.com/file/d/1QoqtDc5M0ZQSQ6FXfyK6txfL0gz78EA7/view?usp=sharing",
  },
  {
    img: "/images/Estante/Livro_03.png",
    title: "Caderno de Legislação 2021",
    link: "https://drive.google.com/file/d/1SAs9qlMg2-vDT6dgW8ZR9TF4vEMFJ4nP/view?usp=sharing",
  },
  {
    img: "/images/Estante/Livro_04.png",
    title: "Orientações para Eleição dos conselheiros do CAE",
    link: "https://drive.google.com/file/d/1bpSiy4fbikvMmTHzibdbQSmKJAhM8ifK/view?usp=sharing",
  },
  {
    img: "/images/Estante/Livro_05.png",
    title: "Política Nacional de Alimentação e Nutrição",
    link: "http://bvsms.saude.gov.br/bvs/publicacoes/politica_nacional_alimentacao_nutricao.pdf",
  },
  {
    img: "/images/Estante/Livro_06.png",
    title: "Guia Alimentar para Crianças Brasileiras menores de 2 anos",
    link: "https://drive.google.com/file/d/1Cg0eXLwLL8xmLk6QONLh1X05OJZqA0rF/view?usp=sharing",
  },
  {
    img: "/images/Estante/Livro_07.png",
    title:
      "Marco de Referência de Educação Alimentar e Nutricional para as Políticas Públicas",
    link: "https://drive.google.com/file/d/1G61gGG57iYoavACepifcaInWebxwqFBG/view?usp=sharing",
  },
  {
    img: "/images/Estante/Livro_08.png",
    title: "Alimentação escolar indígena e de comunidades tradicionais",
    link: "https://drive.google.com/file/d/1j5f18KgI9F9NnZUMTRHglp2rVtHP8E6z/view?usp=sharing",
  },
  {
    img: "/images/Estante/Livro_09.png",
    title:
      "Cartilha de Orientação ao Agricultor Familiar (prevenção no meio rural ao novo coronavírus)",
    link: "https://drive.google.com/file/d/1UGXHq96WT1IeNE8g0lytG7XSKiqs1-tu/view?usp=sharing",
  },
  {
    img: "/images/Estante/Livro_10.png",
    title:
      "Cartilha de Recomendações para a execução do PNAE no retorno presencial às aulas",
    link: "https://drive.google.com/file/d/1LrfXBV5K0LLTBPRJ1aRcC5m4RpbnKOZJ/view?usp=sharing",
  },
  {
    img: "/images/Estante/Livro_11.png",
    title:
      "Guia educativo para alimentação saudável para pessoas com deficiência visual",
    link: "https://drive.google.com/file/d/1X51Mo5PrBzWECCWmdJPFEcQB4mUlyXVe/view?usp=sharing",
  },
  {
    img: "/images/Estante/Livro_12.png",
    title:
      "Orientações para execução do PANE durante a pandemia de coronavírus (COVID-19)",
    link: "https://drive.google.com/file/d/1Hna28a5nGaQycWCCyXH3G7RnFec6rVvy/view?usp=sharing",
  },
  {
    img: "/images/Estante/Livro_13.png",
    title: "Cartilha para conselheiros do PNAE 2017",
    link: "https://drive.google.com/file/d/1I74HZz_JQVhOe46x6MMbR8SWOZhOxLVg/view?usp=sharing",
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
