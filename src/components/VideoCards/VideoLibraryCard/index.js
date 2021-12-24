import React from "react";
import style from "./style.module.css";
import thumnail from "../../../assets/images/Recommanded/img_1.png";

function VideoLibraryCard() {
  return (
    <article className={style.moreVideos}>
      <div className={style.thumnail}>
        <img src={thumnail} alt="video thumnail" />
        <div className={style.videoTime}>
          <div className={style.line}></div>
          <div className={style.time}>10:00</div>
        </div>
      </div>
      <div className={style.videoDestail}>
        <h1>The Virtual Pulmonary Rehabilitation Laboratory</h1>
        <h2>Dr. Sally Singh</h2>
        <h3>phd, FCSP</h3>
        <div className={style.more}>
          <span>38K views</span>
          <span>1 month ago</span>
        </div>
      </div>
    </article>
  );
}

export default VideoLibraryCard;
