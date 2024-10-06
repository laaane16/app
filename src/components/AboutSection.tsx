import { Link } from "react-router-dom";
import {Image, masterPhoto, AboutSectionList} from "./../components";
import React from "react";

const AboutSection: React.FC = () => {

  return (
    <section id="about" className="about section">
      <div className="_container">
        <div className="about__content">
          <div className="about__img-container">
            <Image clss="about__img" imageSrc={masterPhoto} />
          </div>
          <div className="about__info">
            <h2 className="about__title title">О мастере</h2>
            <p className="description about__descrip">
              Дмитрий Федоров — мастер ювелир, человек с золотыми руками,
              создающий изделия православного направления. Родился и вырос
              Дмитрий в Костроме, многие наверное не знают что Кострома —
              ювелирная столица России.
            </p>
            <Link
              className="about__more"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              to="/about"
            >
              ПОДРОБНЕЕ
            </Link>
            <AboutSectionList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
