import React from 'react'
import Productsdata from "./Product/Productsdata"
import Singlewishlistitem  from './Singlewishlistitem';
import { useNavigate } from 'react-router-dom';



function Wishlist() {
    const navigation = useNavigate();
    function generateCoupan(){
navigation('/coupon')
    }
  return (
    <>
    <div className="products">
    
            <div className="all-products">
            {Productsdata.data.map((item, index) => {
              return (
                <Singlewishlistitem
                  key={index}
                  prodname={item.name}
                  prodimg={item.image}
                  prodprice={item.price}
                />
              );
            })}
            </div>
            <div className="product-buttons">
      <button type='button' className='button-btn'>Back to Products</button>
      <button type='button' className='button-btn' onClick={generateCoupan}>Get Coupon</button>

    </div>
    </div>
  
    </>
  )
}

export default Wishlist;