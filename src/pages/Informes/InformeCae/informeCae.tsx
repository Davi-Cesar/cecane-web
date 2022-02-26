import Head from "next/head";
import React from "react";
import { Informes } from "../../../components/Informes";
import styles from "../styles.module.scss";

export const informesCae = [
  {
    title: "Informe CAE 08/2021",
    description:
      "O Informe CAE 08/2021 traz informações sobre o Regimento interno do CAE,  e orienta  deixá-lo atualizado por dois motivos. primeiro porque atualmente há uma nova Resolução (Resolução MEC/FNDE nº 6, de 8 de maio de 2020) para orientar a execução do PNAE e é necessário que o regimento do CAE esteja ajustado ao que diz a nova Resolução. E, segundo, porque com o tempo e as novas configurações dos Conselhos, é importante reavaliar as regras de funcionamento do colegiado.",
    date: "16 de dezembro de 2021",
    link: "https://drive.google.com/file/d/1odElm08TOOpO6Ine5NNAppTUOzwmfBPQ/view?usp=sharing",
  },
  {
    title: "Informe CAE 07/2021",
    description:
      "O Informe CAE 07/2021 traz dicas para que você possa buscar informação e aprender um pouco mais sobre o PNAE, uma forma eficaz de um conselho de controle social se fortalecer e ser respeitado é saber o que tem que fazer, conhecer seu papel e atuar com segurança.",
    date: "18 de outubro de 2021",
    link: "https://drive.google.com/file/d/1ncFIM5GesQakejUVnBaj8s9CjgrRlO_S/view?usp=sharing",
  },
  {
    title: "Informe CAE 05/2021",
    description:
      "O Informe CAE 05/2021  aborda a importância do Plano de Ação para os CAEs e traz algumas dicas importantes para elaboração do mesmo.",
    date: "21 de maio de 2021",
    link: "https://drive.google.com/file/d/1d-6IzYFVoTIm_z-4ljxo2IyRznYhK_FT/view?usp=sharing",
  },
  {
    title: "Informe CAE 04/2021",
    description:
      "O Informe CAE 04/2021 traz dicas importantes sobre o Conselho de Alimentação Escolar possa preparar o Plano de Ação. O documento indica a atenção no Plano de Ação, uma das atribuições do CAE.",
    date: "11 de maio de 2021",
    link: "https://drive.google.com/file/d/1FI84fmOKkqYxMvza8zy028LaQsvTc8r_/view?usp=sharing",
  },
  {
    title: "Informe CAE 03/2021",
    description:
      "O Informe CAE 03/2021 traz informações importantes sobre a eleição e cadastro dos conselhos de alimentação escolar. O documento indica como saber se o mandato está a vencer, aborda a possibilidade de recondução de membros, o que fazer depois das eleições e esclarece duas relevantes novidades da resolução Nº 06, de 08 de Maio de 2020 relacionadas à composição do CAE.",
    date: "05 de março de 2021",
    link: "https://drive.google.com/file/d/1XmwkGxHz_ChGepyEKQuan0lvxXyoK9vr/view?usp=sharing",
  },
  {
    title: "Informe CAE 02/2021",
    description:
      "O Informe CAE nº 2/2021 aborda sobre a prestação de contas do PNAE e traz informações acerca do parecer conclusivo do Conselho de Alimentação Escolar. Quantas prestações o Conselho deverá avaliar em 2021? Qual o prazo para avaliar e enviar o parecer conclusivo? O que fazer com o saldo remanescente na conta bancária da entidade executora? As respostas dessas e outras dúvidas você pode ter acessando.",
    date: "02 de março de 2021",
    link: "https://drive.google.com/file/d/1fU0kTy3gFNNV4468Z_xI94iPd7OBH7Yw/view?usp=sharing",
  },
  {
    title: "Informe CAE 01/2021",
    description:
      "O informe CAE nº 1/2021 objetiva orientar sobre as atribuições do Conselho de Alimentação Escolar no início do ano letivo de 2021. O documento aborda sobre as resoluções do programa e sobre a distribuição de kits da alimentação escolar. Você pode acessar ou baixar o documento na íntegra através do site do CECANE/UFRN.",
    date: "02 de março de 2021",
    link: "https://drive.google.com/file/d/1Q-ySaBxdMYgskmvuiD8FNqA_6eE2ZoWU/view?usp=sharing",
  },
];
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
