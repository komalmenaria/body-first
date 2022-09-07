import React from "react";
import SingleProduct from "./SingleProduct";

const CouponDetails = ({ cartDetails }) => {
  let {cart,user,cartItem}=cartDetails
  // console.log(cart,uset,cartItem)
  return (
    <>
    <div className="Detail-header">
    <section class="h-100 gradient-custom">
    <div class="container  h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="">
          <div class="card" style={{ borderRadius: '10px'}}>
         
            <div class="card-body p-4">
              <div class="d-flex justify-content-between align-items-center mb-4">
                <p class="lead fw-normal mb-0" style={{color:"#a8729a"}}>Order :{cart.cart_id}</p>
                <p class="small text-muted mb-0">Coupon :{cart.coupon}</p>
              </div>
              <div class="d-flex justify-content-between align-items-center mb-4">
                <p class="lead fw-normal mb-0" >Name :{user.user_name}</p>
                <p class="small text-muted mb-0">Number :{user.user_phone}</p>
              </div>
          
  
    {/*  */}
    {cartItem.length  && cartItem.map((item)=>{
      return <SingleProduct  item={item}/>
    })  }
          
              <div class="d-flex justify-content-between pt-2">
                <p class="fw-bold mb-0">Order Details</p>
                <p class="text-muted mb-0"><span class="fw-bold me-4">Total</span> $ {cart.cart_total}</p>
              </div>
  
        
  
              <div class="d-flex justify-content-between">
                <p class="text-muted mb-0">order date : {cart.createdAt}</p>
                <p class="text-muted mb-0"><span class="fw-bold me-4">Sub total </span>  ${cart.cart_sub_total}</p>
              </div>
  
              <div class="d-flex justify-content-between mb-5">
                <p class="text-muted mb-0">Coupon : {cart.coupon}</p>
                
              </div>
            </div>
            <div class="card-footer border-0 px-4 py-5"
               
                style ={{backgroundColor:'#a8729a',borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px'}}
              >
              <h5 class="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">Total
                  <span class="h2 mb-0 ms-2 mx-2"> ${cart.cart_total}</span></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
    </>
  );
};

export default CouponDetails;
