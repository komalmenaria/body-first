import React , {useState} from "react";
import signimg from "../Images/signin-side-image.svg";
import { useNavigate  } from "react-router";



function Verification({user_phone}) {

  const [user_otp, setUser_otp] = useState("")
   const navigation = useNavigate();

 async function verifyOTP(e){
    e.preventDefault()
  // let user_phone = route.params.user_phone
  let item = {user_phone ,user_otp}
  console.log(item)
  

 let result = await fetch('http://20.212.31.246:5000/api/user/verifyotp' ,{
    method:'POST',
    body:JSON.stringify(item),
    headers:{
      "Content-Type": 'application/json',
      "Accept": 'application/json'
    }
  })

  result = await result.json()
  if (result.status === 200) {
    navigation("/verification" );
    console.log(result)
  } else {
    alert("Verification failed")
  }
  
 }

  return (
    <>
      <div className="signin">
        <div action="blank" className="signin-form">
          <h1>VERIFICATION</h1>
          <input type="text" name="otp" placeholder="Enter OTP"  className="sign-input otp" required value={user_otp} onChange={(e)=>setUser_otp(e.target.value)}/>
         <p>You will get otp on your mobile number </p>
         <button className='from-button' onClick={verifyOTP} >Verify</button>
        </div>

        <img src={signimg} alt="" />
      </div>
    </>
  );
}

export default Verification;
