import Head from "next/head";
import React from "react";
import styles from "../styles.module.scss";
import { Informes } from "../../../components/Informes";

export const informesNutri = [
  {
    title: "InformaNutri 02/2022",
    description:
      "O InformaNutri 02/2022 traz informações instrutivas e a ferramenta IQ COSAN para as demais etapas e modalidades de ensino (Pré-escola, Ensino Fundamental, Ensino Médio e Educação de Jovens e Adultos) estão disponíveis em sua InformaNutri n° 2/2022 página da internet.",
    date: "18 de fevereiro de 2022",
    link: "https://drive.google.com/file/d/10GIEHTC5BH-kucoLzU5niJJX424QqQfN/view?usp=sharing",
  },
  {
    title: "InformaNutri 01/2022",
    description:
      "O InformaNutri 01/2022 traz informações sobre o período de execução de 2022 do PNAE, para auxiliar vocês, que possuem papel fundamental na gestão do Programa, reforçamos a necessidade de elaborar o Plano Anual de Trabalho detalhado, em atendimento a Resolução do CFN no 465/2010.",
    date: "10 de fevereiro de 2022",
    link: "https://drive.google.com/file/d/1agXwBvI_Ce7KUHtrEpwBroahBTqLPOlm/view?usp=sharing",
  },
  {
    title: "InformaNutri 12/2021",
    description:
      "O InformaNutri 12/2021 traz informações sobre a ferramenta IQ COSAN, que serve para creches e já está disponível em sua página da internet. Para acessar a ferramenta IQ COSAN e os materiais de apoio: ",
    date: "21 de julho de 2021",
    link: "https://drive.google.com/file/d/1O_buN5JeIQhpauxi2SiDK72NAZcJnf3S/view?usp=sharing",
    linkSecundario:
      "https://drive.google.com/file/d/1T4hm0xhya3jBw7VbTKioiqJFAca6mPOf/view?usp=sharing",
  },
  {
    title: "InformaNutri 11/2021",
    description:
      "O InformaNutri 11/2021 traz informações sobre o encontro FNDE que promoverá, no dia 30 de junho, das 9h às 17h, o Encontro Técnico Nacional para Nutricionistas do PNAE – 2021 a ser realizado virtualmente.",
    date: "02 de junho de 2021",
    link: "https://cecane.ccs.ufrn.br/wp-content/uploads/2021/06/InformaNutri-11.pdf",
  },
  {
    title: "InformaNutri 10/2021",
    description:
      "O InformaNutri 10/2021 ressalta aos nutricionistas que o uso de máscaras faciais continua sendo imprescindível para diminuir a disseminação do novo coronavírus e, caso haja a possibilidade, que essas máscaras sejam do tipo PFF2/N-95 ou descartáveis cirúrgicas com 3 camadas.",
    date: "06 de maio de 2021",
    link: "https://drive.google.com/file/d/146jdX_2GqbEyKTN-Ak7slIivhDZ3bwBm/view",
  },
  {
    title: "InformaNutri 08/2021",
    description:
      "O InformaNutri 08/2021 trata sobre o Questionário de Perdas e Desperdício de Alimentos (PDA), Elaboraram um formulário para que você informar sobre os processos de desperdício no ambiente escolar sob sua responsabilidade técnica.",
    date: "31 de março de 2021",
    link: "https://drive.google.com/file/d/1I-Lkao5Bu7P2005a2B89LwTz2wy66gkH/view",
  },
  {
    title: "InformaNutri 07/2021",
    description:
      "O InformaNutri 07/2021 traz informações importantes sobre a alimentação e nutrição, O documento indica sete vídeos para o esclarecimento de novas alterações sobre a agricultura familiar",
    date: "31 de março de 2021",
    link: "https://drive.google.com/file/d/1-hJ7iRyLsVm5aqUCczmVCb3tAMx8mEe2/view",
  },
  {
    title: "InformaNutri 06/2021",
    description:
      "O InformaNutri 06/2021 trata-se sobre mais um Encontro Técnico Virtual para Nutricionistas do PNAE – 2021, no dia 29 de abril, das 9h às 17h, destinado exclusivamente para nutricionistas da rede federal, vinculados ao Programa.",
    date: "31 de fevereiro de 2021",
    link: "https://drive.google.com/file/d/1zMwIYNTAbCOSJkF2OIwNJ8px7fJVKOwr/view",
  },
  {
    title: "InformaNutri 02/2021",
    description:
      "O InformaNutri de hoje trata sobre a permissão da distribuição de kits da alimentação escolar e fornecimento de refeições para estudantes da rede pública de ensino que ainda permanecem com as aulas presenciais suspensas.",
    date: "12 de fevereiro de 2021",
    link: "https://drive.google.com/file/d/1wHt1eJgRGQjY2M-H7bvtFY2GY_YOVj-q/view",
  },
];

export default function informaNutri() {
  return (
    <>
      <Head>
        <title>InformaNutri</title>
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
