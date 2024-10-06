import Image from "./UI/image/Image";
import previewImage from "./../assets/img/previewImage.jpg";
import React, { FC } from "react";

const PreviewSection: FC = () => {
  return (
    <section className="section preview">
      <div className="_container">
        <div className="preview__content">
          <Image clss="preview__img" imageSrc={previewImage} />
          <div className="preview__info">
            <h2 className="preview__title">
              Крест черное дерево
              <br /> и золото
            </h2>
            <p className="description preview__descrip">
              Эбеновое дерево (чёрное дерево) — относится к роду тропических
              деревьев (Diospyros) произрастающих во влажных тропических лесах
              Африки, Юго-Восточной Азии, Индии и на Острове Цейлон.
            </p>
            <p className="preview__price">127 500 P</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
