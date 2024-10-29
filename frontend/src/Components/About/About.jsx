import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    'https://thilakawardhana.com/cdn/shop/files/WEB-COVER_1_f1496fae-56fa-4776-b54a-69e0de417fdb.jpg?v=1727775847&width=1370',
    'https://thilakawardhana.com/cdn/shop/files/1520-x-592-WEB-5.png?v=1723446577&width=1370',
    'https://thilakawardhana.com/cdn/shop/files/WEB-COVER_1_f1496fae-56fa-4776-b54a-69e0de417fdb.jpg?v=1727775847&width=1370',
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="slide"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default About;
