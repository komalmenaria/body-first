import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../Config";
import Category from './Category'
import Details from './Details'
import AddCategory from './AddCategory'
const Categories = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [categoryDetails, setcategoryDetails] = useState(false);
  async function changestatus(id, status) {
    try {
      await axios.patch(`${config.BASE_URL}category/${id}`, {
        is_active: status,
      });
      await getallcategories();
      getcatdetails(id);

    } catch (error) {
      alert(error.message);
    }
  }
  async function getallcategories() {
    return new Promise(async (resolve, reject) => {
      let data = await axios.get(`${config.BASE_URL}category`);
      console.log(data);
      setCategoryList(data.data.data);
      resolve(data);
    });
  }
  function getcatdetails(id) {
    let category = categoryList.find((e) => e.cat_id === id);
    if (category) setcategoryDetails(category);
  }
  useEffect(() => {
    getallcategories();
  }, []);
  return (
    <>
      <div className="container py-2 ">
        <AddCategory getallcategories ={getallcategories} />
      </div>
      <div className="container d-flex ">
        <div className="py-2">
          <table className="table table-bordered table-hover ">
            <thead>
              <tr>
                <th className="table-cell-padding-x px-5" scope="col">
                  ID
                </th>
                <th className="table-cell-padding-x px-5" scope="col">
                  Subcategory Name
                </th>
                <th className="table-cell-padding-x px-5" scope="col">
                  Status
                </th>
              </tr>
            </thead>
            
            <tbody>
              {categoryList.length
                ? categoryList.map((category, index) => {
                    return (
                      <Category
                        category={category}
                        key={index}
                        getcatdetails={getcatdetails}
                      />
                    );
                  })
                : "Catgories Not found"}
            </tbody>
          </table>
        </div>
        <div>
          {categoryDetails && (
            <Details category={categoryDetails} changestatus={changestatus} />
          )}
        </div>
      </div>
    </>
  );
};

export default Categories;
