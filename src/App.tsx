import { Routes, Route, useParams, useLocation } from "react-router-dom";
import React from 'react'
import "./scss/main.scss";

import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import CardPage from "./pages/CardPage";
import Payment from "./pages/Payment";
import ErrorPage from "./pages/ErrorPage";
import Cart from "./pages/Cart";
import ContactsPage from "./pages/ContactsPage";
import User from "./pages/User";

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
