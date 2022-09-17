import React, { useState } from 'react'
import config from '../../Config'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'

const Login = () => {
  const [mobile, setmobile] = useState('')
  const [pin, setpin] = useState('')
  const navigation = useNavigate();
  const alert = useAlert()

  async function handleClickLogin(e) {
    if (mobile.length < 10 || mobile.length > 10) {
      alert.error("Mobile Number Should be 10 digit Only")
      return
    }
    if (pin.length < 6 || pin.length > 6) {
      alert.error("Password Number Should be 6 digit Only")
      return
    }

      e.preventDefault()
      console.log(mobile, pin)
      await axios.post(`${config.BASE_URL}admin/login`, {
        mobile: mobile, pin: pin
      })
        .then(result => {
          // console.log(result);
          localStorage.setItem("token",result.data.data.token)
          alert.success("Login Successfully")
          navigation('/admin/dashboard');
        })
        .catch(error => {
          console.log(error)
          alert.error(error?.response?.data?.message|| "Server Error")
        })
      
       
       

    
  }

    return (
      <>
        <div className="container justify-content-center p-5 ">
          <h2 className='text-center'>Login For Admin</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Mobile Number</label>
              <input type="number" className="form-control" required onChange={(e) => setmobile(e.target.value)} />

            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" required onChange={(e) => setpin(e.target.value)} />
            </div>
            <button onClick={handleClickLogin} type="submit" className="btn btn-success">Submit</button>
          </form>
        </div>
      </>
    )
  }

  export default Login