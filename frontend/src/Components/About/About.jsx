import React from 'react';
import './About.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const About = () => {

  return (
    <div className="slider-container">
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
      >
        <div>
          <img src='https://thilakawardhana.com/cdn/shop/files/WEB-COVER_1_f1496fae-56fa-4776-b54a-69e0de417fdb.jpg?v=1727775847&width=1370' alt="Image 1" />
        </div>
        <div>
          <img src='https://thilakawardhana.com/cdn/shop/files/1520-x-592-WEB-5.png?v=1723446577&width=1370' alt="Image 2" />
        </div>
        <div>
          <img src="https://thilakawardhana.com/cdn/shop/files/1520-x-592-WEB-4.png?v=1723446523&width=1370" alt="Image 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default About;
