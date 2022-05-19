import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { ActiveLink } from "../ActiveLink";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const { asPath } = useRouter();
  function toggleOpenMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <img src="/images/favicon.svg" alt="Logo Cecane" />
          <h3 className={styles.titleContent}>
            Centro Colaborador em Alimentação e Nutrição Escolar - Universidade
            Federal do Rio Grande do Norte
          </h3>
        </div>

        <div
          onClick={() => toggleOpenMenu()}
          className={
            openMenu === true ? styles.mobileMenuOpen : styles.mobileMenu
          }
        >
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
        <nav
          className={
            openMenu === false ? styles.navContainerClose : styles.navContainer
          }
        >
          <ActiveLink activeClassName={styles.active} href="/">
            <a onClick={() => toggleOpenMenu()}>Início</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/Noticias/noticias">
            <a onClick={() => toggleOpenMenu()}>Notícias</a>
          </ActiveLink>

          <a
            className={
              asPath === "/Informes/InformaNutri/informaNutri" ||
              asPath === "/Informes/InformeRecursosPnae/informeRecursosPnae" ||
              asPath === "/Informes/InformeCae/informeCae" ||
              asPath ===
                "/Informes/InformeAgriculturaFamilia/InformeAgriculturaFamilia"
                ? styles.active
                : ""
            }
          >
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
            <ul onClick={() => toggleOpenMenu()}>
              <Link
                href="/Informes/InformeAgriculturaFamilia/InformeAgriculturaFamilia"
                passHref
              >
                <li onClick={() => toggleOpenMenu()}>
                  Informe Agricultura Familiar e PNAE
                </li>
              </Link>
              <Link href="/Informes/InformaNutri/informaNutri" passHref>
                <li onClick={() => toggleOpenMenu()}>InformaNutri</li>
              </Link>
              <Link
                href="/Informes/InformeRecursosPnae/informeRecursosPnae"
                passHref
              >
                <li onClick={() => toggleOpenMenu()}>Informe Recursos PNAE</li>
              </Link>
              <Link href="/Informes/InformeCae/informeCae" passHref>
                <li onClick={() => toggleOpenMenu()}>Informe CAE</li>
              </Link>
            </ul>
          </a>

          <a
            className={
              asPath === "/Cecane/Equipe/equipe" ||
              asPath === "/Cecane/SobreCecane/sobreCecane"
                ? styles.active
                : ""
            }
          >
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
              <Link href="/Cecane/Equipe/equipe" passHref>
                <li onClick={() => toggleOpenMenu()}>Equipe</li>
              </Link>
              <Link href="/Cecane/SobreCecane/sobreCecane" passHref>
                <li onClick={() => toggleOpenMenu()}>Sobre o Cecane</li>
              </Link>
            </ul>
          </a>
          <ActiveLink activeClassName={styles.active} href="/Produtos/produtos">
            <a onClick={() => toggleOpenMenu()}>Produtos</a>
          </ActiveLink>
          <a
            className={
              asPath === "/Estante/Blibioteca/blibioteca" ||
              asPath === "/Estante/Publicacoes/publicacoes"
                ? styles.active
                : ""
            }
          >
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
              <Link href="/Estante/Blibioteca/blibioteca" passHref>
                <li onClick={() => toggleOpenMenu()}>Blibioteca</li>
              </Link>
              <Link href="/Estante/Publicacoes/publicacoes" passHref>
                <li onClick={() => toggleOpenMenu()}>Publicacões/ produções</li>
              </Link>
            </ul>
          </a>
          <ActiveLink activeClassName={styles.active} href="/Galeria/galeria">
            <a onClick={() => toggleOpenMenu()}>Galeria</a>
          </ActiveLink>
          <ActiveLink
            activeClassName={styles.active}
            href="/Mapeamento/mapeamento"
          >
            <a onClick={() => toggleOpenMenu()}>Mapeamento</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/Contato/contato">
            <a onClick={() => toggleOpenMenu()}>Contato</a>
          </ActiveLink>
        </nav>
      </div>
    </header>
  );
}
