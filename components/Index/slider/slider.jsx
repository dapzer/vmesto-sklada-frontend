import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.module.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: true,
      dots: true,
      slidesToShow: 2,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      draggable: false,
      responsive: [
        {
          breakpoint: 799,
          settings: {
            arrows: false,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 550,
          settings: {
            arrows: false,
            slidesToShow: 1
          }
        }
      ]
    };
    return (
      <div className="wrapper">
        <div className="slider">
          <Slider {...settings}>
            <div className="slider__item filter" id="gallery">
              <img src="./images/Slider/Img 3.jpg" alt="" loading="lazy" />
            </div>
            <div className="slider__item filter" id="gallery">
              <img src="./images/Slider/Img 4.jpg" alt="" loading="lazy" />
            </div>
            <div className="slider__item" id="gallery">
              <img src="./images/Slider/Img 5.jpg" alt="" loading="lazy" />
            </div>
            <div className="slider__item filter" id="gallery">
              <img src="./images/Slider/Img 1.jpg" alt="" loading="lazy" />
            </div>
            <div className="slider__item" id="gallery">
              <img src="./images/Slider/Img 2.jpg" alt="" loading="lazy" />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}