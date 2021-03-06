import Head from "next/head";
import React, { useState } from "react";
import Modal from "react-modal";

import { Gallery } from "../../components/Gallery";

import styles from "./styles.module.scss";

const gallery = [
  {
    img: "/images/Carrossel/IMG_1.jpg",
    title: "Oficina sobre IQ COSAN (2018)",
  },
  {
    img: "/images/Carrossel/IMG_2.jpg",
    title: "Capacitação IQ COSAN (2019)",
  },
  {
    img: "/images/Carrossel/IMG_3.jpg",
    title: "Congresso Brasileiro de Nutrição (2018)",
  },
  {
    img: "/images/Carrossel/IMG_4.jpg",
    title: "Oficina sobre IQ COSAN (2018)",
  },
  {
    img: "/images/Carrossel/IMG_5.jpeg",
    title: "Evento para compras públicas (2019)",
  },
  {
    img: "/images/Carrossel/IMG_6.jpg",
    title: "Oficina sobre IQ COSAN (2018)",
  },
  {
    img: "/images/Carrossel/IMG_7.jpg",
    title: "Evento para compras públicas (2019)",
  },
];

export default function Galeria() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <Head>
        <title>
          Galeria | Centro Colaborador em Alimentação e Nutrição Escolar
        </title>
      </Head>
      <div className={styles.Container}>
        <h2>Galeria</h2>
        <div className={styles.Content}>
          {gallery.map((g) => (
            <Gallery img={g.img} key={g.img} title={g.title} />
          ))}
        </div>
      </div>
      
    </>
  );
}
