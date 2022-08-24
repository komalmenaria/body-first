import React from 'react'
import Productsdata from "./Productsdata"
import Singleproduct from './Singleproduct';
import { useNavigate } from 'react-router-dom';

function Products() {
  const navigation = useNavigate();
  function backtoCategories(){
    navigation('/categories')
  }
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
      <button type='button' className='button-btn' onClick={backtoCategories} >Back to Categories</button>
      <button type='button' className='button-btn'>Add All In Carts</button>

    </div>
    </div>
  
    </>
  )
}

export default Products