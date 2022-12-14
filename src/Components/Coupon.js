import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Coupon() {
    const navigation = useNavigate();
    let {coupon}=useSelector(state=>state.categoryData)
    function backtoproducts(){
        navigation('/products')
    }
    function backtocart(){
        navigation('/cart')
    }
    return (
        <>
            <div className="coupon-page">
                <div className="coupon" data-aos="fade-up" >
                    <h1>Your Coupon Number</h1>
                    <span>{coupon}</span>
                </div>
                <div className="product-buttons">
                    <button type='button' className='button-btn' onClick={backtoproducts}>Back To Products</button>
                    <button type='button' className='button-btn'  onClick={backtocart} >Back To Cart</button>

                </div>
            </div>
        </>
    )
}

export default Coupon