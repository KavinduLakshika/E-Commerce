import React from 'react';
import './Offers.css';

const images = [
  'https://kandyselection.lk/_next/image?url=https%3A%2F%2Fpub-aab205bc4ae24bca977e05a1c5b36628.r2.dev%2Fxogwlpx44qiz2c4pdoqib4wd&w=828&q=75',
  'https://kandyselection.lk/_next/image?url=https%3A%2F%2Fpub-aab205bc4ae24bca977e05a1c5b36628.r2.dev%2Ftwxsxy4va4y3lh90mvfpp6nh&w=828&q=75',
  'https://kandyselection.lk/_next/image?url=https%3A%2F%2Fpub-aab205bc4ae24bca977e05a1c5b36628.r2.dev%2Fbznom57qeoi3h8nhkas6yvn3&w=828&q=75',
  'https://kandyselection.lk/_next/image?url=https%3A%2F%2Fpub-aab205bc4ae24bca977e05a1c5b36628.r2.dev%2Fb4atx5h8mvscgrdeyunzoc99&w=828&q=75',

];

function Offers() {

  return (
    // <div className="offers-container">
    //   <div className="offer-card large">
    //     <img src='https://img.freepik.com/free-photo/front-view-young-male-holding-little-packages-sale-writing-yellow-background-gift-color-present-shopping-christmas-holiday-photos_140725-139785.jpg?ga=GA1.1.1937884014.1730188424&semt=ais_hybrid' alt='' className="offer-image" />
    //   </div>
    //   <div className="small-images">
    //     <div className="offer-card small">
    //       <img src='https://img.freepik.com/free-photo/front-view-young-male-holding-little-packages-sale-writing-yellow-background-gift-color-present-shopping-christmas-holiday-photos_140725-139785.jpg?ga=GA1.1.1937884014.1730188424&semt=ais_hybrid' alt=''className="offer-image" />
    //     </div>
    //     <div className="offer-card small">
    //       <img src='https://img.freepik.com/free-photo/front-view-young-male-holding-little-packages-sale-writing-yellow-background-gift-color-present-shopping-christmas-holiday-photos_140725-139785.jpg?ga=GA1.1.1937884014.1730188424&semt=ais_hybrid' alt='' className="offer-image" />
    //     </div>
    //   </div>
    // </div>
    <section className="container py-5">
      <hr />
      <div className="text-center mb-2">
        <h1>New Arrivals</h1>
      </div>
      {/* Gallery Rows */}
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className=" col-6 col-lg-3 col-md-6 col-sm-6  mb-4">
            <div className="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light">
              <img src={image} className="w-100" alt={`Thumbnail ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;
