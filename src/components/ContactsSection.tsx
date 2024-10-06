import Accordeon from "./UI/accordeon/Accordeon";
import Map from "./UI/map/Map";
import { FC, useState } from "react";
import React from "react";
import { IAccordeon } from "../types/types";

const ContactsSection: FC = () => {
    const [accordeon, setAccordeon] = useState<IAccordeon[]>([
        {
          id: 1,
          isOpen: false,
          title: "ЧАСТЫЙ ВОПРОС ПЕРВЫЙ",
          body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, aspernatur tempore quos, ipsa illo vitae voluptatum labore, repellat sequi qui architecto? Repellendus porro aperiam illum ducimus veniam incidunt, ea deserunt.",
        },
        {
          id: 2,
          isOpen: false,
          title: "ПРИМЕР АКТИВНОГО ВОПРОСА",
          body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, aspernatur tempore quos, ipsa illo vitae voluptatum labore, repellat sequi qui architecto? Repellendus porro aperiam illum ducimus veniam incidunt, ea deserunt.",
        },
        {
          id: 3,
          isOpen: false,
          title: "И ЕЩЕ ВОПРОС",
          body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, aspernatur tempore quos, ipsa illo vitae voluptatum labore, repellat sequi qui architecto? Repellendus porro aperiam illum ducimus veniam incidunt, ea deserunt.",
        },
      ]);

  return (
    <section id="contacts" className="contacts section">
      <div className="_container contacts__container">
        <div className="contacts__inner">
          <h2 className="contacts__title title">Контакты</h2>
        </div>
        <div className="contacts__content">
          <div className="contacts__info">
            <ul className="contacts__list">
              <li className="contacts__item">
                <p className="contacts__item-title">Телефон</p>
                <a className="contacts__item-descrip" href="tel:+79998086548">
                  +7 (999) 808 65 48
                </a>
              </li>
              <li className="contacts__item">
                <p className="contacts__item-title">Электронный адрес</p>

                <a  
                  className="contacts__item-descrip"
                  href="mailto:example@gmail.com"
                >
                  example@gmail.com
                </a>
              </li>
              <li className="contacts__item">
                <p className="contacts__item-title">Адрес</p>
                <address className="contacts__item-descrip">
                  Москва ул.Академика Королева 13 стр <br />1 подъезд 5 офис
                  960
                </address>
              </li>
              <li className="contacts__item">
                <p className="contacts__item-title">Время работы</p>
                <p className="contacts__item-descrip">
                  пн-пт: с 10:00 до 19:00 ч.
                </p>
              </li>
            </ul>
            <div className="contacts__accordeon-container">
              <Accordeon accordeon={accordeon} setAccordeon={setAccordeon} />
            </div>
          </div>
          <div className="contacts__map">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
