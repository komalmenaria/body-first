import React from 'react'

function Subcategory({subcatimage,subcatname}) {
  return (
    <div className='subcategory-single'>
<img src={subcatimage} alt="" />
<span>{subcatname}</span>

    </div>
  )
}

export default Subcategory