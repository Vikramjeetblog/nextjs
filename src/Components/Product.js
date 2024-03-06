import React, { useState, useEffect } from 'react';
import '../Styles/Product.css';
import { CiTrophy } from "react-icons/ci";
import rating from '../Assests/rating.png';
import { RiArrowDropDownLine } from "react-icons/ri";
import productData from '../Data/ProductData.json'; // Importing product data

const Product = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      setProducts(productData);
    }, []);
    return (
        <div>
          {products.map((product, index) => (
            <div className='Product-Container' key={index}>
              <div className='Product-wrapper'>
                <div className='product-image-container'>
                  {(index < 2) && <div className='Best-choices'><CiTrophy className='icon'/>Best Choice</div>}
                  <div className='number'>{index + 1}</div>
                  <img className='product-image' alt='product' src={product.productImage} />
                  <span className={`Product-name ${product.productName === "WixPro 72-Inch Responsive Website Builder" || product.productName === "SiteCraft 68-Inch Ultimate Web Design Studio" || product.productName === "CDK Resposive Builder" ? 'text-black' : ''}`}>{product.productName}</span>
                </div>
                <div className='product-description'>
                  <p>
                    <span className={`text-black ${product.productDescription === "WixPro 72-Inch Responsive Website Builder" || product.productDescription === "SiteCraft 68-Inch Ultimate Web Design Studio" || product.productDescription === "CDK Resposive Builder" ? 'text-black' : ''}`}>{product.productDescription}</span>
                  </p>
                  {(index === products.length - 1) && (
                    <p>
                      <span className='text-black'>Main highlights</span>
                    </p>
                  )}
                  <p>
                    <span className={`text-black ${product.productHighlights === "[What You Get]:" ? 'text-black' : ''}`}>{product.productHighlights}</span>
                  </p>
                  {(index === products.length - 1) && (
                    
                    <div className='Rating-container'>
  <div className='rating-div'>
    <div>
      <span className='Product-rating1'>8.9</span><span> Responsive</span>
    </div>
    <div>
      <span className='Product-rating1'>8.9</span><span>cool</span>
    </div>
    <div>
      <span className='Product-rating1'>8.9</span><span>Docs</span>
    </div>
  </div>
  <div className='chose'>
    <span>Why we love it</span>
    <div>
      <input type='checkbox' id='document'/>
      <label htmlFor='document'>Document</label>
    </div>
    <div>
      <input type='checkbox' id='easy-use'/>
      <label htmlFor='easy-use'>Easy to use</label>
    </div>
    <div>
      <input type='checkbox' id='out-of-box'/>
      <label htmlFor='out-of-box'>Out of the box</label>
    </div>
  </div>
</div>

                  )}
                  <div className='see-more'>{product.seeMoreText} <RiArrowDropDownLine className='Arrow'/></div>
                </div>
                <div className='Product-rating-section'>
                  <div className='Product-rating'>
                    <span className='rating'>{product.productRating}</span>
                    <img className='star' src={rating} alt='star'></img>
                    <span className='rating-scorce'>{product.productRatingScore}</span>
                  </div>
                  <div className='View-deals-button'>View</div>
                </div>
              </div>
              <div className='more'></div>
            </div>
          ))}
        </div>
      );
     }      
   
  
export default Product;
