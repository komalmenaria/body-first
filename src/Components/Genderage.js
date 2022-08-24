import React from 'react'

function Genderage() {
  return (
    <>
      <div className="gender-age-selection">
        <form action="blank" className="gender-age-form">
          <div className="gender">
            <span>Choose Your Gender</span>

            <fieldset className="select-gender">
              <input type="radio" className='male-gender  single-gender' value="male"  name='gender'/>
              <input type="radio" className='female-gender single-gender' value="female" name='gender' />
            </fieldset>
          </div>

          <div className="age-group">
            <span>Select your Age </span>
            <fieldset className="select-age-group">
              <input name="age" type="radio"  value="<18"  className='select-age' label=' < 18'  />
              <input name="age" type="radio"  value="18-29" className='select-age' label='18-29'  />
              <input name="age" type="radio"  value="20-29" className='select-age' label='20-29'  />
              <input name="age" type="radio"  value="30-39" className='select-age' label='30-39'  />
              <input name="age" type="radio"  value="40-49"  className='select-age' label='40-49' />
              <input name="age" type="radio"  value="50-59"  className='select-age' label='50-59' />
              <input name="age" type="radio"  value="60+"  className='select-age' label='60 +' />
           </fieldset>

          </div>
          <button type='submit' className='gender-age-submit-btn'  >NEXT</button>
        </form>
      </div>
    </>
  )
}

export default Genderage