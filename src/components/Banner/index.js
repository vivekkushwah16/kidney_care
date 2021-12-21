import React from "react";
import style from "./style.module.css";
import doc2 from "../../assets/images/Ellipse 8(1).png";
import doc1 from "../../assets/images/Ellipse 8.png";
const Banner = () => {
  return (
    <>
      <section className={style.wrapper}>
        <div className="container">
          <article className={style.article}>
            <p className={style.summary}>2 Hours of discussion on</p>
            <h1 className={style.mainHeading}>
              Organ Donation: <br />
              <strong>Rules and Changes</strong>
            </h1>
            <div className={style.DoctorsWrapper}>
              <div className={style.doctor}>
                <img src={doc1} alt="" />
                <div className={style.aboutDoctor}>
                  <h1>Dr Vinu Gopal</h1>
                  <h1>Meitra Hospital, Calicut</h1>
                </div>
              </div>
              <div className={style.doctor}>
                <div>
                <i className="icon-calender"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span><span className="path11"></span><span className="path12"></span><span className="path13"></span><span className="path14"></span><span className="path15"></span><span className="path16"></span></i>
                </div>
                <h1 className={style.time}>10 JuLY 2021</h1>
              </div>
              <div className={style.doctor}>
                <img src={doc2} alt="" />
                <div className={style.aboutDoctor}>
                  <h1>Ms Maryann Mannaseh</h1>
                  <h1>Moderator</h1>
                </div>
              </div>
              <div className={style.doctor}>
                <div>
                <i className="icon-time_loop"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span></i>
                </div>
                <h1 className={style.time}>10 JuLY 2021</h1>
              </div>
            <button className="btn btn-secondary">WATCH NOW</button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Banner;
