/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/no-string-refs */
/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import React, { useState } from "react";
import styles from "./styles.module.scss";

export function Header() {
  const [active, setActive] = useState(false);
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <img src="/images/logo.svg" alt="Logo Cecane" />
          <h3 className={styles.titleContent}>
            Centro Colaborador em Alimentação e Nutrição Escolar - Universidade
            Federal do Rio Grande do Norte
          </h3>
        </div>

        <nav>
          <div className={styles.mobileMenu}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
          </div>
          <a href="/" className={styles.active}>
            Home
          </a>
          <a href="/Noticias/noticias">Notícias</a>
          <a href="#">
            Infomes
            <svg
              width="10"
              height="7"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" />
            </svg>
            <ul>
              <Link href="/Informes/InformaNutri/informaNutri">
                <li>InformaNutri</li>
              </Link>
              <Link href="/Informes/InformeRecursosPnae/informeRecursosPnae">
                <li>Informe Recursos PNAE</li>
              </Link>
              <Link href="/Informes/InformeCae/informeCae">
                <li>Informe CAE</li>
              </Link>
            </ul>
          </a>
          <a href="#">
            Cecane
            <svg
              width="10"
              height="7"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" />
            </svg>
            <ul>
              <Link href="/Cecane/Equipe/equipe">
                <li>Equipe</li>
              </Link>
              <Link href="/Cecane/SobreCecane/sobreCecane">
                <li>Sobre o Cecane</li>
              </Link>
            </ul>
          </a>
          <a href="/Produtos/produtos">Produtos</a>
          <a href="#">
            Estante
            <svg
              width="10"
              height="7"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" />
            </svg>
            <ul>
              <Link href="/Estante/Blibioteca/blibioteca">
                <li>Blibioteca</li>
              </Link>
              <Link href="/Estante/Publicacoes/publicacoes">
                <li>Publicacôes/ produções</li>
              </Link>
            </ul>
          </a>
          <a href="/Galeria/galeria">Galeria</a>
          <a href="/Mapeamento/mapeamento">Mapeamento</a>
          <a href="/Contato/contato">Contato</a>
        </nav>
      </div>
    </header>
  );
}
