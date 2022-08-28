import React from 'react'
import Productsdata from "./Product/Productsdata"
import Singlewishlistitem  from './Singlewishlistitem';
import { useNavigate } from 'react-router-dom';

import { useSelector,useDispatch } from 'react-redux';
import { getCoupon } from '../actions/categoryAction';
import { useAlert } from 'react-alert';

function Cart() {
  const alert=useAlert()
  const dispatch=useDispatch()
  let  {cart,checkout}=useSelector(state=>state.categoryData)
    const navigation = useNavigate();
   async  function generateCoupan(){
    try {
      let body={}
      let cartItems=[]
        for (let index = 0; index < checkout.length; index++) {
          const element = checkout[index];
          cartItems.push({
            product_id:element.product_id,
            qty:1
          })
        }
        body.cart_items=cartItems
       await dispatch(getCoupon(body))
      navigation('/coupon')
      alert.success("Coupon Genrated Successfully")
    } catch (error) {
      alert.error(error.message)
    }
 
    }
    function backtoproducts(){
      navigation('/products')
    }
  return (
    <>
    <div className="products">
    
            <div className="all-products">
              {cart.length ?cart.map((item, index) => {
              return (
                <Singlewishlistitem
                  key={index}
                 product={item}
                />
              );
            }):"No Product In Cart"
              }
       
            </div>
            <div className="product-buttons">
      <button type='button' className='button-btn' onClick={backtoproducts}>Back to Products</button>
      <button type='button' className='button-btn' disabled= {checkout.length ?false:true} onClick={generateCoupan}>Get Coupon</button> 
     

    </div>
    </div>
  
    </>
  )
}

export default Cart;