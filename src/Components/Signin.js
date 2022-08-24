import React , {useState} from "react";
import signimg from "../Images/signin-side-image.svg";
import { useNavigate ,} from "react-router";
 


function Signin() {
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
 let result = await fetch('http://20.212.31.246:5000/api/user/getotp' ,{
    method:'POST',
    body:JSON.stringify(item),
    headers:{
      "Content-Type": 'application/json',
      "Accept": 'application/json'
    }
  }) 
  

  result = await result.json()


 
    if (result.status === 200) {
      navigation("/verification" ,{ user_phone : result.user_phone } );
      console.log(result)
    } else {
      alert("Something is wrong")
    }
 }

 

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
