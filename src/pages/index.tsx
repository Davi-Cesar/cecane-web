/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import GoogleMaps from '../components/Maps'

import styles from './home.module.scss'
import { CarouselContainer } from '../components/CarouselContainer';

export default function Home() {
   
  return (
    <>
      <Head>
        <title>Centro Colaborador em Alimentação e Nutrição Escolar </title>
      </Head>

      <main className={styles.contentContainer}> 

        <CarouselContainer />

        <div className={styles.content}>
          <div className={styles.informe}>
            <div className={styles.title}>
              <h3>Notícias</h3>
              <p>12 de março de 2021</p>
            </div>
            <div className={styles.custonInforme}> 
              <a type='text'>
                O FNDE promoverá, no dia 30 de junho, das 9h às 17h, o Encontro Técnico Nacional para 
                Nutricionistas do PNAE – 2021 a ser realizado virtualmente. Acesse o card para ter saber 
                mais sobre a programação do evento
              </a>
              <Link href="/Noticias/noticias" > 
                <button>SAIBA MAIS</button>
              </Link>
            </div>
          </div>

          <div className={styles.mapaColaborativo}>
            <h3>Acesse ao Mapa Colaborativo</h3>
            <img  src="/images/map_2.png" alt="Mapa Colaborativo"/>
            <Link href="/" > 
              <div className={styles.overlay}>
                <div className={styles.text}>Saiba Mais</div>
              </div>
            </Link>
          </div>
          <div></div>
          <div className={styles.informe}>
            <div className={styles.title}>
              <h3>Ultimo informe lançado</h3>
              <p>12 de março de 2021</p>
            </div>
            <div className={styles.custonInforme}> 
              <a type='text'>
                O Informe CAE 07/2021 traz dicas para que você possa buscar informação e aprender um pouco mais sobre o PNAE,
                uma forma eficaz de um conselho de controle social se fortalecer e ser respeitado é saber o que tem que fazer, 
                conhecer seu papel e atuar com segurança.
              </a>
              <Link href="/" > 
                <button >SAIBA MAIS</button>
              </Link>
            </div>
          </div>
          
          <div className={styles.contentShelf}>
            <h3>Estante</h3>
            <div className={styles.custonShelf}>
              <a type="text">
                Acesse os materiais recomendados e utilizados pelo nosso serviço, assim como as nossas
                publicações científicas!
              </a>
              <Link href="/" > 
                  <button >SAIBA MAIS</button>
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
  )
}
