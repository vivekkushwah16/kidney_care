import React from 'react'
import style from "./style.module.css"
import docBGImg from "../../../assets/images/Rectangle_66.png";

const Features = ({name,description,background,image,summary}) => {
    return (
        <>
          <article className={style.videoCard}>
            <div className={style.cardBackgoundImage}>
              <img src={background} alt="video card background" />
            </div>
            <div className={style.videoContent}>
              <div className={style.docBgImg}>
                <img src={docBGImg} alt="red backgound behind of doctor" />
              </div>
              <div className={style.docImage}>
                <img src={image}  alt="doctor" />
              </div>
              <h1 className={style.aboutDoc}>
               {summary}
              </h1>
              <div className={style.docDetails}>
                <h1 className={`${style.docName}`}>{name}</h1>
                <h2 className={style.docDes}>{description}</h2>
              </div>
              <div className={style.BottomLine}></div>
            </div>
          </article>   
        </>
    )
}

export default Features
