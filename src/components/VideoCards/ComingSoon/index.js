import React from "react";
import style from "./style.module.css";

const CommingSoon = ({ title, background, name, description, id }) => {
  return (
    <article className={style.videoCard}>
      <div className={style.cardImage}>
        <img  src={background} alt="card background" />
      </div>
      <div className={style.cardBody}>
        <div className={style.content}>
          <h1>{title}</h1>
          <div className={`${style.commingBtn}`}>Comming Soon</div>
        </div>
      </div>
    </article>
  );
};

export default CommingSoon;
