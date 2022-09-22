import React from "react";

export default function OurVisionCard({ svg, heading, text }) {
  return (
    <>
      <div className="our__choose__card__wraper__compnt">
        <div className="our__choose__card__compnt__header">
          <div className="our__choose__card__compnt__header__svg">{svg}</div>
          <div className="our__choose__card__compnt__header__heading">
            {heading}
          </div>
        </div>
        <div className="our__choose__card__compnt__contant">{text}</div>
      </div>
    </>
  );
}
