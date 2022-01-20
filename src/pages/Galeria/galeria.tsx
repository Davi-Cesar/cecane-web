import Head from "next/head";
import React from "react";
import { Gallery } from "../../components/Gallery";
import styles from "./styles.module.scss";

const gallery = [
  {
    img: "/images/IMG_1.jpg",
    title: "Oficina sobre IQ COSAN (2018)",
  },
  {
    img: "/images/IMG_2.jpg",
    title: "Capacitação IQ COSAN (2019)",
  },
  {
    img: "/images/IMG_3.jpg",
    title: "Congresso Brasileiro de Nutrição (2018)",
  },
  {
    img: "/images/IMG_4.jpg",
    title: "Oficina sobre IQ COSAN (2018)",
  },
  {
    img: "/images/IMG_5.jpeg",
    title: "Evento para compras públicas (2019)",
  },
  {
    img: "/images/IMG_6.jpg",
    title: "Oficina sobre IQ COSAN (2018)",
  },
  {
    img: "/images/IMG_7.jpg",
    title: "Evento para compras públicas (2019)",
  },
];

export default function Galeria() {
  return (
    <>
      <Head>
        <title>Galeria</title>
      </Head>
      <div className={styles.Container}>
        <h2>Galeria</h2>
        <div className={styles.Content}>
          {gallery.map((g) => (
            <Gallery img={g.img} key={g.title} title={g.title} />
          ))}
        </div>
      </div>
    </>
  );
}
