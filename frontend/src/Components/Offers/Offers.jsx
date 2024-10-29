import React from 'react';
import './Offers.css';

const Offers = () => {

  return (
    <div className="offers-container">
      <div className="offer-card large">
        <img src='https://img.freepik.com/free-photo/front-view-young-male-holding-little-packages-sale-writing-yellow-background-gift-color-present-shopping-christmas-holiday-photos_140725-139785.jpg?ga=GA1.1.1937884014.1730188424&semt=ais_hybrid' alt='' className="offer-image" />
      </div>
      <div className="small-images">
        <div className="offer-card small">
          <img src='https://img.freepik.com/free-photo/front-view-young-male-holding-little-packages-sale-writing-yellow-background-gift-color-present-shopping-christmas-holiday-photos_140725-139785.jpg?ga=GA1.1.1937884014.1730188424&semt=ais_hybrid' alt=''className="offer-image" />
        </div>
        <div className="offer-card small">
          <img src='https://img.freepik.com/free-photo/front-view-young-male-holding-little-packages-sale-writing-yellow-background-gift-color-present-shopping-christmas-holiday-photos_140725-139785.jpg?ga=GA1.1.1937884014.1730188424&semt=ais_hybrid' alt='' className="offer-image" />
        </div>
      </div>
    </div>
  );
};

export default Offers;
