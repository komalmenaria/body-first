import React,{useState,useEffect} from 'react'
import { useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux'
import { getQuestions } from '../../actions/categoryAction';

function Category({category}) {
  const navigation=useNavigate()
  const dispatch =useDispatch();
  let {subcat_ids}=category
  const [url, setUrl] = useState("#");
useEffect(() => {
  if(subcat_ids?.length){
    setUrl(`/subcategories?cat_id=${category.cat_id}`)
  }else{
    setUrl(`/catdesc?cat_id=${category.cat_id}`)
  } 
}, [category.cat_id,subcat_ids]);

const handleCatgeoryyClick =async(cat_id,title)=>{
    try {
      // if(url==`/catdesc?cat_id=${cat_id}`){
      //   await dispatch(getQuestions({cat_id,title}))
      //   navigation(url)
      // }else{
      //   navigation(url)
      // }
      navigation(url)
    } catch (error) {
      alert(error.message)
    }
  
}
  return (
    <>
    <button  className="single-category" onClick={()=>{
      handleCatgeoryyClick(category.cat_id,category.cat_name)
    }}>
        <img src={category.cat_img} alt="" />

        <span>{category.cat_name}</span>
    </button>
    </>
  )
}

export default Category