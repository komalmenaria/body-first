import React from 'react'
import Subcategorydata from './Subcategorydata'
import Subcategory from './Subcategory'

function Subcategories() {
  return (
    <>
    <div className='subcategories-section'>
         <div className="subcategories">
         <h1>Weight Management</h1>

<div className="all-sub-categories">
{Subcategorydata.data.map((item,index)=>{
return(
<Subcategory key={index} subcatimage={item.subcatimage}  subcatname={item.subcatname} />
)
})}
</div>
         </div>

    </div>
    </>
  )
}

export default Subcategories