import { useState } from "react";
import React from "react";
import cl from "./counter.module.scss";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, reduceItem } from "../../../redux/slices/cart/slice";
import {
  selectCart,
  selectCartItems,
} from "../../../redux/slices/cart/selectors";

interface CounterProps {
  clss?: string;
  limit?: number;
  ind: number;
}

const CartCounter: FC<CounterProps> = ({ clss, ind, limit = 0 }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const subtract = () => {
    if (cartItems[ind].count > limit) {
      dispatch(reduceItem(cartItems[ind]));
    }
  };

  return (
    <div className={`${cl.counter} ${clss}`}>
      <button className={cl.btn} onClick={subtract}>
        -
      </button>
      <p>{cartItems[ind].count}</p>
      <button
        className={cl.btn}
        onClick={() => {
          dispatch(addItem(cartItems[ind]));
        }}
      >
        +
      </button>
    </div>
  );
};

export default CartCounter;
