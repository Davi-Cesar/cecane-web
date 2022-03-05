import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import GoogleMaps from "../components/Maps";

import styles from "./home.module.scss";
import { CarouselContainer } from "../components/CarouselContainer";
import { news } from "./Noticias/noticias";

import informe from "../services/Informe";
import informesNutri from "../data/informes_nutri.json";
import informesCae from "../data/informes_cae.json";
import informesRecursos from "../data/informes_recursos.json";
import { GetStaticProps } from "next";

export default function Home() {
  const nutri = informesNutri[0].date;
  const cae = informesCae[0].date;
  const recursos = informesRecursos[0].date;

  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    //Calculando o ultimo informe lançado pela data obitida
    const informeDate = informe.getLatestDate({
      dateCae: cae,
      dateNutri: nutri,
      dateRecursos: recursos,
    });
    if (informeDate === nutri) {
      setDate(informesNutri[0].date);
      setDescription(informesNutri[0].description);
    } else if (informeDate === cae) {
      setDate(informesCae[0].date);
      setDescription(informesCae[0].description);
    } else {
      setDate(informesRecursos[0].date);
      setDescription(informesRecursos[0].description);
    }
  }, [date, description]);
  return (
    <>
      <Head>
        <title>Centro Colaborador em Alimentação e Nutrição Escolar</title>
      </Head>

      <main className={styles.contentContainer}>
        <CarouselContainer />

        <div className={styles.content}>
          <div className={styles.informe}>
            <div className={styles.title}>
              <h3>Notícias</h3>
              <p>{news[0].date}</p>
            </div>
            <div className={styles.custonInforme}>
              <a type="text">{news[0].description}</a>
              <Link href="/Noticias/noticias">
                <button>SAIBA MAIS</button>
              </Link>
            </div>
          </div>

          <div className={styles.mapaColaborativo}>
            <h3>Acesse ao Mapa Colaborativo</h3>
            <img src="/images/map_2.png" alt="Mapa Colaborativo" />
            <a
              href="http://177.20.148.101/views/map"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.overlay}>
                <div className={styles.text}>Saiba Mais</div>
              </div>
            </a>
          </div>
          <div className={styles.informe}>
            <div className={styles.title}>
              <h3>Ultimo informe lançado</h3>
              <p>{date}</p>
            </div>
            <div className={styles.custonInforme}>
              <a type="text">{description}</a>
              <Link href="/Informes/InformaNutri/informaNutri">
                <button>SAIBA MAIS</button>
              </Link>
            </div>
          </div>

          <div className={styles.contentShelf}>
            <h3>Estante</h3>
            <div className={styles.custonShelf}>
              <a type="text">
                Acesse os materiais recomendados e utilizados pelo nosso
                serviço, assim como as nossas publicações científicas!
              </a>
              <Link href="/Estante/Blibioteca/blibioteca">
                <button>SAIBA MAIS</button>
              </Link>
            </div>
            <br />
            <img src="/images/livros.png" alt="livros" />
          </div>
          <h3>Localização cecane</h3>
          <GoogleMaps />
        </div>
      </main>
    </>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const nutri = informesNutri[0].date;
//   const cae = informesCae[0].date;

//   const infNutri = nutri.split(" ");
//   const infCae = cae.split(" ");
//   const dataAtual = new Date();
//   let dateCae: Date, dateNutri: Date;

//   moths.map((i) => {
//     if (infNutri[2] === i.moth) {
//       dateNutri = new Date(+infNutri[4], +i.key, +infNutri[0]); // ano mes dia
//     }
//     if (infCae[2] === i.moth) {
//       dateCae = new Date(+infCae[4], +i.key, +infCae[0]);
//     }
//   });
//   const informe = () => {
//     if (
//       dataAtual.getTime() >= dateNutri.getTime() &&
//       dateNutri.getTime() >= dateCae.getTime()
//     ) {
//       const informe = [
//         { date: informesNutri[0].date },
//         { description: informesNutri[0].description },
//       ];
//     } else {
//       const inf = [
//         { date: informesCae[0].date },
//         { description: informesCae[0].description },
//       ];
//     }
//   };

//   return {
//     props: { informe },
//   };
// };
