import React from "react";
import HeaderTwo from "../compounts/HeaderTwo";
import Footer from "../compounts/Footer";
import bannerleftleave from "../imgs/bannerleftleave.png";
import headerrightlef from "../imgs/headerrightlef.png";

export default function Contactus() {
  return (
    <>
      <HeaderTwo />
      <div className="contact__container">
        <div className="contact__left__leaf">
          <img src={bannerleftleave} alt="contact" />
        </div>
        <div className="contact__wraper__main">
          <div className="contact__wraper__left">
            <div className="contact__wraper__left__contant">
              <div className="contact__wraper__left__contant__heading">
                Get in Touch with Us
              </div>
              <div className="contact__wraper__left__contant__sub__heading">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                ea, minima doloremque a odit quas excepturi mollitia ipsam?
                Repudiandae?
              </div>
              <div className="contact__wraper__form">
                <div className="contact__input__entry">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="contact__input__entry">
                  <input type="email" placeholder="E-mail" />
                </div>
                <div className="contact__input__entry">
                  <input type="textarea" placeholder="Subject" />
                </div>
              </div>
              <div className="contact__sent__btn">
                <button className="main__btn__contant">send</button>
              </div>
            </div>
          </div>
          <div className="contact__wraper__right__contant">
            <div className="contact__right__overlay__leafe">
              <img src={headerrightlef} alt="map" />
            </div>
            <div className="contact__wraper__right__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3417.9143199867895!2d72.96209084995303!3d31.056484681434746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922f1bc0cdcdc13%3A0xd126dd672bfda8e7!2sZamzam%20Colony%2C%20Samundri%2C%20Faisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1663996485011!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
