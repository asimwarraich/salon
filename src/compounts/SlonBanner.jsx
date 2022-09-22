import React from "react";
import bannerhome from "../imgs/bannerhome.png";
import bannerleave from "../imgs/bannerleave.png";
import bannerleftleave from "../imgs/bannerleftleave.png";
export default function SlonBanner() {
  return (
    <>
      <div className="home__banner__section">
        <div className="home__banner__section__left__leave">
          <img src={bannerleftleave} alt="banner" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="70"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
          className="home__section__banner__wraper"
        >
          <div
            data-aos="fade-right"
            data-aos-delay="40"
            data-aos-duration="1800"
            data-aos-easing="ease-in"
            className="home__section__banner__wraper__contant"
          >
            <div className="home__section__banner__wraper__contant__heading">
              An Atmosphere of serenity & Comfort
            </div>
            <div className="home__section__banner__wraper__contant__sub__heading">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500
            </div>
          </div>
          <div className="home__section__banner__wraper__img">
            <img src={bannerhome} alt="" />
          </div>
        </div>
        <div className="home__banner__section__right__leave">
          <img src={bannerleave} alt="" />
        </div>
      </div>
    </>
  );
}
