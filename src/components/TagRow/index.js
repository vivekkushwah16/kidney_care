import React from "react";
import style from "./style.module.css";
const TagRow = () => {
  return (
    <>
      <section className={style.wrapper}>
        <h1>Tags:</h1>
        <div className={`${style.tag}`}>
          <button className="btn">COVID</button>
        </div>
        <div className={`${style.tag}`}>
          <button className="btn">Kidney</button>
        </div>
        <div className={`${style.tag}`}>
          <button className="btn">Dialysis</button>
        </div>
        <div className={`${style.tag}`}>
          <button className="btn">Kids&Covid</button>
        </div>
        <div className={`${style.tag}`}>
          <button className="btn">CovidTalks</button>
        </div>
      </section>
    </>
  );
};

export default TagRow;
