import React from 'react'
import icrecream from '../assets/icrecream-1.avif'
import best_seller from '../assets/bestselling.webp'
import food from '../assets/food.jpeg'
import eat from '../assets/readytoeat.jpg'
import dilivery from '../assets/divelery.png'
 
const IceCreamDelights = () => {
  return (
    <div className='icecream-title'> 
            <h1>Ice Cream Delights</h1>
        <div className='cards'>
          <div className='iceCream-card'> 
              <div className='iceCream-image'>
                  <img src={icrecream} alt="" />
              </div>
              <div className='icreCream-descrition'>
                  <p>best seller</p>
              </div>
          </div>
          <div className='iceCream-card'> 
            
              <div className='iceCream-image'>
                  <img src={best_seller} alt="" />
              </div>
              <div className='icreCream-descrition'>
                  <p>Ice Cream </p>
              </div>
          </div>
          <div className='iceCream-card'> 
            
              <div className='iceCream-image'>
                  <img src={food} alt="" />
              </div>
              <div className='icreCream-descrition'>
                  <p>Food</p>
              </div>
          </div>
          <div className='iceCream-card'> 
            
              <div className='iceCream-image'>
                  <img src={eat} alt="" />
              </div>
              <div className='icreCream-descrition'>
                  <p>Cake</p>
              </div>
          </div>
          <div className='iceCream-card'> 
            
              <div className='iceCream-image'>
                  <img src={dilivery} alt="" />
              </div>
              <div className='icreCream-descrition'>
                  <p>Home Delivery</p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default IceCreamDelights
