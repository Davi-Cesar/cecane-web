import Head from "next/head";
import React, { useState } from "react";
import { News } from "../../components/News";
import styles from "./styles.module.scss";

export const news = [
  {
    title: "Encontro de Formação CAE",
    description:
      "Passando para informar que nos dias 23 e 24 desse mês nossa equipe do CECANE UFRN estará realizando o 1º Encontro de Formação para Conselheiros(as) da Alimentação Escolar deste ano! O Encontro será ONLINE e você já pode se inscrever. Confira abaixo as informações:  ",
    date: "05 de maio de 2022",
    paragraph:
      "As inscrições são gratuitas, limitadas e acontecerão por meio do nosso e-mail (cecaneufrn@gmail.com). Assim, basta você enviar para nosso endereço as seguintes informações: nome completo, CPF e o município do CAE onde atua. Nosso público-alvo são os(as) conselheiros(as) que atuam em Entidades Executoras no estado do Rio Grande do Norte (conselheiros(as) de outros estados entrarão na fila de espera).",

    textLink: "Card da Programação",
    link: "https://drive.google.com/file/d/1MqCjfzcGjRNovhLCs3csQZFFAtxccfck/view?usp=sharing",
  },
  {
    title: "Planejamento das Compras Públicas do PNAE",
    description:
      "Olá, pessoal! É com grande alegria que hoje estamos divulgando a nossa Formação para Atores Sociais envolvidos no Planejamento das Compras Públicas do PNAE! Esta ação nasceu da necessidade de capacitação dos envolvidos no planejamento das compras dos gêneros alimentícios adquiridos com recursos do Programa! Para participar da formação, você poderá optar por uma das 2 turmas disponíveis. Abaixo segue os dias de cada uma delas: ",
    date: "09 de março de 2022",
    paragraph:
      "1ª Turma: 16/03 – 13hs até 17hs 17/03 – 8hs ate 12hs e 13hs até 17hs 18/03 – 8hs as 12hs ",
    paragraphTwo:
      "2ª Turma: 21/03 – 13hs até 17hs 22/03 – 8hs até 12hs e 13hs até 17hs 23/03 – 8hs as 12hs ",
    paragraphTree:
      "Os encontros serão conduzidos pelas nossas agentes Gerlane Bezerra e Joana Barbosa e para você se inscrever basta clicar em um dos links abaixo:",
    textLinkSecundario: "1ª Turma:",
    linkSecundario: "https://forms.gle/a8xxrH5BgnmRFcMAA",
    textLinkSecundaryTwo: "2ª Turma:",
    linkSecundaryTwo: "https://forms.gle/QnejZDqTXwZCTGtD6",
  },
  {
    title: "O CECANE/UFRN lançou novo edital",
    description:
      "O edital para processo seletivo para compor sua equipe de trabalho para o ano de 2022. As inscrições serão realizadas exclusivamente pela internet, pelo endereço eletrônico cecaneufrn@gmail.com, durante o período de 18 a 24 de janeiro de 2022. Para acessar o edital na íntegra, basta clicar no link.",
    date: "18 de janeiro de 2022",
    link: "https://sigaa.ufrn.br/sigaa/public/departamento/portal.jsf?id=203",
  },
  {
    title: "Encontro Técnico para Nutricionistas do PNAE – 2021",
    description:
      "O FNDE promoverá no dia 30 de Junho, das 9h às 17h o Encontro Técnico Nacional para Nutricionistas do PNAE-2021. O objetivo do evento é apresentar novidades e informações tanto técnica quanto práticas para aprimorar as ações do Programa.",
    date: "29 de junho de 2021",
    textLink: "Card",
    link: "https://drive.google.com/file/d/1MqCjfzcGjRNovhLCs3csQZFFAtxccfck/view?usp=sharing",
    textLinkSecundario: "Acesse o link para realizar sua inscrição:",
    linkSecundario: "https://www.fnde.gov.br/educacaocorporativa/index.php",
  },
  {
    title: "FNDE lança edital para selecionar novos CECANES",
    description:
      "Com o novo edital, a intenção do FNDE é ampliar a rede de atendimento, selecionando Instituições Federais de Ensino Superior com vistas à formação de parcerias para desenvolver ações de pesquisa, ensino e extensão no âmbito do PNAE. As instituições interessadas devem apresentar as propostas até o dia 22 de junho de 2021.",
    date: "15 de março de 2021",
    textLink: "Edital",
    link: "https://drive.google.com/file/d/1T4hm0xhya3jBw7VbTKioiqJFAca6mPOf/view?usp=sharing",
  },
  {
    title: "Encontro Técnico para Nutricionistas do PNAE – 2021",
    description:
      "O Encontro Técnico para Nutricionistas do PNAE – 2021 acontecerá no próximo dia 08 de Abril (9h às 17h), será realizado virtualmente e tem como objetivo apresentar as novidades, atualizações e informações técnicas/práticas sobre a execução das ações de alimentação e nutrição, buscando com isso o aprimoramento Programa. O evento é destinado para os nutricionistas da rede estadual, cadastrados no Simec/PAR e vinculados ao programa. As inscrições são gratuitas e poderão ser realizadas até o dia 6 de Abril de 2021.",
    date: "04 de abril de 2021",
    textLink: "Site",
    link: "https://www.gov.br/fnde/pt-br",
    textLinkTerciary: "eventoscosan@fnde.gov.br",
    linkTerciary:
      "mailto:eventoscosan@fnde.gov.br?subject=Olá,%20gostaria%20de%20tirar%20uma%20dúvida?",
  },
  {
    title: "Nota de esclarecimento 01/2021 – CECANE/UFRN",
    description:
      "Considerando os inúmeros questionamentos que o CECANE/UFRN vem recebendo nos últimos dias relacionados a classificação da farinha de milho (fubá), farinha de milho flocada ou flocos de milho pré-cozidos, segundo o grau de processamento, produzimos uma nota de esclarecimento objetivando sanar as dúvidas sobre o assunto. Caso queira saber mais sobre o funcionamento do nosso serviço acompanhe as nossas redes sociais.",
    date: "13 de fevereiro de 2022",
    textLink: "Informe",
    link: "https://drive.google.com/file/d/1ZgMZ56hWKCEO17eWF4XdbQbnPQ4fWCW_/view?usp=sharing",
  },
  {
    title: "FNDE publica nova resolução sobre o PNAE",
    description:
      "O Fundo Nacional de Desenvolvimento da Educação (FNDE) publicou no dia 2 de dezembro de 2020 a Resolução Nº 20, que altera a Resolução/CD/FNDE nº 6, de 8 de maio de 2020, que trata sobre o atendimento da alimentação escolar aos alunos da educação básica no âmbito do PNAE. Além de trazer algumas alterações, a nova legislação aborda também a possibilidade de repasses extras devido ao estado de calamidade pública no Brasil.",
    date: "02 de dezembro de 2020",
    textLink: "Documento",
    link: "https://www.fnde.gov.br/index.php/acesso-a-informacao/institucional/legislacao/item/13923-resolu%C3%A7%C3%A3o-n%C2%B0-20,-de-02-de-dezembro-de-2020#:~:text=Altera%20a%20Resolu%C3%A7%C3%A3o%2FCD%2FFNDE,Nacional%20de%20Alimenta%C3%A7%C3%A3o%20Escolar%20%E2%80%93%20PNAE.",
  },
];
export default function Noticias() {
  return (
    <>
      <Head>
        <title>
          Notícias | Centro Colaborador em Alimentação e Nutrição Escolar
        </title>
      </Head>
      <div className={styles.Container}>
        <h2>Notícias</h2>
        {news.map((n, key) => (
          <News
            key={key}
            title={n.title}
            date={n.date}
            description={n.description}
            paragraph={n.paragraph}
            paragraphTwo={n.paragraphTwo}
            paragraphTree={n.paragraphTree}
            textLink={n.textLink}
            textLinkSecundary={n.textLinkSecundario}
            textLinkSecundaryTwo={n.textLinkSecundaryTwo}
            textLinkTerciary={n.textLinkTerciary}
            link={n.link}
            linkSecundary={n.linkSecundario}
            linkSecundaryTwo={n.linkSecundaryTwo}
            linkTerciary={n.linkTerciary}
          />
        ))}
      </div>
    </>
  );
}
