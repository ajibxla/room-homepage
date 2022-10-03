import React, { useState } from "react";
import Nav from "./Nav";
import data from "../data";
import WindowResize from "./WindowResize";

function TestHeader() {
  const [bannerData, setBannerData] = useState(data);
  const [imageCounter, setImageCounter] = useState(0);

  const checkCounter = (number) => {
    if (number > data.length - 1) {
      return 0;
    }

    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };

  const handleNext = () => {
    setImageCounter((counter) => {
      let newIndex = counter + 1;
      return checkCounter(newIndex);
    });
  };

  const handlePrevious = () => {
    setImageCounter((counter) => {
      let newIndex = counter - 1;
      return checkCounter(newIndex);
    });
  };

  const windowResize = WindowResize();
  const windowSize = windowResize.props.children;

  return (
    <header>
      <Nav />
      <div className="container">
        <div className="first-section">
          <div className="background-img">
            <img
              src={data[imageCounter].desktopImg}
              alt="white chair and table"
            />
          </div>
          {windowSize < 750 && (
            <div className="left-right-arrow">
              <div className="left-arrow arrow" onClick={handlePrevious}>
                <img src="/images/icon-angle-left.svg" alt="" />
              </div>
              <div className="right-arrow arrow" onClick={handleNext}>
                <img src="/images/icon-angle-right.svg" alt="" />
              </div>
            </div>
          )}
        </div>
        <div className="second-section">
          <div className="second-section-container text-container">
            <h2>
              {data[imageCounter].heading} {windowSize}
            </h2>
            <p>{data[imageCounter].paragraph}</p>
            <div className="shop-now">
              <p>Shop now</p>
              <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                  fill="#000"
                  fillRule="nonzero"
                />
              </svg>
            </div>
          </div>
          {windowSize >= 750 && (
            <div className="left-right-arrow">
              <div className="left-arrow" onClick={handlePrevious}>
                <img src="/images/icon-angle-left.svg" alt="" />
              </div>
              <div className="right-arrow" onClick={handleNext}>
                <img src="/images/icon-angle-right.svg" alt="" />
              </div>
            </div>
          )}
        </div>

        <div className="third-section">
          <div className="third-section-img-holder section-img">
            <img src="/images/image-about-dark.jpg" alt="" />
          </div>
        </div>
        <div className="fourth-section">
          <div className="fourth-section-text text-container">
            <h2> About our furniture </h2>
            <p>
              Our multifunctional collection blends design and functison to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>
        </div>
        <div className="fifth-section">
          <div className="third-section-img-holder section-img">
            <img src="/images/image-about-light.jpg" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default TestHeader;
