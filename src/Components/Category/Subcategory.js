import React from 'react'
import { useNavigate } from 'react-router-dom'
import img2 from "./Category/Weightloss.png"
import { LazyLoadImage } from 'react-lazy-load-image-component';


function Subcategory({ subcat }) {
  const navigation=useNavigate()
  // console.log(subcat)
  const HandleOnclick=()=>{
    
    navigation(`/catdesc?subcat_id=${subcat.subcat_id}`)
  }
  return (
    <button onClick={HandleOnclick} data-aos="flip-left">
    <div className='subcategory-single' >
      <LazyLoadImage id='sub-cat-singleimg ' effect="blur" src={subcat.subcat_img ? subcat.subcat_img : img2} alt="" />
      <span>{subcat.subcat_name}</span>

    </div>
    </button>
  )
}

export default Subcategory