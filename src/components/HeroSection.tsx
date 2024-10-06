import React, { FC } from "react";

interface HeroItem {
  title: string;
  description: string;
}

const HeroSection: FC = () => {
  const heroItems: HeroItem[] = [
    {
      title: "ПРОИЗВОДСТВО",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ipsa facere recusandae doloremque aperiam aut rem quis dolor minima est nemo.",
    },
    {
      title: "ИЗДЕЛИЯ",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ipsa facere recusandae doloremque aperiam aut rem quis dolor minima est nemo.",
    },
  ];

  return (
    <section className="hero">
      <div className="_container">
        <div className="hero__content">
          <ul className="hero__list">
            {heroItems.map((item) => (
              <li key={item.title} className="hero__item">
                <p className="hero__item-title">{item.title}</p>
                <p className="hero__item-descrip">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
