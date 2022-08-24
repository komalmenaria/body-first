import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategory } from "../../actions/categoryAction";
import Category from "./Category";

function Categories() {
  const dispatch = useDispatch();
  const categoryData = useSelector((state) => state.categoryData);
  let { categories } = categoryData;
  useEffect(() => {
    (async () => {
      await dispatch(getCategory());
    })();
  }, [dispatch]);
  return (
    <div className="categories-section">
      <h1>Choose Your Category</h1>

      <div className="categories">
        {categories.map((item, index) => {
          return <Category key={index} category={item} />;
        })}
      </div>
    </div>
  );
}

export default Categories;
