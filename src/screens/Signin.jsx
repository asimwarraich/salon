import React from "react";
import Header from "../compounts/Header";
import Footer from "../compounts/Footer";
import bannerleftleave from "../imgs/bannerleftleave.png";
import signinmain from "../imgs/signinmain.png";

export default function Signin() {
  return (
    <>
      <Header />
      <div
        id="signin__container__section"
        className="signin__container__section"
      >
        <div className="signin__leave">
          <img src={bannerleftleave} alt="bannerleftleave" />
        </div>
        <div className="signin__container__contant">
          <div className="signin__container__contant__heading">
            Welcome Back
          </div>
          <div className="signin__container__contant__sub__heading">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
            quaerat similique sit! m ipsum dolor sit amet t!sit! m ipsum dolor
            sit amet t!
          </div>
          <div className="signin__form">
            <input
              className="signin__form__input"
              type="text"
              placeholder="Name"
            />
            <input
              className="signin__form__input"
              type="text"
              placeholder="Password"
            />
          </div>
          <div className="signin__button">
            <button className="main__btn__contant">Sign In</button>
            <div className="signup__alredy">
              Don't Have an account?
              <a className="signup__alredy__link" href="/signup">
                Sign Up
              </a>
            </div>
          </div>
        </div>
        <div className="signin__container__img">
          <img src={signinmain} alt="Sing in" />
        </div>
      </div>
      <Footer />
    </>
  );
}
