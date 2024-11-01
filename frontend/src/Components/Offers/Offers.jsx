import React from 'react';
import './Offers.css';

const images = [
  'https://nilsonline.lk/image/catalog/nils/may2022/trending-now/Crop-tops-Sri-Lanka.jpg',
  'https://nilsonline.lk/image/catalog/nils/may2022/trending-now/Floral-dresses-Sri-Lanka.jpg',
  'https://nilsonline.lk/image/catalog/nils/may2022/trending-now/Linen-collections-Sri-Lanka.jpg',
  'https://nilsonline.lk/image/catalog/nils/may2022/trending-now/Office%20wear%20blouses%20SL.jpg',

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
