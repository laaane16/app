import cl from "./total.module.scss";
import MyButton from "../UI/button/MyButton";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
import { selectTotalPrice } from "../../redux/slices/cart/selectors";

interface TotalProps {
  clss?: string;
  link?: string;
}

const Total: React.FC<TotalProps> = ({ clss = '', link = '' }) => {
  const totalPrice = useSelector(selectTotalPrice);
  return (
    <div className={`${clss} ${cl.total}`}>
      <div className={cl.total__info}>
        <div className={cl.total__text}>Итого</div>
        <div className={cl.total__price}>{`${totalPrice} Р`}</div>
      </div>

      <Link to = {link}>
        <MyButton onClick={() => {}} clName={cl.total__btn}>ОФОРМИТЬ ЗАКАЗ</MyButton>
      </Link>
    </div>
  );
};

export default Total;
