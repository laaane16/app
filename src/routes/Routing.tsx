import React, { lazy, Suspense } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import MainPage from "../pages/MainPage";
import Loader from "../components/UI/loader/Loader";
const About = lazy(() => import(/* webpackChunkName: "About"*/"../pages/About"));
const CardPage = lazy(() => import(/* webpackChunkName: "CardPage"*/"../pages/CardPage"));
const Cart = lazy(() => import(/* webpackChunkName: "Cart"*/"../pages/Cart"));
const Catalog = lazy(() => import(/* webpackChunkName: "Catalog"*/"../pages/Catalog"));
const ContactsPage = lazy(() => import(/* webpackChunkName: "ContactsPage"*/"../pages/ContactsPage"));
const ErrorPage = lazy(() => import(/* webpackChunkName: "ErrorPage"*/"../pages/ErrorPage"));
const Payment = lazy(() => import(/* webpackChunkName: "Payment"*/"../pages/Payment"));
const User = lazy(() => import(/* webpackChunkName: "User"*/"../pages/User"));

const Routing: React.FC = (props) => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route
        path="/about"
        element={
          <Suspense fallback={<Loader/>}>
            <About />
          </Suspense>
        }
      ></Route>
      <Route
        path="/card/:id"
        element={
          <Suspense fallback={<Loader/>}>
            <CardPage />
          </Suspense>
        }
      ></Route>
      <Route
        path="/catalog"
        element={
          <Suspense fallback={<Loader/>}>
            <Catalog />
          </Suspense>
        }
      ></Route>
      <Route
        path="/payment"
        element={
          <Suspense fallback={<Loader/>}>
            <Payment />
          </Suspense>
        }
      ></Route>
      <Route
        path="/cart"
        element={
          <Suspense fallback={<Loader/>}>
            <Cart />
          </Suspense>
        }
      ></Route>
      <Route
        path="/user"
        element={
          <Suspense fallback={<Loader/>}>
            <User />
          </Suspense>
        }
      ></Route>
      <Route
        path="/contacts"
        element={
          <Suspense fallback={<Loader/>}>
            <ContactsPage />
          </Suspense>
        }
      ></Route>
      <Route
        path="*"
        element={
          <Suspense fallback={<Loader/>}>
            <ErrorPage />
          </Suspense>
        }
      ></Route>
    </Routes>
  );
};

export default Routing;
