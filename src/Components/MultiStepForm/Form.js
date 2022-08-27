import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
function Form() {
  let { questions,title } = useSelector(state => state.categoryData)
 
  return (
    <>
      <div className="multistep-form">
        <div className="single-form">
          <h1> {title}</h1>
          {questions.length ?
           <form action="#">
           <p>What are you looking for?</p>
 
           <fieldset>
             <div class="form-check">
               <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
               <label class="form-check-label" for="flexRadioDefault1">
                 Default radio
               </label>
             </div>
             <div class="form-check">
               <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
               <label class="form-check-label" for="flexRadioDefault1">
                 Default radio
               </label>
             </div>
           </fieldset>
         </form>:"No question Found"
          }
         
        
        </div>
      </div>

    </>
  )
}

export default Form