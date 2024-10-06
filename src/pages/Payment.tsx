import {Total, MyInput, Close} from "../components";
import { useDispatch, useSelector } from "react-redux";
import { remoteItem } from "../redux/slices/cart/slice";
import { selectCartItems } from "../redux/slices/cart/selectors";
import React from "react";

const Payment = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  return (
    <main className="payment app-content">
      <div className="_container">
        <div className="payment__content">
          <div className="payment__user payment__box">
            <form className="payment__user-form" action="post">
              <fieldset className="payment__fieldset">
                <legend className="payment__title payment__user-title">
                  1. КОНТАКТНЫЕ ДАННЫЕ
                </legend>
                <div className="payment__user-form-content">
                  <MyInput type="text" placeholder="Ваше имя" />
                  <MyInput type="text" placeholder="Ваша фамилия" />
                  <MyInput type="text" placeholder="Номер телефона" />
                  <MyInput type="email" placeholder="E-mail" />
                  <MyInput type="text" placeholder="Страна" />
                  <MyInput type="text" placeholder="Населённый пункт" />
                  <MyInput type="text" placeholder="Область / регион" />
                  <MyInput type="text" placeholder="Адрес" />
                </div>
              </fieldset>
            </form>
          </div>
          <div className="payment__order payment__box">
            <h2 className="payment__title">ВАШ ЗАКАЗ</h2>
            <ul className="payment__order-list">
              {cartItems.map((item) => (
                <li key={item.id} className="payment__order-item">
                  <img src={item.urlImage} className="payment__order-img" />
                  <div className="payment__order-info">
                    <p className="payment__order-title">{item.title}</p>
                    <p>{item.size} <br /> </p>
                    {item.count > 1 ? <p>{item.count} шт</p> : null}
                    
                    <p className="payment__order-price">{`${Number(item.price) * Number(item.count)} Р`}</p>
                    <button
                      className="payment__order-close"
                      onClick={() => {
                        confirm('Вы действительно хотите удалить товар?')?
                        dispatch(remoteItem(item)):
                        null;
                      }}
                    >
                      <Close />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="payment__order-total">
              <Total />
            </div>
          </div>
          <div className="payment__ways payment__box">
            <form action="payment__ways-form">
              <fieldset className="payment__ways-fieldset">
                <legend className="payment__title payment__ways-title">
                  2. СПОСОБ ОПЛАТЫ
                </legend>
                <label className="payment__ways-card-label">
                  <input
                    className="payment__ways-radio"
                    type="radio"
                    name="pay-way"
                    id=""
                    value="card"
                  />
                  Оплатить картой
                  <ul className="payment__ways-list">
                    <li className="payment__ways-item"></li>
                    <li className="payment__ways-item"></li>
                    <li className="payment__ways-item"></li>
                  </ul>
                </label>
                <label className="payment__ways-cash-label">
                  <input
                    className="payment__ways-radio"
                    type="radio"
                    name="pay-way"
                    id=""
                    value="nal"
                  />
                  Произвести оплату в мастерской Дмитрия Федорова
                </label>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Payment;
