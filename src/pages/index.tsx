import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import styles from "./home.module.scss";
import { CarouselContainer } from "../components/CarouselContainer";
import { news } from "./Noticias/noticias";

import informe from "../services/Informe";
import informesNutri from "../data/informes_nutri.json";
import informesCae from "../data/informes_cae.json";
import informesRecursos from "../data/informes_recursos.json";
import informesAgriculturaFamiliar from "../data/informe_agricultura_familiar.json";

import { GetStaticProps } from "next";
import { Box } from "../components/Box";

export default function Home() {
  const nutri = informesNutri[0].date;
  const cae = informesCae[0].date;
  const recursos = informesRecursos[0].date;
  const agriculturaFamiliar = informesAgriculturaFamiliar[0].date;

  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    //Calculando o ultimo informe lançado pela data obitida
    const informeDate = informe.getLatestDate({
      dateCae: cae,
      dateNutri: nutri,
      dateRecursos: recursos,
      dateAgriculturaFamiliar: agriculturaFamiliar,
    });

    if (informeDate === nutri) {
      setDate(informesNutri[0].date);
      setDescription(informesNutri[0].description);
      setLink("/Informes/InformaNutri/informaNutri");
    } else if (informeDate === cae) {
      setDate(informesCae[0].date);
      setDescription(informesCae[0].description);
      setLink("/Informes/InformeCae/informeCae");
    } else if (informeDate == recursos) {
      setDate(informesRecursos[0].date);
      setDescription(informesRecursos[0].description);
      setLink("/Informes/InformeRecursosPnae/informeRecursosPnae");
    } else if (informeDate == agriculturaFamiliar) {
      setDate(informesAgriculturaFamiliar[0].date);
      setDescription(informesAgriculturaFamiliar[0].description);
      setLink("/Informes/InformeAgriculturaFamilia/InformeAgriculturaFamilia");
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
          <Box
            title="Notícias"
            date={news[0].date}
            description={news[0].description}
            link="/Noticias/noticias"
          />

          <div className={styles.mapaColaborativo}>
            <h3>Mapa Colaborativo</h3>
            <div className={styles.containerImg}>
              <Link href="/Mapeamento/mapeamento">
                <img
                  className={styles.Image}
                  src="/images/map_2.png"
                  alt="Mapa Colaborativo"
                />
              </Link>
            </div>
            <p>
              Acesso ao <a href="/Mapeamento/mapeamento">Mapa Colaborativo.</a>
            </p>
          </div>

          <Box
            title="Último informe lançado"
            date={date}
            description={description}
            link={link}
          />

          <div className={styles.contentShelf}>
            <Box
              title="Estante"
              description="Acesse os materiais recomendados e utilizados pelo nosso
                serviço, assim como as nossas publicações científicas!"
              link="/Estante/Blibioteca/blibioteca"
            />
            <br />
            <img src="/images/livros.png" alt="livros" />
          </div>

          <div>
            <h3>Localização cecane</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15876.632156328393!2d-35.20384515223012!3d-5.833333014744185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scecane%20ufrn!5e0!3m2!1spt-BR!2sbr!4v1650463848069!5m2!1spt-BR!2sbr"
              width="100%"
              height="500"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
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
