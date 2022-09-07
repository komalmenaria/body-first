import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import Config from '../../Config'
import CouponDetails from './CouponDetails'
const Coupon = () => {
  const [cartDetails, setcartDetails] = useState(false);
  const alert=useAlert()
  useEffect(() => {}, []);

  const getCouponDetails= async(event)=>{
    try {
      event.preventDefault();
      let form_data=new FormData(document.getElementById("couponFrom"))
      let {data}= await axios.post(`${Config.BASE_URL}admin/cart-detail`,form_data)
      // console.log(data.data)
      setcartDetails(data.data)
      alert.success("Success")
    } catch (error) {
      setcartDetails(false)
      alert.error(error.response.data.message || error.message)
    }finally {

    }

  }
  return (
    <div className="row my-2">
      <div className="col-6">
        <form class="row g-3 mx-2"  id="couponFrom" onSubmit={getCouponDetails}>
 
          <div class="col-auto">
            <label for="inputPassword2" class="visually-hidden">
              Coupon
            </label>
            <input
              type="text"
              name="coupon"
              class="form-control"
              id="inputPassword2"
              placeholder="Coupon"
            />
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3">
              Get Coupon Details
            </button>
          </div>
        </form>
        
      </div>
      <div className="col-6">

        {cartDetails ? <CouponDetails cartDetails={cartDetails}/>:"Enter Valid Coupon to get details"}
      </div>
    </div>
  );
};

export default Coupon;
