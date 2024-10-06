import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addItem, remoteItem, reduceItem} from "../redux/slices/cart/slice";
import {selectCartItems } from '../redux/slices/cart/selectors';
import { CartCounter, Close, Total } from "../components";


const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  return (
    <main className="cart app-content">
              {cartItems.length ? (
      <div className="_container">

          <div className="cart__content">
            <ul className="cart__list">
              {cartItems.map((item, index) => (
                <li key={item.id + item.size} className="cart__item">
                  <div className="cart__num">{`0${index + 1}`}</div>
                  <img src={item.urlImage} className="cart__img"></img>
                  <div className="cart__info">
                    <p className="cart__title">{item.title}</p>
                    <p className="cart__size">{`${item.size} размер`}</p>
                  </div>
                  {/* <Counter
                    ind = {index}
                    onDecrement={() => {
                      dispatch(reduceItem(item));
                    }}
                    onIncrement={() => {
                      dispatch(addItem(item));
                    }}
                    initial={item.count}
                    clss="cart__counter"
                  /> */}

                  <CartCounter ind={index} clss="cart__counter"/>
                  <div className="cart__price">{`${
                    item.price * item.count
                  } Р`}</div>
                  <button
                    className="cart__close"
                    onClick={() => {
                      confirm('Вы действительно хотите удалить товар?')?
                      dispatch(remoteItem(item)):
                      null;
                    }}
                  >
                    <Close />
                  </button>
                </li>
              ))}
            </ul>
            <div className="cart__total">
              <Total link="/payment" />
            </div>
          </div>
                </div>
        ) : (
          <h1 className="warning-message">Ваша корзина пуста</h1>
        )}

    </main>
  );
};

export default Cart;
