import React, { useState, useEffect } from "react";
import axios from "axios";
import Config from "../../Config";
import Select from "react-select";

const AddCategory = ({ getallcategories }) => {
  const [multipleSelect, setmultipleSelect] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [categoryDesc, setCategoryDesc] = useState("");
  const [categoryIcon, setCategoryIcon] = useState("");
  const [categoryProduct, setCategoryProduct] = useState("");
  const [categoryPoster, setCategoryPoster] = useState("");
  const [categoryPromo, setCategoryPromo] = useState("");
  const [categoryGender, setcategoryGender] = useState("1");
  const [categoryAge, setCategoryAge] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [multiage, setmultiage] = useState([]);
  // gender
  const createcategory = async (event) => {

    try {
      console.log(multiage)
      event.preventDefault();
      
  
      if (!multiage.length) {
        alert("Please Select Age");
        return;
      }
      
     
      
  
     
  
      let form_data=new FormData(document.getElementById("add_category_form"))

      if(multipleSelect.length){
        form_data.append('subcat_ids',multipleSelect.map((ms) => ms.value).toString())
      }
      form_data.append('age_ids',multiage.map((ms) => ms.value).toString())
      await axios.post(`${Config.BASE_URL}category`, form_data);
      getallcategories();
      document.getElementById("CategoryModal_Close").click();
      document.getElementById("add_category_form").reset();
      alert("Success");

    } catch (error) {
      alert(error.message);
    }
   
  };

  const handleIcon = (e) => {
    console.log("submitting");
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setCategoryIcon(reader.result);
    };
  };
  const handleProduct = (e) => {
    console.log("submitting");
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setCategoryProduct(reader.result);
    };
  };
  const handlePoster = (e) => {
    console.log("submitting");
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setCategoryPoster(reader.result);
    };
  };
  const handlePromo = (e) => {
    console.log("submitting");
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setCategoryPromo(reader.result);
    };
  };
  async function getallsubcategories() {
    let body = {
      is_active: 1,
    };
    return new Promise(async (resolve, reject) => {
      let data = await axios.get(`${Config.BASE_URL}subcat`, body);
      setSubCategories(data.data.data);
      resolve(data);
    });
  }
  useEffect(() => {
    getallsubcategories();
  }, []);
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Category
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className=" d-flex justify-content-between px-3 py-3">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Category Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="CategoryModal_Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="row g-3" onSubmit={createcategory} id="add_category_form">
                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label">
                    Category Name
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    name="cat_name"
                    onChange={(e) => {
                      setCategoryName(e.target.value);
                    }}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress2" className="form-label">
                    Category Description
                  </label>
                  <input
                    required
                    type="text"
                    name="cat_desc"
                    className="form-control"
                    id="inputAddress2"
                    onChange={(e) => {
                      setCategoryDesc(e.target.value);
                    }}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress2" className="form-label">
                    Add Subcategory (Optional)
                  </label>
                  <Select
                    className="react-select info"
                    classNamePrefix="react-select"
                    placeholder="Choose Subcategories"
                    name="multipleSelect"
                    closeMenuOnSelect={false}
                    isMulti
                    value={multipleSelect}
                    onChange={(value) => setmultipleSelect(value)}
                    options={[
                      {
                        value: "",
                        label: "Choose Subcategories",
                        isDisabled: true,
                      },
                      ...subCategories?.map(
                        ({ subcat_id: value, subcat_name: label }) => ({
                          value,
                          label,
                        })
                      ),
                    ]}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">
                    Category Icon
                  </label>
                  <input
                    required
                    type="file"
                    name="cat_img"
                    className="form-control"
                    id="inputCity"
                    accept="image/*"
                    onChange={handleIcon}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">
                    Category Product
                  </label>
                  <input
                    required
                    type="file"
                    className="form-control"
                    id="inputCity"
                    name="product_img"
                    accept="image/*"
                    onChange={handleProduct}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">
                    Category Poster
                  </label>
                  <input
                    required
                    type="file"
                    name="poster_img"
                    className="form-control"
                    id="inputCity"
                    accept="image/*"
                    onChange={handlePoster}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">
                    Category Promo
                  </label>
                  <input
                    required
                    type="file"
                    className="form-control"
                    name="promo_img"
                    id="inputCity"
                    accept="image/*"
                    onChange={handlePromo}
                  />
                </div>
                <div className="row">
                  <div class="form-check col-md-6">
                    <input
                      class="form-check-input"
                      type="radio"
                     
                      id="exampleRadios1"
                      value="1"
                      name="gender"
                      checked
                      required
                      onChange={(e) => {
                        if (e.target.checked) {
                          setcategoryGender(e.target.value);
                        }
                      }}
                    />
                    <label class="form-check-label" for="exampleRadios1">
                      Male
                    </label>
                  </div>
                  <div class="form-check col-md-6">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      id="exampleRadios2"
                      value="0"
                      required
                      onChange={(e) => {
                        if (e.target.checked) {
                          setcategoryGender(e.target.value);
                        }
                      }}
                    />
                    <label class="form-check-label" for="exampleRadios2">
                      Female
                    </label>
                  </div>
                  <div class="form-check col-md-6">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      id="exampleRadios2"
                      value="2"
                      required
                      onChange={(e) => {
                        if (e.target.checked) {
                          setcategoryGender(e.target.value);
                        }
                      }}
                    />
                    <label class="form-check-label" for="exampleRadios2">
                      Both
                    </label>
                  </div>
                </div>

                <div className="form-check">
                <Select
                    className="react-select info"
                    classNamePrefix="react-select"
                    placeholder="Choose Age"
                    name="multipleSelect"
                    closeMenuOnSelect={false}
                    isMulti
                    value={multiage}
                    onChange={(value) => setmultiage(value)}
                    options={[
                      {
                        value: "",
                        label: "Choose Age",
                        isDisabled: true,
                      },
                      {
                        value: "1",
                        label: "<18",
                      },
                      {
                        value: "2",
                        label: "18-29",
                      },
                      {
                        value: "3",
                        label: "20-29",
                      },
                      {
                        value: "4",
                        label: "30-39",
                      },
                      
                      {
                        value: "5",
                        label: "40-49",
                      },
                      {
                        value: "6",
                        label: "50-59",
                      },
                      {
                        value: "7",
                        label: "60+",
                      },
               
                      ]}
                  />
                  {/* <select
                    class="form-select"
                    id="exampleRadios3"
                    aria-label="Default select example"
                    required
                    onChange={(e) => {
                      setCategoryAge(e.target.value);
                    }}
                  >
                    <option selected disabled value={"NOT_SELECTED"}>
                      Select AGE Range
                    </option>
                    <option value="<18">{"<18"} </option>
                    <option value="18-29">18-29 </option>
                    <option value="20-29">20-29 </option>
                    <option value="30-39">30-39 </option>
                    <option value="50-59">50-59 </option>
                    <option value="60+">60+ </option>
                  </select> */}

                  <label class="form-check-label" for="exampleRadios3">
                    Age
                  </label>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
