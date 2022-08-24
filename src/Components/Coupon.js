import React from 'react'
import { useNavigate } from 'react-router-dom';

function Coupon() {
    const navigation = useNavigate();
    function backtoproducts(){
        navigation('/products')
    }
    function backtocart(){
        navigation('/cart')
    }
    return (
        <>
            <div className="coupon-page">
                <div className="coupon">
                    <h1>Your Coupon Number</h1>
                    <span>XXXX09</span>
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