import React from 'react'
import { useNavigate } from 'react-router-dom'
import img2 from "./Category/Weightloss.png"

function Subcategory({ subcat }) {
  const navigation=useNavigate()
  // console.log(subcat)
  const HandleOnclick=()=>{
    
    navigation(`/catdesc?subcat_id=${subcat.subcat_id}`)
  }
  return (
    <button onClick={HandleOnclick}>
    <div className='subcategory-single' >
      <img src={subcat.subcat_img ? subcat.subcat_img : img2} alt="" />
      <span>{subcat.subcat_name}</span>

    </div>
    </button>
  )
}

export default Subcategory