import React from "react";
import Slider from "react-slick";
import "./slider.css";

export default function CustomSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
  };

  const sliderContent = [
    {
      title: "Make your first order and get 50% off",
      text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.",
      imgSrc: "/img.png",
      background: "rgba(80, 72, 43, 1)", // First slide background
    },
    {
      title: "Buy One Get One Free!",
      text: "This is the best deal for pizza lovers. Grab it now and enjoy with your friends and family.",
      imgSrc: "/img.png",
      background: "rgba(47, 47, 47, 1)", // Second slide background
    },
    {
      title: "Free Delivery on All Orders",
      text: "Order now and get free delivery on all orders within a 5km radius!",
      imgSrc: "/img.png",
      background: "rgba(41, 109, 96, 1)", // Third slide background
    },
  ];

  return (
    <div className="sliderWrapper">
      <Slider {...settings}>
        {sliderContent.map((slide, index) => (
          <div
            key={index}
            className="slideMain"
            style={{ background: slide.background }}
          >
            <div className="sliderLeft">
              <div className="sliderTitle">{slide.title}</div>
              <div className="sliderText">{slide.text}</div>
              <div className="sliderButton">
                <button>Order Now</button>
              </div>
            </div>
            <div className="sliderRight">
              <img className="SliderImage" src={slide.imgSrc} alt="Pizza" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
