import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Review (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>An e-commerce website is an online platform that facilitate
                  buying and selling of products or services over the internet 
                  servers as a virtual marketplace where budiness and individual
                  showcase their products, interact with customers, and conduct
                  transactions without the need for a phsical presence. E-commerce
                  websites have gained immense popularity die to thier convenient
                  accessibility, and the global reach they offer.</p>
                  <p>E-commerce websites typically display products or services along
                    with detailed descriptions, images, prices and any available variations
                    (e.g.. sizes, colors). Each product usually has its own dedicated page with relevant information.
                  </p>
            </div>
        </div>
    
  )
}
