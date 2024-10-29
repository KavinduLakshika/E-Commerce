import React from 'react';
import './Offers.css';

const Offers = () => {

  return (
    <div className="offers-container">
      <div className="offer-card large">
        <img src='https://img.freepik.com/premium-photo/woman-holding-sign-that-says-black-friday-friday-it_1280538-4401.jpg?w=740' alt='' className="offer-image" />
      </div>
      <div className="small-images">
        <div className="offer-card small">
          <img src='https://img.freepik.com/premium-photo/woman-holding-sign-that-says-black-friday-friday-it_1280538-4401.jpg?w=740' alt=''className="offer-image" />
        </div>
        <div className="offer-card small">
          <img src='https://img.freepik.com/premium-photo/woman-holding-sign-that-says-black-friday-friday-it_1280538-4401.jpg?w=740' alt='' className="offer-image" />
        </div>
      </div>
    </div>
  );
};

export default Offers;
