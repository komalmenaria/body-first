import React,{useState,useEffect} from "react";
import Subcategorydata from "./Subcategorydata";
import Subcategory from "./Subcategory";
import { useSelector,useDispatch } from 'react-redux'
import { useLocation } from "react-router-dom";

function Subcategories() {
  let {categories}=useSelector(state=>state.categoryData)
  const [subcats, setsubcats] = useState([]);
  const search = useLocation().search;
  const cat_id = new URLSearchParams(search).get('cat_id');
  useEffect(() => {
    let subcat_ids=categories.find(e=>e.cat_id==cat_id)
    if(subcat_ids){
      setsubcats(subcat_ids.subcat_ids)
    }
  }, []);
  return (
    <>
      <div className="subcategories-section" data-aos="zoom-in">
        <div className="subcategories">
          <h1>Weight Management</h1>

          <div className="all-sub-categories">
            {subcats.length&& subcats.map((item, index) => {
              return (
                <Subcategory
                  key={index}
                  subcat ={item}
                  
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Subcategories;
