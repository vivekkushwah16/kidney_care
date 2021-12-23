import React, { useState } from "react";
import {  useHistory } from "react-router-dom";
import classes from "./style.module.css";
const Footer = () => {
  const[selectOption,setOption]=useState("home")
  // const {location} = useHistory();
  const history = useHistory();
  console.log(history)
  function handleSwitchPage(url){
   history.push(`/${url}`)
   setOption(url)
  }
  return (
    <>
      <section className={`${classes.FooterWrapper}`}>
        <nav className={`${classes.footer} container`}>
          <div className={classes.content}>
            <div className={classes.icon}>
              <i className={selectOption === "home" ? "icon-home-outline" : "icon-home"}></i>
            </div>
            <h1 className={selectOption === "home" ? classes.textBold : ""}>Home</h1>
          </div>
          <div className={classes.content} onClick={() => handleSwitchPage("events")}>
            <div className={classes.icon}>
              <i  className={selectOption === "events" ? "icon-events-outline" :"icon-events"}></i>
            </div>
            <h1 className={selectOption === "events" ? classes.textBold : ""}>Events</h1>
          </div>
          <div className={classes.content} >
            <div className={classes.icon}>
              <i className="icon-notification-outline"></i>
            </div>
            <h1 className={selectOption === "notification" ? classes.textBold : ""}>Notification</h1>
          </div>
          <div className={classes.content} >
            <div className={classes.icon}>
              <i className="icon-profile-outline"></i>
            </div>
            <h1 className={selectOption === "profile" ? classes.textBold : ""}>Profile</h1>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Footer;
