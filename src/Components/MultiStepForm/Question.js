import React from 'react'

function Question() {
  return (
    <>
        <form action="#">
<center>What are you looking for?</center>

<div className='option-fields'>
<div className='single-ans-filed'>
<input type="radio" id="html" name="fav_language" value="HTML" />
<label for="html">HTML</label>
</div>
<div className='single-ans-filed'>
<input type="radio" id="css" name="fav_language" value="CSS" />
<label for="css">CSS</label>
</div>

</div>
    </form>
    </>
  )
}

export default Question