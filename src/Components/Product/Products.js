import React from 'react'
import Productsdata from "./Productsdata"
import Singleproduct from './Singleproduct';

function Products() {
  return (
    <>
    <div className="products">
    
            <div className="all-products">
            {Productsdata.data.map((item, index) => {
              return (
                <Singleproduct
                  key={index}
                  prodname={item.name}
                  prodimg={item.image}
                  prodprice={item.price}
                />
              );
            })}
            </div>
            <div className="product-buttons">
      <button type='button' className='button-btn'>Back to Catehories</button>
      <button type='button' className='button-btn'>Add All In Carts</button>

    </div>
    </div>
  
    </>
  )
}

export default Products