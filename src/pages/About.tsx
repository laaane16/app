import React from "react";
import {Image, masterImage, crossPhoto, doubleCrossPhoto} from "../components";

type ContentItem = {
  name: string;
  title: string;
  image: string;
  text: string[];
};

const content: ContentItem[] = [
  {
    name: "master",
    image: masterImage,
    title: "Дмитрий Федоров",
    text: [
      "Мастер ювелир, человек с золотыми руками, создающий изделия православного направления. Родился и вырос Дмитрий в Костроме, многие наверное не знают что Кострома — ювелирная столица России.",
      "Ювелирное дело стало образом жизни для Дмитрия. Вот, что рассказывает сам мастер о своём творчестве:",
    ],
  },
  {
    name: "work",
    image: crossPhoto,
    title: "Как давно вы занимаетесь ювелирным делом?",
    text: [
      "Я много лет занимаюсь ювелирным делом и пробуя себя в различных его направлениях, я пришел к тому, что моя душа лежит именно к православным изделиям, и я хочу расти и развиваться именно в этом направлении.",
    ],
  },
  {
    name: "inspiration",
    image: doubleCrossPhoto,
    title: "Что вас вдохновляет?",
    text: [
      "Мне дарит энергию сам процесс творчества. Когда я рисую эскиз будущего изделия, мне не терпится воплотить его в жизнь. Ну и конечно же я воодушевляюсь положительными отзывами и словами благодарности людей, которые приобретают мои изделия.",
      "За это я благодарен им в ответ.Нужно просто хотеть и делать. Но самое главное нужно любить то, что делаешь. И тогда успех не zзаставит себя долго ждать! Всем добра Друзья.",
    ],
  },
];

const About: React.FC = () => {
  return (
    <main className="about-page app-content">
      {content.map((item) => (
        <section key={item.name} className={`${item.name}`}>
          <div className="_container">
            <div className={`${item.name}__content content`}>
              {item.name === "master" ? (
                <div className="photo-container">
                  <Image
                    imageSrc={item.image}
                    clss={`${item.name}__image image`}
                  ></Image>
                </div>
              ) : (
                <Image
                  imageSrc={item.image}
                  clss={`${item.name}__image image`}
                ></Image>
              )}
              <div className="info-container">
                <h2 className="title">{item.title}</h2>
                {item.text.map((paragraph, index) => (
                  <p
                    key={item.image + index}
                    className={`${item.name}__text text`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default About;
