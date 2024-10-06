import React from "react";
import SectionAboutFirstItem from "./UI/icons/SectionAboutFirstItem";
import SectionAboutSecondItem from "./UI/icons/SectionAboutSecondItem";
import SectionAboutThirdItem from "./UI/icons/SectionAboutThirdItem";


const AboutSectionList: React.FC = () => {
  const aboutItems: string[] = ["РУЧНАЯ РАБОТА", "УНИКАЛЬНОСТЬ", "ГАРАНТИЯ"];

  return (
    <ul className="about__list">
      {aboutItems.map((item, index) => (
        <li key={item} className="about__item">
          {index === 0 ? (
            <SectionAboutFirstItem clss="about__item-icon" />
          ) : index === 1 ? (
            <SectionAboutSecondItem clss="about__item-icon" />
          ) : (
            <SectionAboutThirdItem clss="about__item-icon" />
          )}
          <p className="about__item-descrip">{item}</p>
        </li>
      ))}
    </ul>
  );
};

export default AboutSectionList;
