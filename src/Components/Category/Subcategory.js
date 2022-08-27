import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
function Subcategory({subcatimage,subcatname}) {
  let {}=useSelector(state=>state.categoryReducer)
  return (
    <div className='subcategory-single'>
<img src={subcatimage} alt="" />
<span>{subcatname}</span>

    </div>
  )
}

export default Subcategory