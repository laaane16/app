import imgSrc from "./../assets/img/asd.png";
import CategoriesSectionCarousel from "./carousels/CategoriesSectionCarousel";
import React, { FC } from "react";

const CategoriesSection:FC = () => {
  return (
    <section id = 'categories' className="section categories">
      <div className="_container">
        <div className="categories__content">
          <div className="categories__item">
            <img className="categories__item-img" src={imgSrc} alt="" />
            <div className="categories__item-box">
              <p className="categories__item-title">
                Крест из белого золота на шнурке
              </p>
              <p className="categories__item-descrip">29 900 Р</p>
            </div>
          </div>
          <div className="categories__item">
            <p className="categories__item-info">КРЕСТЫ</p>
          </div>
          <div className="categories__item">
            <p className="categories__item-info">БРАСЛЕТЫ</p>
          </div>
          <div className="categories__item">
            <p className="categories__item-info">ПОДВЕСКИ</p>
          </div>
          <div className="categories__item">
            <CategoriesSectionCarousel/>
          </div>
          <div className="categories__item">
            <p className="categories__item-info">ШНУРКИ И ЦЕПИ</p>
          </div>
          <div className="categories__item">
            <p className="categories__item-info">ПОД ЗАКАЗ</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
