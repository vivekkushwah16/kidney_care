import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import classes from "./style.module.css";
import logo from "../../assets/images/Group 824.png";
import downArrow from "../../assets/images/Polygon 1.png";
import profileImage from "../../assets/images/Ellipse 8(1).png";
const Footer = () => {
  const [openNav, setNav] = useState(false);
  const location = useLocation();
  console.log(location)
  console.log(location.pathname)
  return (
    <>
      <section className={`${classes.FooterWrapper}`}>
        <nav className={`${classes.footer} container`}>
          <div className={classes.content}>
            <div className={classes.icon}>
              <i className={location.pathname === "/" ? "icon-home-outline" : "icon-home"}></i>
            </div>
            <h1 className={location.pathname === "/" ? classes.textBold : ""}>Home</h1>
          </div>
          <div className={classes.content}>
            <div className={classes.icon}>
              <i  className={location.pathname === "/events" ? "icon-events-outline" :"icon-events"}></i>
            </div>
            <h1 className={location.pathname === "/events" ? classes.textBold : ""}>Events</h1>
          </div>
          <div className={classes.content}>
            <div className={classes.icon}>
              <i className="icon-notification-outline"></i>
            </div>
            <h1 className={location.pathname === "/notification" ? classes.textBold : ""}>Notification</h1>
          </div>
          <div className={classes.content}>
            <div className={classes.icon}>
              <i className="icon-profile-outline"></i>
            </div>
            <h1 className={location.pathname === "/profile" ? classes.textBold : ""}>Profile</h1>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Footer;
