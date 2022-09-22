import React from "react";
import Header from "../compounts/Header";
import Footer from "../compounts/Footer";
import SlonBanner from "../compounts/SlonBanner";
import AboutSalon from "../compounts/AboutSalon";
import bookingimg from "../imgs/bookingimg.png";
export default function Booking() {
  return (
    <>
      <Header />
      <div className="booking__wraper">
        <div className="booking__wraper__img">
          <img src={bookingimg} alt="booking" />
        </div>
        <div className="booking__wraper__overlay">
          <div className="booking__wraper__overlay__card">
            <div className="booking__overlay__card">
              <div className="booking__wraper__overlay__card__svg">
                <svg
                  width="72"
                  height="67"
                  viewBox="0 0 72 67"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_18_128)">
                    <path
                      d="M16.0816 4.45548C16.3589 2.65787 15.4664 0.149276 18.3507 0.144234C21.2349 0.139191 20.3853 2.64022 20.6828 4.37732H50.4707C50.7758 2.64022 49.9463 0.0610328 52.8936 0.146753C55.6669 0.224911 54.8046 2.65535 55.0568 4.39245C55.5358 4.41514 55.982 4.45296 56.4283 4.45296C58.9924 4.45296 61.5564 4.42523 64.118 4.45296C68.3586 4.52607 71.1319 7.33469 71.1319 11.54C71.1437 19.6079 71.1437 27.6757 71.1319 35.7435C71.1319 43.771 71.1319 51.7994 71.1319 59.8285C71.1319 63.1061 69.2688 65.5996 66.1979 66.4669C65.6315 66.6123 65.048 66.6802 64.4634 66.6685C45.2199 66.6786 25.9748 66.6786 6.72794 66.6685C2.96379 66.6685 0.041729 63.8675 0.0341654 60.1134C0.00391102 43.7643 0.00391102 27.4135 0.0341654 11.061C0.0341654 7.30443 2.95624 4.5412 6.8767 4.45296C9.4811 4.39497 12.088 4.44035 14.6924 4.44035L16.0816 4.45548ZM4.51434 21.2593V22.6459C4.51434 34.9157 4.51434 47.1856 4.51434 59.4554C4.51434 61.5909 5.2354 62.317 7.39606 62.317C26.1706 62.317 44.9468 62.317 63.7246 62.317C65.9509 62.317 66.6366 61.611 66.6366 59.3621C66.6366 47.1343 66.6366 34.9065 66.6366 22.6787V21.2593H4.51434ZM66.6366 16.6909C66.6366 14.8806 66.6366 13.1612 66.6366 11.4543C66.6366 9.74747 65.8248 8.94573 64.0751 8.93313C62.1842 8.91548 60.2933 8.93313 58.3999 8.93313H54.9963C54.9963 9.74495 54.9963 10.3727 54.9963 11.0005C54.9635 12.3998 54.0256 13.436 52.8028 13.436C51.6481 13.436 50.6674 12.4426 50.5816 11.1266C50.5388 10.4332 50.5816 9.73235 50.5816 9.00624H20.5794C20.5794 9.82815 20.6374 10.5845 20.5794 11.3283C20.4634 12.5485 19.402 13.4889 18.3103 13.4335C17.736 13.3938 17.1983 13.1373 16.806 12.716C16.4137 12.2947 16.1962 11.7401 16.1976 11.1644C16.1698 10.4307 16.1976 9.69705 16.1976 8.92808C12.92 8.92808 9.85675 8.90287 6.79097 8.92808C5.67912 8.94321 4.70846 9.48779 4.62778 10.6375C4.48659 12.6267 4.58745 14.6361 4.58745 16.6883L66.6366 16.6909Z"
                      fill="white"
                    />
                    <path
                      d="M33.7772 49.9824H37.6525V41.5861H46.1349V38.572H37.6525V30.1757H33.7772V38.572H25.2948V41.5861H33.7772V49.9824Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_18_128">
                      <rect
                        width="71.1305"
                        height="66.5495"
                        fill="white"
                        transform="translate(0.00878906 0.144165)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="booking__wraper__overlay__card__text">
                Book A New Appointment
              </div>
            </div>
          </div>
        </div>
      </div>
      Booking Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic nam
      dolore facilis omnis maiores, quia officia explicabo iste sapiente. Ab
      deleniti incidunt dolorem mollitia nisi error provident officia ad
      repudiandae iste culpa hic earum ducimus, ullam nostrum? Distinctio
      voluptatem eaque aut, a aspernatur quas, fugiat, nostrum itaque inventore
      esse sint.
      <SlonBanner />
      <AboutSalon />
      <Footer />
    </>
  );
}
