import React from "react";
import logo from "../imgs/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <>
      <div className="salon__nav__bar__container">
        <div v className="salon__maon__container">
          <a href="#" className="salon__nav__bar__container__logo">
            <img src={logo} alt="" />
          </a>
          <div className="salon__nav__contant__link__wraper">
            <a href="#" className="salon__nav__contant__links">
              Home
            </a>
            <a href="#" className="salon__nav__contant__links">
              About Us
            </a>
            <a href="#" className="salon__nav__contant__links">
              Reviews
            </a>
            <a href="#" className="salon__nav__contant__links">
              Contact us
            </a>
          </div>
          <div className="salon__nav__bar__button">
            <button className="salon__nav__bar__button__link">Join Now</button>
          </div>
        </div>
        <button
          className="salon__menu__nav"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          title="menu"
        >
          {isOpen ? (
            <Close size="24" color="24" />
          ) : (
            <Menu size="24" color="24" />
          )}
        </button>
      </div>
    </>
  );
}

export function Close({ size, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-x"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}
export function Menu({ size, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-menu"
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );
}
