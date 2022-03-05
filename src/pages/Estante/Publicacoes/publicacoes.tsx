/* eslint-disable @next/next/no-document-import-in-page */
/* eslint-disable @next/next/no-title-in-document-head */

import Head from "next/head";
import { Productions } from "../../../components/Productions";
import styles from "./styles.module.scss";

const productions = [
  {
    img: "/images/Produções/Produção-01.png",
    title: "Capítulo de livro publicado pelo CECANE/UFRN",
    description:
      "Atividades de Educação Alimentar e Nutricional no âmbito do Programa nacional de Alimentação Escolar (PNAE) no Rio Grande do Norte",
    link: "https://drive.google.com/file/d/1RBalw7ze1C2822sg8Ev6ZbnJ0IDAYvwU/view?usp=sharing",
  },
  {
    img: "/images/Produções/Produção-02.png",
    title: "Artigo publicado em revista científica",
    description:
      "Alimentação escolar em tempos de COVID-19: o papel do centro colaborador em alimentação e nutrição no estado do Rio Grande do Norte.",
    link: "https://drive.google.com/file/d/1xPwBXZ4bgw3P6LtJ4of0FR6nUp-vMBWm/view?usp=sharing",
  },
  {
    img: "/images/Produções/Produção-03.png",
    title: "Capítulo de livro publicado pelo CECANE/UFRN",
    description:
      "Desafios para equilibrar demanda e oferta de alimentos: análise da execução do PNAE em uma região semiárida do Brasil",
    link: "https://revistas.ufpr.br/made/article/view/73174",
  },
];

export default function Publicacoes() {
  const title = "Publicações/Produções";
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.Container}>
        <h2>{title}</h2>
        <div className={styles.Content}>
          <p>Tenha acesso Publicações e Produções da CECANE/UFRN, abaixo:</p>

          {productions.map((p) => (
            <Productions
              img={p.img}
              key={p.img}
              title={p.title}
              description={p.description}
              link={p.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}
