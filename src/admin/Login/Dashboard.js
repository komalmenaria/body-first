import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  // console.log(token);
  const [loggedin, setloggedin] = useState(true);


  
  
  useEffect(() => {
    
  if (!token) {
    setloggedin(false);
  }
  },[loggedin])
  

  const navigate = useNavigate();
  function handleaddproduct() {
    navigate("/admin/product");
  }
  function handlesubmitcoupan() {
    navigate("/admin/product");
  }
  function handleaddquestion() {
    navigate("/admin/questions");
  }
  function handleaddsubcategory() {
    navigate("/admin/subcategories");
  }
  function handleaddcategory() {
    navigate("/admin/categories");
  }

  return (
    <>
      {loggedin ? (
        <div className="container d-flex justify-content-center flex-wrap p-4">
          <div
            className="card text-bg-success m-2 p-4"
            style={{ width: "18rem", cursor: "pointer" }}
          >
            <div className="card-body" onClick={handleaddproduct}>
              <h4 className="card-title text-center" style={{ color: "white" }}>
                Add Product
              </h4>
            </div>
          </div>

          <div
            className="card text-bg-danger m-2 p-4"
            style={{ width: "18rem", cursor: "pointer" }}
          >
            <div className="card-body" onClick={handleaddcategory}>
              <h4 className="card-title text-center" style={{ color: "white" }}>
                Add Category
              </h4>
            </div>
          </div>

          <div
            className="card text-bg-warning m-2 p-4"
            style={{ width: "18rem", cursor: "pointer" }}
          >
            <div className="card-body" onClick={handleaddsubcategory}>
              <h4 className="card-title text-center" style={{ color: "white" }}>
                Add Subcategory
              </h4>
            </div>
          </div>

          <div
            className="card text-bg-primary m-2 p-4"
            style={{ width: "18rem", cursor: "pointer" }}
          >
            <div className="card-body" onClick={handleaddquestion}>
              <h4 className="card-title text-center" style={{ color: "white" }}>
                Add Question / Answer
              </h4>
            </div>
          </div>
          <div
            className="card text-bg-secondary m-2 p-4"
            style={{ width: "18rem", cursor: "pointer" }}>
            <div className="card-body" onClick={handlesubmitcoupan}>
              <h4 className="card-title text-center" style={{ color: "white" }}>
                Coupan
              </h4>
            </div>
          </div>
          <button onClick={()=>{
  localStorage.clear();
}} >Logout</button>
        </div>
      ) : (
        "sorry"
      )}


      {/* {loggedin ? <div>
<button onClick={()=>{
  localStorage.clear();
}} >Logout</button>
      </div>: 'sorrry' } */}
    </>
  );
};

export default Dashboard;
