import React from "react";
import Header from "../compounts/Header";
import Footer from "../compounts/Footer";
import bannerhome from "../imgs/bannerhome.png";
import bannerleftleave from "../imgs/bannerleftleave.png";

export default function Signup() {
  return (
    <>
      <Header />
      <div id="signup__main__container" className="signup__main__container">
        <div className="signup__main__container__img">
          <img src={bannerhome} alt="sign up" />
        </div>
        <div className="signup__main__container__contant">
          <div className="signup__heading__bar">
            <div className="signup__contant__text__heading">
              Be a Part of Saloon Family
              <img
                className="signup__heading__img"
                src={bannerleftleave}
                alt="banner"
              />
            </div>
          </div>
          <div className="signup__contant__text__sub__heading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur quisquam pariatur explicabo.
          </div>
          <div className="signup__input__form">
            <div className="signup__input__form__container">
              <input
                className="signup__input__form__container__input"
                type="text"
                placeholder="Name"
                title="name"
              />
              <input
                className="signup__input__form__container__input"
                type="text"
                placeholder="Email"
                title="Email"
              />
            </div>
            <div className="signup__input__form__container">
              <input
                className="signup__input__form__container__input"
                type="text"
                placeholder="Phone"
                title="Phone"
              />
              <input
                className="signup__input__form__container__input"
                type="text"
                placeholder="City"
                title="City"
              />
            </div>
            <div className="signup__input__form__container">
              <input
                className="signup__input__form__container__input"
                type="text"
                placeholder="Password"
                title="Password"
              />
              <input
                className="signup__input__form__container__input"
                type="text"
                placeholder="Re-Enter Password"
                title="Re-Enter Password"
              />
            </div>
          </div>
          <div className="sign__up__btn">
            <button className="main__btn__contant">Sign Up</button>
          </div>
          <div className="signup__alredy">
            Already Have an account?
            <a className="signup__alredy__link" href="/signin">
              Sign in
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
