import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../redux/store";


import { addSomeItem } from "../redux/slices/cart/slice";
import { fetchCardById } from "../redux/slices/card/asyncActions";
import {
  selectCardItem,
  selectCardStatus,
} from "../redux/slices/card/selectors";
import { ICardFromCart, Status } from "../types/types";
import { CardPageSkeleton, MySelect, Counter, MyButton, Image } from "../components";

interface Sizes {
  title: string;
  value: string;
}

interface CardDescriptionValue {
  title: string;
  body: string;
  value: string;
}

const sizeOptions: Sizes[] = [
  { title: "40", value: "40" },
  { title: "44", value: "44" },
  { title: "48", value: "48" },
];

const CardPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const card = useSelector(selectCardItem);

  const status = useSelector(selectCardStatus);

  const { id } = useParams<string>();

  const [popUp, setPopUp] = useState<boolean>(false);

  const [activeSize, setActiveSize] = useState<string>("default");

  const [activeCardDescrip, setActiveCardDescrip] =
    useState<string>("description");

  const cardDescription: CardDescriptionValue[] = [
    { title: "ОПИСАНИЕ", body: card.body || "", value: "description" },
    {
      title: "ГАРАНТИИ",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Solutabeatae tempore, sunt sit magnam eum sapiente tenetur voluptatum?Vel fuga nulla inventore illum. Corporis exercitationem officiisdistinctio ducimus, sunt delectus.",
      value: "guarantees",
    },
    {
      title: "УХОД ЗА ИЗДЕЛИЕМ",
      body: "Lorem ipsum dolor. Smet casdur adipisicing elit. Eatae tempore, sunt sit magnam eum sapiente tenetur voluptatum?Vel fuga nulla inventore illum. Corporis exercitationem officiisdistinctio ducimus, sunt delectus.",
      value: "care",
    },
  ];

  useEffect(() => {
    setPopUp(false);
  }, [activeSize]);

  useEffect(() => {
    if (id) {
      dispatch(fetchCardById(id));
    }
  }, []);

  const addInCart = () => {
    const item: ICardFromCart = {
      title: card.title,
      urlImage: card.urlImage,
      id: card.id,
      price: card.price,
      count: count.current,
      size: activeSize,
    };
    dispatch(addSomeItem(item));
  };

  let count = useRef(1);

  return (
    <main className="app-content">
      <div className="_container">
        {status === Status.ERROR ? (
          <h1 className="warning-message">
            Ошибка сервера, попробуйте зайти позже
          </h1>
        ) : status === Status.LOADING ? (
          <div className="product-card__content">
            <CardPageSkeleton />
          </div>
        ) : (
          <div className="product-card__content">
            <div className="product-card__photo-container">
              <Image clss="product-card__photo" imageSrc={card.urlImage} />
            </div>
            <div className="product-card__info">
              <div className="product-card__title">{card.title}</div>
              <div className="product-card__price">{`${card.price} Р`}</div>
              <MySelect
                value={activeSize}
                onChange={setActiveSize}
                clss="product-card__select"
                options={sizeOptions}
                defaultValue="Размер"
              />
              <div className="product-card__buttons">
                <Counter
                  onDecrement={() => {
                    count.current = count.current - 1;
                  }}
                  onIncrement={() => {
                    count.current = count.current + 1;
                  }}
                  initial={1}
                  limit={1}
                />

                <MyButton
                  onClick={
                    activeSize === "default"
                      ? () => {
                          setPopUp(true);
                        }
                      : addInCart
                  }
                  clName="product-card__cart-btn"
                >
                  <div className={popUp === true ? "pop-up active" : "pop-up"}>
                    <div className="pop-up__content">Выберите размер</div>
                  </div>
                  В КОРЗИНУ
                </MyButton>
              </div>
              <div className="product-card__description">
                {cardDescription.map((item) => (
                  <>
                    <p
                      onClick={() => {
                        setActiveCardDescrip(item.value);
                      }}
                      className={
                        activeCardDescrip === item.value
                          ? "product-card__description-title active"
                          : "product-card__description-title"
                      }
                    >
                      {item.title}
                    </p>
                    <p
                      className={
                        activeCardDescrip === item.value
                          ? "product-card__description-body active"
                          : "product-card__description-body"
                      }
                    >
                      {item.body}
                    </p>
                  </>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default CardPage;
