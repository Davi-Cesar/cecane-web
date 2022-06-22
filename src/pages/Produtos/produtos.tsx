import Head from "next/head";
import React from "react";
import styles from "./styles.module.scss";

export default function Produtos() {
  return (
    <>
      <Head>
        <title>
          Produtos | Centro Colaborador em Alimentação e Nutrição Escolar
        </title>
      </Head>
      <div className={styles.Container}>
        <h2>Produtos</h2>
        <div className={styles.Content}>
          <div className={styles.containerProduct}>
            <h4>Produto 1:</h4>
            <p>
              Fornecer suporte técnico ao FNDE no planejamento e execução de
              ações que contribuam para o fortalecimento do controle social com
              foco no desenvolvimento de atividades voltadas para o
              aprimoramento dos conselheiros de alimentação escolar por meio de
              eventos de formação e capacitação e na melhoria da interlocução
              entre FNDE e os conselheiros de alimentação escolar, além de
              possibilitar o intercâmbio de conhecimentos ao facilitar a
              articulação entre o Centro Colaborador de Alimentação e Nutrição
              Escolar (CECANE) e o FNDE.
            </p>
          </div>

          <div className={styles.containerProduct}>
            <h4>Produto 2:</h4>
            <p>
              Monitoramento e Assessoria à execução do PNAE ao Estado e a
              municípios do Rio Grande do Norte e Paraíba, por meio de apoio
              técnico e operacional aos atores sociais envolvidos no Programa
              Nacional de Alimentação Escolar com vistas ao aprimoramento da sua
              execução.
            </p>
          </div>
          <div className={styles.containerProduct}>
            <h4>Produto 3:</h4>
            <p>
              Realização de oficinas para possibilitar o encontro da demanda da
              alimentação escolar com a oferta da produção da agricultura
              familiar para o bom atendimento da Resolução do PNAE, sobretudo
              pelo preconizado pelo Art.14 da Lei 11.947.
            </p>
          </div>
          <div className={styles.containerProduct}>
            <h4>Produto 4:</h4>
            <p>
              Formação para membros do Conselho de Alimentação Escolar no estado
              do RN proporcionando aos conselheiros o aprofundamento sobre a
              execução do Programa Nacional de Alimentação Escolar e mobilizar
              para a renovação dos membros desse conselho.
            </p>
          </div>
          <div className={styles.containerProduct}>
            <h4>Produto 5:</h4>
            <p>
              O produto é reponsável pela Formação para Atores Sociais
              envolvidos no planejamento das Compras Públicas do PNAE visa
              contribuir com os contemplando os aspectos fundamentais e
              operacionais desta política pública. Portanto, a proposta de
              execução desta ação torna-se primordial, de forma que os gestores
              no âmbito municipal e todos os atores envolvidos tenham acesso às
              informações sobre o PNAE sob a forma de orientações específicas no
              processo de planejamento de compras, possibilitando a aquisição de
              gêneros alimentícios adequados e saudáveis para suprir as
              necessidades nutricionais dos escolares.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
