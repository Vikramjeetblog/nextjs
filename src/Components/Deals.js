import React, { useState } from 'react';
import '../Styles/Deals.css';
import data from '../Data/Data.json'; // Importing data directly

const Deals = () => {
  const [deals] = useState(data); // Set initial state with imported data

  return (
    <div className='Deals'>
     <p className='text'>Related deals you might like for</p>
    <div className="Deals-container">
    
      {deals.map((deal, index) => (
        <div className='Deals-wrapper' key={index}>
          <div className='content'>
            <img src={deal.image} alt='deal' className='Project-image' />
            <div className='offer'>
              <span>20% off</span>
              <span>Limited time</span>
            </div>
            <span className='Brand-ttile'>{deal.Title}</span>
            <div className='Brand-name'>{deal.name}</div>
            <div className='Price-section'>
              <span className='Price'>$ {deal.price}</span>
              <span className='Original-price'>$ {(deal.price * 1.25).toFixed(2)}</span>
              <span className='Discount'>(20 % off)</span>
            </div>
            <button className='View-Deal'>View Deal</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Deals;
