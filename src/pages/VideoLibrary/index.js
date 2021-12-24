import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import doc2 from "../../assets/images/Ellipse 8(1).png";
import thumnail from "../../assets/images/Recommanded/img_1.png";
import logo2 from "../../assets/images/logo2.png";
import video from "../../assets/images/Rectangle 8.png";
import Footer from "../../components/Footer";

const VideoLibrary = () => {
  const [like, setLike] = useState(null);
  const [save, setSave] = useState(false);
  function handleLike(id){
   setLike((prev)=>prev === id ? null : id )
  }
  return (
    <>
      <section className={style.wrapper}>
        <nav className={style.Navbar}>
          <Navbar />
          <Link to="/">
            <i className="icon-prev_arrow"></i>
            Back to home
          </Link>
        </nav>
        <div className={`container  ${style.container} `}>
          <article className={style.videoCard}>
            <div className={style.videoHead}>
              <img className={style.logo} src={logo2} alt="logo" />
              <img className={style.video} src={video} alt="video" />
              <div className={style.doctor}>
                <div className={style.docName}>
                  <h1>Dr Vinu Gopal</h1>
                  <h1>Meitra Hospital, Calicut</h1>
                </div>
                <div className={style.blueDiv}></div>
              </div>
            </div>
            <div className={style.videoBody}>
              <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
              <div className={style.moreAboutVideo}>
                <div className={style.videIcons}>
                  <i onClick={()=>handleLike("like")}
                    className={`icon-like ${like === "like" && style.like}`}
                  ></i>
                  <span>3.8K</span>
                </div>
                <div className={style.videIcons}>
                  <i onClick={()=>handleLike("disLike")}
                    className={`icon-dis_like ${
                      like === "disLike" && style.disLike
                    }`}
                  ></i>
                  <span>2</span>
                </div>
                <div className={style.videIcons}>
                  <i onClick={()=>setSave(!save)} className={`icon-save ${ save  &&style.save}`}></i>
                  <span>save</span>
                </div>
              </div>
            </div>
            <div className={style.aboutDoctorWraper}>
              <img src={doc2} alt="doctor image" />
              <div className={style.aboutDoctor}>
                <h1>Dr. Sally Singh</h1>
                <h1>phd, FCSP</h1>
              </div>
            </div>
          </article>
          <div className={style.allVideos}>
            <h1 className={style.videosTitle}> Recommended Videos</h1>
            <Videos />
            <Videos /> <Videos />
            <Videos /> <Videos />
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

function Videos() {
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

export default VideoLibrary;
