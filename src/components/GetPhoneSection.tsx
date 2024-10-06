import React from "react";
import { useRef } from "react";
import {MyButton, MyInput} from "./../components";


const GetPhoneSection: React.FC = (props) => {

  const phone = useRef<HTMLInputElement>(null);

  const onHandleClick = (e: React.MouseEvent<HTMLButtonElement>):void => {
    e.preventDefault();
    if (phone.current){
        phone.current.value = "";

    }
  }

  return (
    <section className="get-phone__section">
      <div className="_container get-phone__container">
        <div className="get-phone__content">
          <div className="get-phone__info">
            <h2 className="get-phone__title title">
              Вам все нравится,
              <br />
              но остались сомнения?
            </h2>
            <p className="get-phone__text">
              Пожалуйста укажите свой номер телефона и мы свяжемся с вами
            </p>
          </div>

          <form action="" method="post" className="form get-phone__form">
            <MyInput
              innerRef={phone}
              mask="+9 (999) 999-99-99"
              placeholder="Введите ваш номер телефона"
              clss="get-phone__input"
            />
            <MyButton
              onClick={onHandleClick}
              clName="get-phone__btn"
            >
              ОТПРАВИТЬ
            </MyButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetPhoneSection;
