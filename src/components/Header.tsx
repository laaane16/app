import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";


import { selectCart } from "../redux/slices/cart/selectors";
import { ICardFromCart } from "../types/types";

import {Cart, LogoBlack, LogoWhite, Menu, PersonAcc, Whatsapp, Navbar} from './../components'

const Header: React.FC = () => {
  const location = useLocation()
  
  let theme = {position: '', color: ''}

  if (location.pathname === '/'){
    theme = {position: 'absolute', color: 'white'}
  }
  
  const isMounted = useRef<boolean>(false)

  const cart = useSelector(selectCart);
  const cartCount = cart.items.reduce(
    (accum: number, item: ICardFromCart) => accum + item?.count,
    0
  );

  useEffect(() => {
    if (isMounted.current){
      localStorage.setItem('cart', JSON.stringify(cart))
    }
    isMounted.current = true;
  }, [cart])

  return (
    <header
      className={theme.position === "absolute" ? "header absolute" : "header"}
    >
      <div className="_container">
        <div className="header__content">
          <Link to="/" className="logo header__logo">
            {theme.color === "white" ? <LogoWhite /> : <LogoBlack />}
          </Link>
          <Navbar color={theme.color} />
          <div className="header__info">
            <div className="header__contact">
              <a
                className={
                  theme.color === "white"
                    ? "header__contact-phone"
                    : "header__contact-phone black"
                }
                href="tel:+7 (999) 808-65-48"
              >
                +7 (999) 808-65-48
              </a>
              <a
                className={
                  theme.color === "white"
                    ? "header__contact-whatsapp whatsapp"
                    : "header__contact-whatsapp whatsapp black"
                }
                href="https://web.whatsapp.com/"
                target="_blank"
              >
                <Whatsapp />
              </a>
            </div>
            <div className="header__user">
              <Link
                to={"/cart"}
                className={
                  theme.color === "white"
                    ? "header__user-cart cart"
                    : location.pathname ==='/cart' ? "header__user-cart cart active" : "header__user-cart cart black" 
                }
              >
                <div className="header__user-cart-count-container">
                  <p className="header__user-cart-count">{cartCount}</p>
                </div>
                <Cart />
              </Link>
              <Link
                to="/user"
                className={
                  theme.color === "white"
                    ? "header__user-pers-acc pers-acc"
                    : "header__user-pers-acc pers-acc black"
                }
              >
                <PersonAcc />
              </Link>
              {/* <button
                className={theme.color === "white" ? "burger" : "burger black"}
              >
                <Menu />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
