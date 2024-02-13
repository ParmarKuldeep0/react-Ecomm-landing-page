import React from 'react'
import coffe from './../assets/Bestseller.webp'
const ProductCards = () => {
    const originalPrice = 300;
    const coffe_img = coffe; 
    const discountInPercentage = 37;

  return (
    <div className='product-card'>
        <div className="product-img">
            <img src={coffe} alt="" />
        </div>
        <div className="product-name">
            Chocolate Icecream       
        </div>
        <div className="product-desc">
            Chocolate .PER SERVE(120ml)
        </div>
        <div className="product-price">
            <span className="product-price-final">₹{originalPrice *(100-discountInPercentage)/100}</span>
            <span className="product-price-original">₹{originalPrice}</span>
            
        </div>
    </div>
    
  )
}

export default ProductCards
