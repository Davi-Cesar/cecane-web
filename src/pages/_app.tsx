import { AppProps } from "next/app";

import { Header } from "../components/Header";
import React from "react";

import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
