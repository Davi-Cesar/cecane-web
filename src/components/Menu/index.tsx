import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { ActiveLink } from "../ActiveLink";
import { menu as elementsMenu } from "./menu";

export function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  const { asPath } = useRouter();
  function toggleOpenMenu() {
    setOpenMenu(!openMenu);
  }

  const menu = elementsMenu.filter((child) => child.parent === null);
  const sheets = elementsMenu.filter((sheet) => sheet.parent != null);

  return (
    <header className={styles.headerContainer}>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Active
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li className="dropdown-divider"></li>
            <li>
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link disabled"
            href="#"
            tabIndex={-1}
            aria-disabled="true"
          >
            Disabled
          </a>
        </li>
      </ul>
    </header>
  );
}
