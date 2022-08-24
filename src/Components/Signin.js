import React , {useState,useEffect} from "react";
import signimg from "../Images/signin-side-image.svg";
import { useNavigate ,} from "react-router";
import { useSelector,useDispatch } from "react-redux";
import Config from "../Config";
import { getOtp } from "../actions/loginAction";
function Signin() {
   let loginData=useSelector(state=>state.loginData)
  let {loading,user,error} =loginData
  const dispatch=useDispatch()
  useEffect(() => {
    if(user){
      navigation("/verification")
    }
  }, [user]);
  const [user_name, setUser_name] = useState("")
  const [user_phone, setUser_phone] = useState("")
  const [is_privacy, setIs_privacy] = useState(0)

  const navigation = useNavigate();

 async function getOTP(){
    // e.preventDefault()
  let  item  = {user_name , user_phone } 
  console.log(item)
  if(is_privacy){
    item.is_privacy=1
  }else {
    item.is_privacy=0
  } 
  
  
 }

 
//  
  return (
    <>
      <div className="signin">
        <div  className="signin-form">
          <h1>SIGNIN</h1>
          <input type="text" name={user_name} placeholder="Name"  className="sign-input username" required onChange={(e)=>setUser_name(e.target.value)} />
          <input type="text" name={user_phone} placeholder="Phone Number" className="sign-input userphone" required onChange={(e)=>setUser_phone(e.target.value)}  />
           <label className="check-privacy-label" htmlFor="privacy">
            <input type="checkbox" id="privacy" name="privacy" value={is_privacy} className="checkbox" onChange={(e)=> setIs_privacy(!is_privacy)}  />
               <p>By Check this you agree to our <span>Privacy policy </span>
              and <span>Terms of services</span>.</p>
            </label>
            <button onClick={getOTP}   className='from-button'>Send OTP</button>
        </div>

        <img src={signimg} alt="" />
      </div>
    </>
  );
}

export default Signin;
