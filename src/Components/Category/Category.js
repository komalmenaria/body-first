import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom";

function Category({category}) {
  let {subcat_ids}=category
  const [url, setUrl] = useState("#");
useEffect(() => {
  if(subcat_ids?.length){
    setUrl(`/subcategories/${category.cat_id}`)
  }else{
    setUrl(`/form`)
  } 
}, [category.cat_id,subcat_ids]);
  return (
    <>
    <Link to={url} className="single-category">
        <img src={category.cat_img} alt="" />

        <span>{category.cat_name}</span>
    </Link>
    </>
  )
}

export default Category