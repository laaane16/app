import { useNavigate } from "react-router-dom";
import React from "react";

import MyButton from "./UI/button/MyButton";
import { ICard } from "../types/types";


const Card: React.FC<ICard> = ({ title, urlImage, price, id }) => {
  const navigate = useNavigate();

  return (
    <li className="card">
      <img className="card__photo" src={urlImage} alt="" />
      <div className="card__info">
        <p className="card__title">{title}</p>
        <p className="card__price">{price} Р</p>
      </div>
      <MyButton
        onClick={() => {
          navigate(`/card/${id}`);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        clName="card__more"
      >
        ПОДРОБНЕЕ
      </MyButton>
    </li>
  );
};

export default Card;
