import React from "react";
import abouthome from "../imgs/abouthome.png";
export default function AboutSalon() {
  return (
    <>
      <div className="about__home__section">
        <div className="about__home__section__img">
          <img src={abouthome} alt="" />
        </div>
        <div className="about__home__section__contant">
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            className="about__home__section__contant__heading"
          >
            About Saloon Services
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            className="about__home__section__contant__sub__heading"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="10"
            data-aos-duration="2500"
            data-aos-easing="ease-in"
            className="about__home__section__contant__button"
          >
            <button className="main__btn__contant">learn more</button>
          </div>
        </div>
      </div>
    </>
  );
}
