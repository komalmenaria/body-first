import React from 'react'

function Coupon() {
    return (
        <>
            <div className="coupon-page">
                <div className="coupon">
                    <h1>Your Coupon Number</h1>
                    <span>XXXX09</span>
                </div>
                <div className="product-buttons">
                    <button type='button' className='button-btn'>Back To Products</button>
                    <button type='button' className='button-btn' >Back To Cart</button>

                </div>
            </div>
        </>
    )
}

export default Coupon