import React, { FC, memo } from "react";
import { IFilter } from "../types/types";
import { ICategory } from "../redux/slices/filter/types";


interface CardsCategoriesProps {
  categories: IFilter[];
  onClick: (i: any) => void;
  value: ICategory;
  filt: string;
}

const CardsCategories: FC<CardsCategoriesProps> = memo(
  ({ categories, onClick, value, filt }) => {
       
    return (
      <>
        <ul className="cards-categories__list">
          {categories.map((item, index) => (
            <li
              key={item.title}
              onClick={() => {
                onClick(item.value);
              }}
            >
              <button
                className={
                  value[filt] === item.value
                    ? "cards-categories__item active"
                    : "cards-categories__item"
                }
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
);

export default CardsCategories;
