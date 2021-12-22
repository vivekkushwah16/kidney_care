import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import classes from "./style.module.css";
import logo from "../../assets/images/Group 824.png";
import { Link } from "react-router-dom";
import downArrow from "../../assets/images/Polygon 1.png";
import profileImage from "../../assets/images/Ellipse 8(1).png";
const Navbar = () => {
  const [openNav, setNav] = useState(false);
  const location = useLocation();
  console.log(location)
  return (
    <>
      <section className={classes.Wrapper}>
        <nav className="container d-flex justify-content-between align-items-center">
          <div className={classes.logo}>
            <img src={logo} alt="WEBPAGE LOGO" />
          </div>
          <div className={classes.menuIcon} onClick={() => setNav(true)}>
            <i className="icon-menu"></i>
          </div>
          <ul
            className={`${classes.menuItems} ${openNav && classes.mobileNav}`}
          >
            <li className={classes.CloseIcon} onClick={() => setNav(false)}>
              <i className="icon-Close"></i>
            </li>
            <li>
              <NavLink
                exact
                to="/home"
                className={classes.link}
                activeClassName={classes.active}
              >
                About Kidney disease &#62;
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/video"
                className={classes.link}
                activeClassName={classes.active}
              >
                Video Library{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/events"
                className={classes.link}
                activeClassName={classes.active}
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/community"
                className={classes.link}
                activeClassName={classes.active}
              >
                Community & Forums
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/blog"
                className={classes.link}
                activeClassName={classes.active}
              >
                Blogs & Research
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/stories"
                className={classes.link}
                activeClassName={classes.active}
              >
                Stories
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/about"
                className={classes.link}
                activeClassName={classes.active}
              >
                {" "}
                About Us
              </NavLink>
            </li>
            {!openNav && (
              <>
                <li>
                  <svg
                    className={classes.bell}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_b_104_279)">
                      <rect width="32" height="32" rx="16" fill="white" />
                      <rect
                        x="0.25"
                        y="0.25"
                        width="31.5"
                        height="31.5"
                        rx="15.75"
                        stroke="#0869A8"
                        strokeWidth="0.5"
                      />
                    </g>
                    <path d="M16 24C16.825 24 17.5 23.3077 17.5 22.4615H14.5C14.5 22.8696 14.658 23.2609 14.9393 23.5494C15.2206 23.8379 15.6022 24 16 24ZM20.5 19.3846V15.5385C20.5 13.1769 19.27 11.2 17.125 10.6769V9H14.875V10.6769C12.7225 11.2 11.5 13.1692 11.5 15.5385V19.3846L10 20.9231V21.6923H22V20.9231L20.5 19.3846Z" />
                    <defs>
                      <filter
                        id="filter0_b_104_279"
                        x="-54"
                        y="-54"
                        width="140"
                        height="140"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur
                          in="BackgroundImage"
                          stdDeviation="27"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_104_279"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_104_279"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </li>
                <li>
                  <div className={classes.profile}>
                    <img
                      className={classes.profileImage}
                      src={profileImage}
                      alt="user profile "
                    />
                    <div className={classes.more}>
                      <img src={downArrow} alt="click to view more" />
                    </div>
                  </div>
                </li>
              </>
            )}
          </ul>
        </nav>
      </section>
      <section className={`${classes.FooterWrapper}`}>
        <nav className={`${classes.footer} container`}>
          <div className={classes.content}>
            <div className={classes.icon}>
              <i className="icon-home-outline"></i>
            </div>
            <h1>Home</h1>
          </div>
          <div className={classes.content}>
            <div className={classes.icon}>
              <i class="icon-events-outline"></i>
            </div>
            <h1>Events</h1>
          </div>
          <div className={classes.content}>
            <div className={classes.icon}>
              <i class="icon-notification-outline"></i>
            </div>
            <h1>Notification</h1>
          </div>
          <div className={classes.content}>
            <div className={classes.icon}>
              <i class="icon-profile-outline"></i>
            </div>
            <h1>Profile</h1>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
