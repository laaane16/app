import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Cart, Whatsapp, PersonAcc } from "../components";
import { useSelector } from "react-redux";
import { selectCart, selectCartItems } from "../redux/slices/cart/selectors";
import { ICardFromCart } from "../types/types";

interface HeaderInfo {
  className: string;
  color: string;
}

const HeaderInfo: React.FC<HeaderInfo> = ({ className, color }) => {
  const isMounted = useRef<boolean>(false);

  const cart = useSelector(selectCart);
  const cartCount = cart.items.reduce(
    (accum: number, item: ICardFromCart) => accum + item?.count,
    0
  );

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    isMounted.current = true;
  }, [cart]);

  // const cartCount = useSelector(selectCartItems)
  return (
    <div className={`${className} info`}>
      <div className="contact">
        <a
          className={
            color === "white" ? "contact-phone" : "contact-phone black"
          }
          href="tel:+7 (999) 808-65-48"
        >
          +7 (999) 808-65-48
        </a>
        <a
          className={
            color === "white"
              ? "contact-whatsapp whatsapp"
              : "contact-whatsapp whatsapp black"
          }
          href="https://web.whatsapp.com/"
          target="_blank"
        >
          <Whatsapp />
        </a>
      </div>
      <div className="user">
        <Link
          to={"/cart"}
          className={
            color === "white"
              ? "user-cart cart"
              : location.pathname === "/cart"
              ? "user-cart cart active"
              : "user-cart cart black"
          }
        >
          <div className="user-cart-count-container">
            <p className="user-cart-count">{cartCount}</p>
          </div>
          <Cart />
        </Link>
        <Link
          to="/user"
          className={
            color === "white"
              ? "user-pers-acc pers-acc"
              : "user-pers-acc pers-acc black"
          }
        >
          <PersonAcc />
        </Link>
      </div>
    </div>
  );
};

export default HeaderInfo;
