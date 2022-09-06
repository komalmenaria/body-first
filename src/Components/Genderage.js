import React, { useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch } from 'react-redux'
import { assingAgeAndGender } from '../actions/onboardingAction';
import { useNavigate  } from "react-router";
function Genderage() {
  const alert = useAlert()
  const navigation=useNavigate()
  const dispatch = useDispatch()
  const [age, setAge] = useState(false);
  const [gender, setGender] = useState(false);
  const handleSubmit = async (e) => {
    console.log("Handling Form")
    try {
      e.preventDefault()
       
      if (!age) {
        alert.error("Please select Age")
        return
      }
      if (!gender) {
        alert.error("Plase select Gender")
        return
      }
      console.log(age)
  
      if(gender==="male"){
        await dispatch(assingAgeAndGender({age_id:age,gender:1}))
      }
      if(gender==="female"){
        await dispatch(assingAgeAndGender({age_id:age,gender:0}))
      }
  
       
      
      alert.success("Succesfull")
      navigation("/categories")
    } catch (error) {
      console.log(error)
      alert.error(error?.response?.data?.message|| "Server Error")
    }


  }
  return (
    <>
      <div className="gender-age-selection" data-aos="zoom-in">
        <form action="blank" className="gender-age-form" onSubmit={handleSubmit}>
          <div className="gender">
            <span data-aos="flip-down">Choose Your Gender</span>

            <fieldset className="select-gender">
              <input data-aos="flip-left" type="radio" className='male-gender  single-gender' value="male" name='gender' onChange={(e) => { setGender(e.target.value) }} />
              <input data-aos="flip-right" type="radio" className='female-gender single-gender' value="female" name='gender' onChange={(e) => { setGender(e.target.value) }} />
            </fieldset>
          </div>

          <div className="age-group">
            <span data-aos="flip-down">Select your Age </span>
            <fieldset className="select-age-group">
              <input data-aos="zoom-in-up" name="age" type="radio" value="1" className='select-age' label=' < 18' onChange={(e) => { setAge(e.target.value) }} />
              <input data-aos="zoom-in-up" name="age" type="radio" value="2" className='select-age' label='18-29' onChange={(e) => { setAge(e.target.value) }} />
              <input data-aos="zoom-in-up" name="age" type="radio" value="3" className='select-age' label='20-29' onChange={(e) => { setAge(e.target.value) }} />
              <input data-aos="zoom-in-up" name="age" type="radio" value="4" className='select-age' label='30-39' onChange={(e) => { setAge(e.target.value) }} />
              <input data-aos="zoom-in-up" name="age" type="radio" value="5" className='select-age' label='40-49' onChange={(e) => { setAge(e.target.value) }} />
              <input data-aos="zoom-in-up" name="age" type="radio" value="6" className='select-age' label='50-59' onChange={(e) => { setAge(e.target.value) }} />
              <input data-aos="zoom-in-up" name="age" type="radio" value="7" className='select-age' label='60 +' onChange={(e) => { setAge(e.target.value) }} />
            </fieldset>

          </div>
          <button type='submit' className='gender-age-submit-btn'  >Next</button>
        </form>
      </div>
    </>
  )
}

export default Genderage