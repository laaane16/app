import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";

import { selectCart } from "../redux/slices/cart/selectors";
import { ICardFromCart } from "../types/types";

import {
  LogoBlack,
  LogoWhite,
  Menu,
  Navbar,
  Close,
} from "./../components";
import HeaderInfo from "./HeaderInfo";

const Header: React.FC = () => {
  const [popUpRef, setPopUpRef] = useState<boolean>(false);

  const onBurgerClick = (): void => {
    setPopUpRef(!popUpRef);
  };

  const location = useLocation();

  let theme = { position: "", color: "" };

  if (location.pathname === "/") {
    theme = { position: "absolute", color: "white" };
  }


  return (
    <header
      className={theme.position === "absolute" ? "header absolute" : "header"}
    >
      <div className="_container">
        <div className="header__content">
          <Link to="/" className="logo header__logo">
            {theme.color === "white" ? <LogoWhite /> : <LogoBlack />}
          </Link>
          <Navbar className = 'header__nav' color={theme.color} />
          <HeaderInfo color={theme.color} className='header__info'/>
          <button
            onClick={onBurgerClick}
            className={theme.color === "white" ? "burger" : "burger black"}
          >
            <Menu />
          </button>
          <div
            className={popUpRef ? "header__pop-up active" : "header__pop-up"}
          >
            <Navbar className='pop-up__nav' color={'black'}/>
            <HeaderInfo color={'black'} className='pop-up__info'/>
            <button onClick={onBurgerClick}>
              <Close />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
