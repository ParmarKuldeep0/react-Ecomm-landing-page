import React from 'react'
import ProductsCards from './ProductCards'
import IceCream  from './IceCreamDelights'
const Products = () => {
  return (
    <div className='products'>
      <div className='recommends'>
        <h2>Coffee Recommends </h2>        
      
        <div className="products-container">
          <ProductsCards/> 
          <ProductsCards/>  
      
        </div>
        <div className='iceCream'>
          <IceCream/>
        </div>
        </div>
    </div>
  )
}

export default Products
