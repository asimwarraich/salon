import React from "react";
import Header from "../compounts/Header";
import Footer from "../compounts/Footer";
import OurVisionCard from "../compounts/OurVisionCard";
import aboutleave from "../imgs/aboutleave.png";
import footerleave from "../imgs/footerleave.png";
import aboutpic from "../imgs/aboutpic.png";
import vision from "../imgs/vision.png";
import headerleftlef from "../imgs/headerleftlef.png";
export default function Aboutus() {
  return (
    <>
      <Header />
      <div className="about__contant__container">
        <div className="about__container__left__leave">
          <img src={footerleave} alt="leave" />
        </div>
        <div className="about__contant__wraper">
          <div className="about__contant__wraper__btn">
            <button className="main__btn__contant">learn more</button>
          </div>
          <div className="about__contant__wraper__text">
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="about__contant__wraper__text__heading"
            >
              About Us
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              className="about__contant__wraper__text__sub__heading"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              odit quas assumenda eligendi. Excepturi aspernatur neque tempora
              dolorum dignissimos debitis, aliquid corporis cum accusantium
              natus eligendi, pariatur harum beatae at.Excepturi aspernatur
              neque tempora dolorum dignissimos debitis, aliquid corporis cum
              accusantium natus eligendi, pariatur harum beatae at. aliquid
              corporis cum accusantium natus eligendi, pariatur harum beatae at.
              <br />
              harum beatae at.Excepturi aspernatur neque tempora dolorum
              dignissimos debitis, aliquid corporis cum accusantium natus
              eligendi, pariatur harum beatae at. aliquid corporis cum
              accusantium natus eligendi, pariatur harum beatae at.
            </div>
          </div>
        </div>
        <div className="about__container__right__leave">
          <img src={aboutleave} alt="About" />
        </div>
      </div>
      <div className="about__pic__section">
        <img src={aboutpic} alt="about" />
      </div>
      <div className="about__vision__section">
        <div className="about__vision__leave">
          <img src={headerleftlef} alt="vision" />
        </div>
        <div className="our__vision__wraper">
          <div className="about__vision__section__text">
            <div className="about__vision__section__text__heading">
              Our Vision
            </div>
            <div className="about__vision__section__text__sub__heading">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              tempore laudantium voluptas nam neque delectus eaque dignissimos
              sapiente a inventore.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quod tempore laudantium voluptas nam neque
              delectus eaque dignissimos sapiente a inventore.Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quod tempore laudantium
              voluptas nam neque delectus eaque dignissimos sapiente a
              inventore.
            </div>
            <div className="about__vision__btn">
              <button className="main__btn__contant">Learn more</button>
            </div>
          </div>
          <div className="about__vision__section__img">
            <img src={vision} alt="" />
          </div>
        </div>
      </div>
      <div className="about__chose__section">
        <div className="about__chose__section__heading">Our Choose Us</div>
        <div className="our__choose__card__wraper">
          <OurVisionCard />
        </div>
      </div>
      <Footer />
    </>
  );
}
