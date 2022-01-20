import React from "react";
import Head from "next/head";
import styles from "./styles.module.scss";

export default function sobreCecane() {
  return (
    <>
      <Head>
        <title>Sobre Cecane</title>
      </Head>
      <div className={styles.Container}>
        <h2>Sobre Cecane</h2>
        <div className={styles.Content}>
          <img src="/images/logo.svg" alt="" />
          <p>
            O Centro Colaborador em Alimentação e Nutrição Escolar do Rio Grande
            do Norte (CECANE/UFRN), fruto da parceria entre o Fundo Nacional do
            Desenvolvimento da Educação (FNDE) e a Universidade Federal do Rio
            Grande do Norte (UFRN), visa contribuir para a consolidação da
            Política Nacional de Segurança Alimentar e Nutricional, por meio do
            aprimoramento do PNAE no estado do RN.
          </p>
          <p>
            Através de uma atuação a partir das perspectivas de
            intersetorialidade o CECANE/UFRN atua desenvolvendo ações voltadas
            para o ensino, pesquisa e extensão nos municípios do estado,
            colaborando com a alimentação escolar não só visando a oferta de
            produtos, mas a importância dos diversos atores envolvidos no
            Programa Nacional de Alimentação Escolar (PNAE), incluindo, a
            própria formação acadêmica dos nutricionistas.
          </p>
          <p>
            Desde 2014, quando iniciou suas atividades, o CECANE/UFRN desempenha
            formação com Conselheiros da Alimentação Escolar e Nutricionistas,
            monitora e assessora municípios, realiza oficinas regionais com
            agricultores familiares e os outros sujeitos envolvidos na oferta e
            demanda da agricultura familiar no PNAE, produz materiais, artigos e
            outros trabalhos buscando fortalecer a alimentação escolar, o
            Direito Humano à Alimentação Escolar (DHAA), a Soberania Alimentar e
            a defesa da Segurança Alimentar e Nutricional dos sujeitos.
          </p>
        </div>
      </div>
    </>
  );
}
