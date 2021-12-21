import React from "react";
import style from "./style.module.css";
import Slider from "react-slick";
import SampleNextArrow from "../Arrows/SampleNextArrow";
import SamplePrevArrow from "../Arrows/SamplePrevArrow";

const VideoRows = (props) => {
  const setting = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    rows: 1,
    slidesToShow: 3,
    variableWidth: true,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow: <SamplePrevArrow color="#FFF" />,
    nextArrow: <SampleNextArrow color="#FFF" />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
        }
      },
      
      {
        breakpoint: 572,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
        }
      }
    ]
  };
  
  
  return (
    <>
      <section className={`${style.wrapper}`}>
        <div className={style.videoTile}>
          <h1 className={style.videoHeading}>{props.heading}</h1>
          <p>view all &#62;</p>
        </div>
        <div className={style.videos}>
          <Slider style={{display:"flex"}} {...setting}>{props.children}</Slider>
        </div>
      </section>
    </>
  );
};

export default VideoRows;
