import { Link } from "react-router-dom";
import React from "react";
import { Facebook, Inst, Vk } from './../components';


interface IlistItem {
  link: string;
  title: string;
}

type Ilist = IlistItem[];

const Footer: React.FC = () => {
  const handleClick = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const lists: Ilist[] = [
    [
      { link: "/about", title: "Мастер" },
      { link: "/catalog", title: "Каталог" },
      { link: "/contacts", title: "Контакты" },
    ],
    [
      { link: "#", title: "Гарантия" },
      { link: "#", title: "Сертификаты сайта" },
      { link: "#", title: "Карта сайта" },
      { link: "#", title: "Подписка на возможности" },
    ],
  ];

  const infoList: Ilist = [
    { link: "https://www.vk.com", title: "Vk" },
    { link: "https://www.instagram.com/", title: "Instagram" },
    { link: "https://www.facebook.com", title: "Facebook" },
  ];

  return (
    <footer id="footer" className="footer">
      <div className="_container">
        <div className="footer__content">
          <nav className="footer__nav">
            {lists.map((list, index) => (
              <ul key={index}
                className={
                  index
                    ? "footer__list footer__list_color_gray"
                    : "footer__list"
                }
              >
                {list.map((item) => (
                  <li key={item.title}className="footer__item">
                    <Link
                      onClick={index ? () => {} : handleClick}
                      to={item.link}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
          <div className="footer__info">
            <a className="footer__info-tel" href="tel:+79998086548">
              +7 (999) 808 65 48
            </a>
            <p className="footer__info-schedule">пн-пт: с 10:00 до 19:00 ч.</p>
            <ul className="footer__info-list">
              {infoList.map((item) => (
                <li key={item.title} className="footer__info-item">
                  <a target="_blank" href={item.link}>
                    {(item.title === "Vk" && <Vk />) ||
                      (item.title === "Instagram" && <Inst />) ||
                      (item.title === "Facebook" && <Facebook />)}
                  </a>
                </li>
              ))}
            </ul>
            <p className="footer__info-text">© 2020 Дмитрий Федоров</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
