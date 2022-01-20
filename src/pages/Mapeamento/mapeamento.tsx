import Head from "next/head";
import styles from "./styles.module.scss";
import ReactMapGL from "react-map-gl";
import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Mapeamento() {
  const [viewport, setViewport] = React.useState({
    latitude: -5.45,
    longitude: -36.3,
    zoom: 6.7,
    width: "100%",
    height: "30rem",
    zindex: 1,
  });
  return (
    <>
      <Head>
        <title>Mapeamento</title>
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
          <div className={styles.Map}>
            <ReactMapGL
              mapStyle="mapbox://styles/kayton/ckxqr1vo31seb15o53w5d9dcn"
              mapboxApiAccessToken={
                "pk.eyJ1Ijoia2F5dG9uIiwiYSI6ImNreHJwN2s1NjBvOG4ybm55YzBvM2diOHUifQ.-prXtlZtKjgDVbH3PiAlhA"
              }
              {...viewport}
              onViewportChange={(
                newView: React.SetStateAction<{
                  latitude: number;
                  longitude: number;
                  zoom: number;
                  width: string;
                  height: string;
                  zindex: number;
                }>
              ) => setViewport(newView)}
            ></ReactMapGL>
          </div>
          <p>
            Tenha acesso ao{" "}
            <a type="link" href="">
              Mapa Colaborativo
            </a>
            ,
          </p>
          <p>
            Para ter acesso a partir da rede da UFRN,{" "}
            <a type="link" href="">
              Mapa Colaborativo
            </a>
            .
          </p>
          <h4>Video Explicativo</h4>
          <iframe
            src="https://player.vimeo.com/video/542736398?h=e2163e8723&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            width="720"
            height="720"
            frameBorder="0"
            allow="autoplay; picture-in-picture" // fullscreen;
            allowFullScreen
            title="mapa_colaborativo_cecane_v3"
          ></iframe>
        </div>
      </div>
    </>
  );
}
