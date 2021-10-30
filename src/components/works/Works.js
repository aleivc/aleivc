import React from "react";
import "./works.scss";
import { data } from "../../mock/data";

export default function () {
  const source = data[0]["content"];
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : source.length - 1)
      : setCurrentSlide(
          currentSlide < source.length - 1 ? currentSlide + 1 : 0
        );
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {source.map((item) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={item.icon} alt="" />
                  </div>
                  <h2>{item.name}</h2>
                  <p>{item.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={item.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/icons/arrow.png"
        className="arrow left"
        alt="left"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/icons/arrow.png"
        className="arrow right"
        alt="right"
        onClick={() => handleClick("")}
      />
    </div>
  );
}
