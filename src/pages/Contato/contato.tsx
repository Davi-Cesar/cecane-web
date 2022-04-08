/* eslint-disable @next/next/link-passhref */
import Head from "next/head";
import Modal from "react-modal";
import emailjs from "emailjs-com";

import React, { useRef } from "react";
import { FormEvent, useState } from "react";

import styles from "./styles.module.scss";

export default function Contato() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [yourEmail, setYourEmail] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleOpenModal() {
    setIsOpenModal(true);
  }

  function handleCloseModal() {
    setIsOpenModal(false);
  }

  const form = useRef();
  const sendEmail = (e: { preventDefault: () => void }) => {
    //e.preventDefault();

    emailjs
      .sendForm(
        "service_ik5wt6u",
        "template_m52vk8n",
        form.current,
        "user_kCYUAoXJVfGGPnIJNr6NG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const sendEmailAssessoria = (e: { preventDefault: () => void }) => {
    //e.preventDefault();

    emailjs
      .sendForm(
        "service_ygbkvo4",
        "template_wkxddxd",
        form.current,
        "user_kCYUAoXJVfGGPnIJNr6NG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Head>
        <title>
          Contato | Centro Colaborador em Alimentação e Nutrição Escolar
        </title>
      </Head>
      <div className={styles.Container}>
        <h2>Contato</h2>
        <div className={styles.Content}>
          <h5>Entre em contato com CECANE/UFRN. </h5>
          <h6>Endereço:</h6>
          <p>Av. Senador Salgado Filho, s/n, Lagoa Nova.</p>
          <p>CEP: 59078-970.</p>
          <p>Natal - Rio Grande do Norte.</p>
          <h6>Instagram:</h6>
          <div className={styles.instagram}>
            <a
              href={"https://www.instagram.com/cecaneufrn/"}
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.efeito}>
                <img src="/images/instagram.png" alt="instagram" />
                <p>@cecaneufrn</p>
              </div>
            </a>
          </div>
          <div className={styles.buttonAlign}>
            <button type="button" onClick={handleOpenModal}>
              Enviar E-mail para CECANE
              <img src="/images/email.svg" alt="" />
            </button>
          </div>

          <Modal
            isOpen={isOpenModal}
            onRequestClose={handleCloseModal}
            ariaHideApp={false}
            className={styles.reactModalContent}
            overlayClassName={styles.reactModaOverlay}
          >
            <button
              type="button"
              onClick={handleCloseModal}
              className={styles.buttonClose}
            >
              <img src="/images/closeImg.svg" alt="Fechar Modal" />
            </button>
            <div className={styles.headModal}>
              <h2>Envie E-mail para a CECANE/UFRN</h2>
              <img src="/images/favicon.svg" alt="Cecane" />
            </div>
            <form
              ref={form}
              className={styles.containerModal}
              onSubmit={
                email === "cecaneufrn@gmail.com"
                  ? sendEmail
                  : sendEmailAssessoria
              }
            >
              <input
                name="name"
                type="text"
                onChange={(event) => setName(event.currentTarget.value)}
                placeholder="Seu nome"
                required
              />
              <input
                name="yourEmail"
                type="email"
                onChange={(event) => setYourEmail(event.target.value)}
                placeholder="Seu E-mail"
                required
              />
              <textarea
                name="message"
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Sua mensagem"
                required
              />
              <select
                name="email"
                onChange={(event) =>
                  event.target.value == "0"
                    ? alert("Escolhar um é E-mail!")
                    : setEmail(event.target.value)
                }
                defaultValue={"0"}
                required
              >
                <option value="0" disabled hidden>
                  Selecione um E-mail
                </option>
                <option value="cecaneufrn@gmail.com">
                  cecaneufrn@gmail.com
                </option>
                <option value="assessoriacecaneufrn@gmail.com<">
                  assessoriacecaneufrn@gmail.com
                </option>
              </select>
              <button type="submit">Enviar E-mail</button>
            </form>
          </Modal>
        </div>
      </div>
    </>
  );
}
