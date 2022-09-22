import React from "react";
import Header from "../compounts/Header";

import headerimg from "../imgs/headerimg.png";
import headerleftlef from "../imgs/headerleftlef.png";
import headerrightlef from "../imgs/headerrightlef.png";
import Footer from "../compounts/Footer";
import { NavLink } from "react-router-dom";
import SalonBanner from "../compounts/SlonBanner";
import AboutSalon from "../compounts/AboutSalon";
import footerleave from "../imgs/footerleave.png";

export default function Home() {
  return (
    <>
      <Header />
      <div data-aos="fade-up" className="main__header__container">
        <div className="header__left__leave">
          <img src={headerleftlef} alt="header leave" />
        </div>

        <div data-aos="fade-up" className="header__container__wraper">
          <div className="main__header__container__left">
            <img src={headerimg} alt="header img" />
          </div>
          <div className="main__header__container__right">
            <div className="main__header__container__right__contant">
              <div className="main__header__container__right__contant__heading">
                Discover the Gorgeous Shine Within Us
              </div>
              <div className="main__header__container__right__contant__sub__heading">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
              <div className="main__btn">
                <NavLink to="/booking" className="main__btn__contant">
                  Book Your Appointmnet
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="header__right__leave">
          <img src={headerrightlef} alt="header leave" />
        </div>
      </div>
      <div className="services__section__container">
        <div className="services__section__heading">
          We Provide a Full Range of Services
        </div>
        <div className="services__svg__side__wraper">
          <div className="services__section__container__svg">
            <svg
              width="783"
              height="725"
              viewBox="0 0 783 725"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M218.32 0.246015C-160.786 -5.60054 -275.764 93.8586 -312.129 182.531C-367.586 327.72 -330.369 541.878 -199.776 650.834C-39.77 784.33 -64.5492 691.948 155.841 715.684C431.561 745.379 747.004 567.428 779.733 324.797C812.462 82.1657 597.427 6.09257 218.32 0.246015Z"
                fill="#FFF6EE"
              />
            </svg>
            <div className="services__left__leave">
              <img src={footerleave} alt="leave" />
            </div>
          </div>
        </div>
      </div>
      <SalonBanner />
      <AboutSalon />
      <Footer />
    </>
  );
}
