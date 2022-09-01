import React from "react";
import Slider from "react-slick";
import data from "../dataSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgOne from "../assets/crew/image-douglas-hurley.png";
import ImgTwo from "../assets/crew/image-mark-shuttleworth.png";
import ImgThree from "../assets/crew/image-victor-glover.png";
import ImgFour from "../assets/crew/image-anousheh-ansari.png";

const Card = ({ name, title, about, image }) => {
  return (
    <div className="content crew-con">
      {/* <div className="right"></div> */}
      <div className="crew-det">
        <h4>{title}</h4>
        <h3>{name}</h3>
        <p>{about}</p>
      </div>
      <hr className="crew-line" />
      <div className="crew-img">
        <img src={image} alt="/" />
      </div>
    </div>
  );
};

function CrewSlider() {
  const settings = {
    dots: true,
    arrows: false,
  };
  return (
    <>
      <Slider {...settings}>
        {data.map((obj, index) => (
          <Card {...obj} key={index} />
        ))}
      </Slider>
    </>
  );
}

export default CrewSlider;
