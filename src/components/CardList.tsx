import {Card, CardSkeleton} from "./../components";
import { ICard, Status } from "../types/types";
import React from "react";

interface CardListProps {
  status: Status;
  cards: ICard[];
}

const CardList: React.FC<CardListProps> = ({ status, cards }) => {
  return (
    <ul className="cards">
      {status === Status.LOADING
        ? [...new Array(6)].map((i, index) => <CardSkeleton key={index} />)
        : cards.map((card, index) => (
            <Card
              id = {card.id}
              key={card.id}
              title={card.title}
              price={card.price}
              urlImage={card.urlImage}
            ></Card>
          ))}
    </ul>
  );
};

export default CardList;
