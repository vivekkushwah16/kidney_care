import React,{useState} from "react";
import style from "./style.module.css";
const MostLiked = ({ title, background, likes,id}) => {
  const[like,setLike]=useState(null); 
  function handleLike(){
   setLike((prev)=>id===prev?null:id)
  }
  return (
    <article className={style.videoCard}>
      <div className={style.cardImage}>
        <img src={background} alt="card background"  />
      </div>
      <div className={style.cardBody}>
        <div className={style.content}>
          <h1>{title}</h1>
          <div className={style.likeCounter}>
            <div className={style.Likes}>
              <i className={`icon-heart ${like? style.liked : ""} `} onClick={handleLike}></i>
              <span>{likes}</span>
            </div>
            <span>Share</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MostLiked;
