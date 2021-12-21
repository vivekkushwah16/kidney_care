import React from "react";
import style from "./style.module.css";
import doc_1 from "../../../assets/images/doc_1.png";
import doc_2 from "../../../assets/images/doc_2.png";
import doc_3 from "../../../assets/images/doc_3.png";
const imges = [
  {
    key: "1",
    img: doc_1,
  },
  {
    key: "2",
    img: doc_2,
  },
  {
    key: "3",
    img: doc_3,
  },
  {
    key: "4",
    img: doc_1,
  },
  {
    key: "5",
    img: doc_2,
  },
  {
    key: "6",
    img: doc_3,
  },
  
];
const Recommanded = ({ title, background, name, description, id }) => {
  return (
    <article className={style.videoCard}>
      <div className={style.cardImage}>
        <img src={background} alt="card background" />
      </div>
      <div className={style.cardBody}>
        <div className={style.content}>
          <h1>{title}</h1>
          {id === "1" ? (
            <div className={style.aboutDoctor}>
              {imges.map((image) => (
                <div key={image.key}>
                  {image.key <= 3 && (
                    <div className={style.docImage}>
                      <img src={image.img} alt="doctor" />
                    </div>
                  )}
                </div>
              ))}
              {imges.length > 3 && (
                <div className={style.otherImages}> + {imges.length - 3}</div>
              )}
            </div>
          ) : (
            <div className={style.aboutDoctor}>
              <div className={style.docImage}>
                <img src={doc_1} alt="doctor" />
              </div>
              <div className={style.aboutDoc}>
                <h1>{name}</h1>
                <h2>{description}</h2>
              </div>
            </div>
          )}
          <div className={style.BottomLine}></div>
        </div>
      </div>
    </article>
  );
};

export default Recommanded;
