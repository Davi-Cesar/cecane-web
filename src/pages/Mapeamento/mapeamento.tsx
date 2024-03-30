import Head from "next/head";
import styles from "./styles.module.scss";
import React from "react";

export default function Mapeamento() {
  return (
    <>
      <Head>
        <title>
          Mapeamento | Centro Colaborador em Alimentação e Nutrição Escolar
        </title>
      </Head>
      <div className={styles.Container}>
        <h2>Mapeamento</h2>
        <div className={styles.Content}>
          <h4>Produção da Agricultura Familiar do RN</h4>
          <p>
            Mapa criado coletivamente, com apoio da metodologia crowdsourcing,
            contendo informações dos produtores rurais do Estado do Rio Grande
            do Norte. As informações que constam no Mapa são adicionadas de
            maneira colaborativa, ou seja, qualquer pessoa (agricultor familiar
            ou não) pode inserir os dados e contribuir com o mapeamento da
            oferta dos alimentos. Para cadastrar produtos é obrigatório inserir
            nome do ofertante, produtos ofertados, contato telefônico, endereço
            e município, localização no mapa. Para acessar clique em Mapa
            Colaborativo, abaixo temos um representação do mapa.
          </p>
          <div className={styles.MapaColaborativo}>
            <iframe
              width="560"
              height="315"
              src="http://mapacecane.ccs.ufrn.br/views/map"
              allowFullScreen
            ></iframe>
          </div>

          <p>
            Tenha acesso ao{" "}
            <a
              type="link"
              href="http://mapacecane.ccs.ufrn.br/views/map"
              target="_blank"
              rel="noreferrer"
            >
              Mapa Colaborativo
            </a>
            ,
          </p>
          <p>
            Para ter acesso a partir da rede da UFRN,{" "}
            <a
              type="link"
              href="http://10.3.224.88/views/map"
              target="_blank"
              rel="noreferrer"
            >
              Mapa Colaborativo
            </a>
            .
          </p>
          <div className={styles.Video}>
            <h4>Video Explicativo</h4>

            <iframe
              src="https://player.vimeo.com/video/542736398?h=e2163e8723&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              width="720"
              height="720"
              allow="autoplay; picture-in-picture" // fullscreen;
              allowFullScreen
              title="mapa_colaborativo_cecane_v3"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
