import React from 'react'
import { useNavigate } from 'react-router-dom'
import img2 from "./Category/Weightloss.png"


function Subcategory({ subcat ,cat_id}) {
  console.log("+++++++ this cat id from subcategory selection",cat_id)
  const navigation=useNavigate()
  // console.log(subcat)
  const HandleOnclick=()=>{
    // catdesc?cat_id=${category.cat_id}
    navigation(`/catdesc?cat_id=${cat_id}&subcat_id=${subcat.subcat_id}`)
  }
  return (
    <button onClick={HandleOnclick} data-aos="flip-left">
    <div className='subcategory-single' >
      <img  effect="blur" src={subcat.subcat_img ? subcat.subcat_img : img2} alt="" />
      <span>{subcat.subcat_name}</span>

    </div>
    </button>
  )
}

export default Subcategory