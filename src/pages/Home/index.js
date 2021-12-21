import React, { useState } from "react";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import style from "./style.module.css";
import Slider from "react-slick";
import TagRow from "../../components/TagRow";
import VideoRows from "../../components/VideoRow";
import Features from "../../components/VideoCards/Features";
import { FeatureCard } from "../../Constants/FeatureCards";
import SamplePrevArrow from "../../components/Arrows/SamplePrevArrow";
import SampleNextArrow from "../../components/Arrows/SampleNextArrow";
import MostLiked from "../../components/VideoCards/MostLiked";
import { MostLikedCards } from "../../Constants/MoskLikeCards";
import Recommanded from "../../components/VideoCards/Recommanded";
import { RecommandedCard } from "../../Constants/RecommandedCards";
import { CommingSoonCards } from "../../Constants/CommingSoonCards";
import CommingSoon from "../../components/VideoCards/ComingSoon";
import "../../assets/css/global.css"
const Home = () => {
  const[like,setLike]=useState(null);
  var settings = {
    dots: false,
    autoplay:true,
    infinite: true,
    prevArrow: <SamplePrevArrow color="#0463a0" />,
    nextArrow: <SampleNextArrow color="#0463a0" />,
    slidesToShow: 1,
    variableWidth: false,
    slidesToScroll: 1,
    rows: 1,
    responsive: [{
      breakpoint: 767,
      settings: {
        dots: true,
        arrows:false,
        dotsClass:style.custom_dots,
      }}]
  };
  return (
    <>
      <section className={style.wrapper}>
        <Navbar />
        <Slider className={style.slider_banner} {...settings}>
          <Banner />
          <Banner />
          <Banner />
          <Banner />
        </Slider>
        <TagRow />
      </section>
      <div className={style.videoWrapper}>
        {/* =================== Features Videos ===========================  */}

        <VideoRows heading="Featured Videos">
          {FeatureCard.map((item) => (
            <Features
              key={item.key}
              name={item.docName}
              description={item.docDes}
              background={item.cardBgImage}
              image={item.docImage}
              summary={item.cardSummary}
            />
          ))}
        </VideoRows>
        {/* =================== Most Liked Videos ===========================  */}

        <VideoRows heading="Most Liked Videos">
        {MostLikedCards.map((item) => (
            <MostLiked
              key={item.key}
              title={item.title}
              background={item.image}
              likes={item.likes}
              setLike={setLike}
              like={like}
              id={item.key}
            />
          ))}
        </VideoRows>
         {/* =================== Recommended Videos ===========================  */}

         <VideoRows heading="Recommended Videos">
        {RecommandedCard.map((item) => (
            <Recommanded
              key={item.key}
              title={item.title}
              background={item.image}
              name={item.name}
              description={item.description}
              id={item.key}
            />
          ))}
        </VideoRows>
         {/* =================== Comming Soon Videos ===========================  */}

         <VideoRows heading="Comming Soon">
        {CommingSoonCards.map((item) => (
            <CommingSoon
              key={item.key}
              title={item.title}
              background={item.image}
              id={item.key}
            />
          ))}
        </VideoRows>
      </div>
    </>
  );
};

export default Home;
