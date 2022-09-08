import React, { useState, useEffect } from "react";
import axios from "axios";
import Config from "../../Config";
import Select from "react-select";

const AddQuestion = ({getAllQuestion}) => {
  const [type, setType] = useState("");
  const [catgeoryList, setCatgeoryList] = useState([]);
  const [subCatgeoryList, setSubCatgeoryList] = useState([]);
  const [productList, setproductList] = useState([]);
  const [cat, setcat] = useState("");
  const [question, setquestion] = useState("");
  const [subcat, setsubcat] = useState("");
  const [answersCount, setanswersCount] = useState(1);
  const [serviceList, setServiceList] = useState([
    { option: "", products_ids: [] },
  ]);

  const createQuestion = async (event) => {
    event.preventDefault();

    try {
      
      if (!type) {
        alert("Please select Type");
        return;
      }
      if (!cat && !subcat){
        alert("Please Select Category or Subcategory")
        return
      }

     
      let body={question:question}
      if(cat)body.cat_id=cat
      if(subcat)body.subcat_id=subcat
      body.answers=serviceList

      console.log(body)
      await axios.post(`${Config.BASE_URL}questions/create`,body);
      document.getElementById("CategoryModal_Close").click();
      getAllQuestion()
      document.getElementById("ADD_QUESTION_FORM").reset();
      setServiceList([{ option: "", products_ids: [] },])
    } catch (error) {
      alert(error.message)
    }
  };
  async function getAllCategory() {
    return new Promise(async (resolve, reject) => {
      let data = await axios.get(`${Config.BASE_URL}category?is_active=1`);
      console.log(data);
      setCatgeoryList(data.data.data);
      resolve(data);
    });
  }
  async function getAllSubCategory() {
    return new Promise(async (resolve, reject) => {
      let data = await axios.get(`${Config.BASE_URL}subcat?is_active=1`);
      console.log(data);
      setSubCatgeoryList(data.data.data);
      resolve(data);
    });
  }
  async function getAllProduct() {
    return new Promise(async (resolve, reject) => {
      let data = await axios.get(`${Config.BASE_URL}product?is_active=1`);
      console.log(data);
      setproductList(data.data.data);
      resolve(data);
    });
  }
 

  const handleServiceChange = (e, index) => {
    const list = [...serviceList];
    const { name, value } = e.target;
    console.log(name, value);
    console.log(list[index][name]);

    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };
  const handleSelectChanges = (value, index) => {
    const list = [...serviceList];
    list[index]["products_ids"] = value;
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { option: "", products_ids: [] }]);
  };
  async function addRow() {
    setanswersCount(answersCount + 1);
    // document.getElementById("ansers_div").innerHTML= <AnserRow id={answersCount} deleteRow={deleteRow} productList={productList}/>
  }

  useEffect(() => {
    getAllSubCategory();
    getAllCategory();
    getAllProduct();
  }, []);
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Question
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
                Add Question Details
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
              <form
                className="row g-3"
                onSubmit={createQuestion}
                id="ADD_QUESTION_FORM"
              >
                {/* form shoud go here */}
                <div className="col-md-6">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    required
                    onChange={(e) => {
                      setcat(null);
                      setsubcat(null);
                      setType(e.target.value);
                    }}
                  >
                    <option selected disabled>
                      Open this select Type
                    </option>
                    <option value="1">Category</option>
                    <option value="2">Subcategory</option>
                  </select>
                </div>
                <div className="col-md-6">
                  {type == 1 && (
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      required
                      name="cat_id"
                      onChange={(e) => {
                        setcat(e.target.value);
                      }}
                    >
                      <option selected disabled>
                        Open this select Category
                      </option>
                      {catgeoryList.length &&
                        catgeoryList.map((cat) => {
                          return (
                            <option value={cat.cat_id}>{cat.cat_name}</option>
                          );
                        })}
                    </select>
                  )}
                  {type == 2 && (
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      required
                      name="subcat_id"
                      onChange={(e) => {
                        setsubcat(e.target.value);
                      }}
                    >
                      <option selected disabled>
                        Open this select SubCategory
                      </option>
                      {subCatgeoryList.length &&
                        subCatgeoryList.map((subcat) => {
                          return (
                            <option value={subcat.subcat_id}>
                              {subcat.subcat_name}
                            </option>
                          );
                        })}
                    </select>
                  )}
                </div>

                <div className="col-md-12">
                  <label htmlFor="inputAddress" className="form-label">
                    Questions
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    name="question"
                    required
                    placeholder="Enter Question"
                    onChange={(e) => {
                      setquestion(e.target.value);
                    }}
                  />
                </div>
                <div id="ansers_div">
                  {serviceList.map((singleService, index) => (
                    <div
                      key={index}
                      id={`single_ansers_${index}`}
                      className="row"
                    >
                      <div className="col-md-5">
                        <label htmlFor="inputAddress" className="form-label">
                          answer
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputAddress"
                          name={`option`}
                          placeholder="Enter Answer"
                          value={singleService.option}
                          onChange={(e) => handleServiceChange(e, index)}
                          required
                        />
                      </div>
                      <div className="col-md-5">
                        <Select
                          className="react-select info"
                          classNamePrefix="react-select"
                          placeholder="Choose Products"
                          name="multipleSelect"
                          closeMenuOnSelect={false}
                          isMulti
                          value={singleService.products_ids}
                          onChange={(value) =>
                            handleSelectChanges(value, index)
                          }
                          options={[
                            {
                              value: "",
                              label: "Choose Products",
                              isDisabled: true,
                            },
                            ...productList?.map(
                              ({ product_id: value, product_name: label }) => ({
                                value,
                                label,
                              })
                            ),
                          ]}
                        />
                      </div>
                      <div className="col-md-2">
                        {serviceList.length != 1 && (
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              handleServiceRemove(index);
                            }}
                          >
                            {" "}
                            remove
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={handleServiceAdd}
                  >
                    Add Answer
                  </button>
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

export default AddQuestion;
