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
    try {
      e.preventDefault()
      let from_age, to_age;
      if (!age) {
        alert.error("Please select Age")
        return
      }
      if (!gender) {
        alert.error("Plase select Gender")
        return
      }
      
      switch (age) {
        case "<18":
          from_age = 18
          to_age=null
          break;
        case "18-29":
          from_age = 18
          to_age = 29
          break;
        case "20-29":
          from_age = 20
          to_age = 29
          break;
        case "30-39":
          from_age = 30
          to_age = 39
          break;
        case "40-49":
          from_age = 40
          to_age=49
          break;
          case "50-59":
            from_age =50
            to_age=59
            break;
          
          case "60 +":
            from_age =null
            to_age=60
            break;
        default:
          return null
      }
      if(gender==="male"){
        await dispatch(assingAgeAndGender({from_age,to_age,gender:1}))
      }
      if(gender==="female"){
        await dispatch(assingAgeAndGender({from_age,to_age,gender:0}))
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
      <div className="gender-age-selection">
        <form action="blank" className="gender-age-form" onSubmit={handleSubmit}>
          <div className="gender">
            <span>Choose Your Gender</span>

            <fieldset className="select-gender">
              <input type="radio" className='male-gender  single-gender' value="male" name='gender' onChange={(e) => { setGender(e.target.value) }} />
              <input type="radio" className='female-gender single-gender' value="female" name='gender' onChange={(e) => { setGender(e.target.value) }} />
            </fieldset>
          </div>

          <div className="age-group">
            <span>Select your Age </span>
            <fieldset className="select-age-group">
              <input name="age" type="radio" value="<18" className='select-age' label=' < 18' onChange={(e) => { setAge(e.target.value) }} />
              <input name="age" type="radio" value="18-29" className='select-age' label='18-29' onChange={(e) => { setAge(e.target.value) }} />
              <input name="age" type="radio" value="20-29" className='select-age' label='20-29' onChange={(e) => { setAge(e.target.value) }} />
              <input name="age" type="radio" value="30-39" className='select-age' label='30-39' onChange={(e) => { setAge(e.target.value) }} />
              <input name="age" type="radio" value="40-49" className='select-age' label='40-49' onChange={(e) => { setAge(e.target.value) }} />
              <input name="age" type="radio" value="50-59" className='select-age' label='50-59' onChange={(e) => { setAge(e.target.value) }} />
              <input name="age" type="radio" value="60+" className='select-age' label='60 +' onChange={(e) => { setAge(e.target.value) }} />
            </fieldset>

          </div>
          <button type='submit' className='gender-age-submit-btn'  >Next</button>
        </form>
      </div>
    </>
  )
}

export default Genderage