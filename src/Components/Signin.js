import React , {useState,useEffect} from "react";
import signimg from "../Images/signin-side-image.svg";


import { useNavigate} from "react-router";
import { useSelector,useDispatch } from "react-redux";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { useAlert } from 'react-alert'
import { getOtp } from "../actions/loginAction";
function Signin() {
   let loginData=useSelector(state=>state.loginData)
  let {get_otp_sucees} =loginData
  const navigation = useNavigate();
  const dispatch=useDispatch()
  const alert = useAlert()
  useEffect(() => {
    if(get_otp_sucees){
      navigation("/verification")
    }
  }, [get_otp_sucees,dispatch,navigation]);
  const [user_name, setUser_name] = useState("")
  const [user_phone, setUser_phone] = useState("")
  const [is_privacy, setIs_privacy] = useState(0)

 

 async function getOTP(){
  if(user_phone.length <10 || user_phone.length >10){
    alert.error("Mobile Number Should be 10 digit Only")
    return
  }
  try {
    let  item  = {user_name , user_phone } 
    if(is_privacy){
      item.is_privacy=1
    }else {
      item.is_privacy=0
    } 
     
    await dispatch(getOtp(item))
    alert.success("Otp sent SuccessFull")
    navigation('/verification')
  } catch (error) {
      console.log(error)
      alert.error(error?.response?.data?.message|| "Server Error")
  }
    

 }

 
//  
  return (
    <>
      <div className="signin" data-aos="zoom-in">
        
        <div  className="signin-form" data-aos="fade-up">
          <h1>SIGN IN</h1>
          <input data-aos="fade-right" data-aos-duration="3000" type="text" name={user_name} placeholder="Name"  className="sign-input username" required onChange={(e)=>setUser_name(e.target.value)} />
          <input data-aos="fade-right" data-aos-duration="3000" type="text" name={user_phone} placeholder="Phone Number" className="sign-input userphone" required onChange={(e)=>setUser_phone(e.target.value)}  />
           <label className="check-privacy-label" htmlhtmlFor="privacy">
            <input type="checkbox" id="privacy" name="privacy" value={is_privacy} className="checkbox" onChange={(e)=> setIs_privacy(!is_privacy)}  />
               <p>By Check this you agree to our <span>Privacy policy </span>
              and <span>Terms of services</span>.</p>
            </label>
            <button  onClick={getOTP}   className='from-button'>Send OTP</button>
        </div>

        <img id="sign-inside" effect="blur" src={signimg} alt="" />
      </div>
    </>
  );
}

export default Signin;
