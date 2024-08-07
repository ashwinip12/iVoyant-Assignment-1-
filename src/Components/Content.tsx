import React from 'react';
import './Content.css';

const categories = [
  'Traditional Wear',
  'Western Wear',
  'Swim & Beachwear',
  'Winter & Seasonal Wear',
  'Beauty & Grooming',
  'Jewellery',
  'Personal care Appliances',
  'International Brands',
  'Foot Wear',
  'Watches',
  'Accessories'
];

const Content: React.FC = () => (
  <div className="content">
    <ul className="category-list">
      <li>{categories[0]}</li>
      <li>{categories[1]}</li>
      <li>{categories[2]}</li>
      <li>{categories[3]}</li>
      <li>{categories[4]}</li>
      <li>{categories[5]}</li>
      <li>{categories[6]}</li>
      <li>{categories[7]}</li>
      <li>{categories[8]}</li>
      <li>{categories[9]}</li>
      <li>{categories[10]}</li>
    </ul>
    <div className="main-content">
      <div className="main-banner">
        <div>
          <h2 className='biggest'>Biggest Offer Revealed</h2>
          <p className="break-text deals">More deals inside</p>
          <p></p>
          <button>Wishlist</button>
        </div>
        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQS9_IuZeQCeQvzTgbRc6qXmRihHrLqKFiAFjVDRoxaCKCp4miR" alt="Banner" />

      </div>
     
      <div className="offers">
        <div className="offer-item">
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ6e00Z7jasbvPqrG-UBjpGDUAYWi30m9rIG_cvgnTdCTu96mLE" alt="Offer 1" />
          <div className="offer-text">
<p>See your browsing history</p>
          </div> 
        </div>
        <div className="offer-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7Xl7g7uEvF85_ZuMJH_i_6hQ4Y9vU_IhuwsdY8kFZIz4KL3q" alt="Offer 2" />
          <div className="offer-text">
            <p>Explore the biggest discount</p>
          </div>
        </div>
        <div className="offer-item">
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ5xE0nu9wlqgHKziIzh10xxJ4rwexVDLeFLtB9u1ZhBHEoHgyD" alt="Offer 3" />
          <div className="offer-text"> <p>Don't missthe Year-End Year</p>
          </div>
        </div>
      </div>
    </div> 
    <div className="sidebar-content">
      <h3 className="recent">Recently Viewed</h3>
      <div className="recently-viewed">
        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSeftvgAkxe1DiQ_mYGUeWqB4zkTMmdkymErhPeFU-HFTuZqokw" alt="Recently Viewed Item" />
        <div className="offer-text">
          <p>See your browsing history</p>
        </div>
      </div>
      <h3 className="suggestion">Suggestions for You</h3>
      <div className="suggestions">
        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSzYddSKBsKaPwWpP5nqADd_gSJ7VoNeqx2vQL6ty9-QaU-eOgI" alt="Suggestion Item" />
      </div>
    </div>
  </div>
);

export default Content;
