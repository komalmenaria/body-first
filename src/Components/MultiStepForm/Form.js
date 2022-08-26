import React from 'react'

function Form() {
  return (
   <>
   <div className="multistep-form">
    <div className="single-form">
    <h1> Category Title </h1>
    
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
    </form>
    </div>
   </div>
   
   </>
  )
}

export default Form