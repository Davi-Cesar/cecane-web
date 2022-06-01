import { ActiveLink } from "../ActiveLink";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

type Props = {
  openMenu: boolean;
  onChange: Function;
};

export function Nav({ onChange, openMenu }: Props) {
  const { asPath } = useRouter();
  const [subMenu, setSubMenu] = useState(false);

  function togleSubMenu() {
    setSubMenu(!subMenu);
  }

  // function togleSubMenuClose() {
  //   setSubMenu(false);
  // }

  return (
    <nav
      className={
        openMenu === false ? styles.navContainerClose : styles.navContainer
      }
    >
      <ActiveLink activeClassName={styles.active} href="/">
        <a onClick={() => onChange()}>Início</a>
      </ActiveLink>
      <ActiveLink activeClassName={styles.active} href="/Noticias/noticias">
        <a onClick={() => onChange()}>Notícias</a>
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
        onClick={() => togleSubMenu()}
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
        <ul className={subMenu === false ? styles.subMenu : styles.subMenuOpen}>
          <Link
            href="/Informes/InformeAgriculturaFamilia/InformeAgriculturaFamilia"
            passHref
          >
            <li onClick={() => onChange()}>
              Informe Agricultura Familiar e PNAE
            </li>
          </Link>
          <Link href="/Informes/InformaNutri/informaNutri" passHref>
            <li onClick={() => onChange()}>InformaNutri</li>
          </Link>
          <Link
            href="/Informes/InformeRecursosPnae/informeRecursosPnae"
            passHref
          >
            <li onClick={() => onChange()}>Informe Recursos PNAE</li>
          </Link>
          <Link href="/Informes/InformeCae/informeCae" passHref>
            <li onClick={() => onChange()}>Informe CAE</li>
          </Link>
          <li onClick={() => togleSubMenu()}>Voltar</li>
        </ul>
      </a>

      <a
        className={
          asPath === "/Cecane/Equipe/equipe" ||
          asPath === "/Cecane/SobreCecane/sobreCecane"
            ? styles.active
            : ""
        }
        onClick={() => togleSubMenu()}
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
        <ul
          className={
            subMenu === false ? styles.subMenu : styles.subMenuOpenCecane
          }
        >
          <Link href="/Cecane/Equipe/equipe" passHref>
            <li onClick={() => onChange()}>Equipe</li>
          </Link>
          <Link href="/Cecane/SobreCecane/sobreCecane" passHref>
            <li onClick={() => onChange()}>Sobre o Cecane</li>
          </Link>
          <li onClick={() => togleSubMenu()}>Voltar</li>
        </ul>
      </a>
      <ActiveLink activeClassName={styles.active} href="/Produtos/produtos">
        <a onClick={() => onChange()}>Produtos</a>
      </ActiveLink>
      <a
        className={
          asPath === "/Estante/Blibioteca/blibioteca" ||
          asPath === "/Estante/Publicacoes/publicacoes"
            ? styles.active
            : ""
        }
        onClick={() => togleSubMenu()}
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
        <ul
          className={
            subMenu === false ? styles.subMenu : styles.subMenuOpenEstante
          }
        >
          <Link href="/Estante/Blibioteca/blibioteca" passHref>
            <li onClick={() => onChange()}>Blibioteca</li>
          </Link>
          <Link href="/Estante/Publicacoes/publicacoes" passHref>
            <li onClick={() => onChange()}>Publicacões/ produções</li>
          </Link>
          <li onClick={() => togleSubMenu()}>Voltar</li>
        </ul>
      </a>
      <ActiveLink activeClassName={styles.active} href="/Galeria/galeria">
        <a onClick={() => onChange()}>Galeria</a>
      </ActiveLink>
      <ActiveLink activeClassName={styles.active} href="/Mapeamento/mapeamento">
        <a onClick={() => onChange()}>Mapeamento</a>
      </ActiveLink>
      <ActiveLink activeClassName={styles.active} href="/Contato/contato">
        <a onClick={() => onChange()}>Contato</a>
      </ActiveLink>
    </nav>
  );
}
