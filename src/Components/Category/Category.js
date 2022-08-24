import React from 'react'
import {Link} from "react-router-dom";

function Category({categimage, categname}) {
  return (
    <>
    <Link to="#" className="single-category">
        <img src={categimage} alt="" />

        <span>{categname}</span>
    </Link>
    </>
  )
}

export default Category