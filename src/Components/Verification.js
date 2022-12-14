import React , {useState} from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import signimg from "../Images/signin-side-image.svg";
import { useNavigate  } from "react-router";
import { useAlert } from 'react-alert'
import { useSelector,useDispatch } from "react-redux";
import { verifyOtp } from "../actions/loginAction";
function Verification() {
  const alert = useAlert()
  let loginData=useSelector(state=>state.loginData)
  let {user_phone} =loginData
  const dispatch=useDispatch()
  
  const [user_otp, setUser_otp] = useState("")
   const navigation = useNavigate();


 async function verifyOTP(){
  if(user_otp.length <4 || user_otp.length >4){
    alert.error("otp Should be 4 digit Only")
    return
  }
  try {
    let item = {user_phone ,user_otp}
    console.log(item)
   
   await dispatch(verifyOtp(item))
   alert.success("Otp Verified")
    navigation('/Genderage')
  } catch (error) {
    console.log(error)
    alert.error(error?.response?.data?.message|| "Server Error")
  }


 
  
 }

  return (
    <>
      <div className="verification" data-aos="zoom-in">
        <div action="blank" className="verification-form">
          <h1>VERIFICATION</h1>
          <input data-aos="fade-right" data-aos-duration="3000" type="text" name="otp" placeholder="Enter OTP"  className="verify-input otp" required value={user_otp} onChange={(e)=>setUser_otp(e.target.value)}/>
         <p>You will get otp on your mobile number </p>
         <button className='from-button' onClick={verifyOTP} >Verify</button>
        </div>

        <img id="sign-inside" effect="blur" src={signimg} alt="" />
      </div>
    </>
  );
}

export default Verification;
