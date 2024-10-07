import { Routes, Route, useParams, useLocation } from "react-router-dom";
import React from 'react'
import "./scss/main.scss";

import Header from "./components/Header";

import Footer from "./components/Footer";
import Routing from "./routes/Routing";

const App = (props) => {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <Routing/>
      {pathname === "/" ||
      pathname === "/contacts" ||
      pathname === "/about" ||
      (pathname.slice(0, 6) === "/card/" && pathname.length !== 6) ||
      pathname === "/catalog" ? (
        <Footer />
      ) : (
        <></>
      )}
    </>
  );
};

export default App;
