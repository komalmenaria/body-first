import React, { useState,useEffect } from "react";
import { useNavigate , Navigate } from "react-router-dom";
import { useAlert } from 'react-alert'

const Dashboard = () => {
  const token = localStorage.getItem("token");
  // console.log(token);
  const [loggedin, setloggedin] = useState(true);
const navigation = useNavigate()

  
  
  useEffect(() => {
    
  if (!token) {
    setloggedin(false);
  }
  },[loggedin])
  

  const navigate = useNavigate();
  function handleaddproduct() {
    navigate("/admin/product");
  }
  function handlesubmitcoupon() {
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

  const alert = useAlert()
  async function handleLogOut(){
  console.log("logged out");
  await localStorage.clear();
  alert.success("Logout Successfully");
  navigation('/admin/login');
  }

  return (
    <>
      {loggedin ? (
        <div className="d-flex justify-content-center flex-column">
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
            <div className="card-body" onClick={handlesubmitcoupon}>
              <h4 className="card-title text-center" style={{ color: "white" }}>
                Coupon
              </h4>
            </div>
          </div>
        </div>
        <center>
        <button type="button" style={{ color: "white" ,padding:"0px !important" }} className="btn btn-danger text-center"  onClick={handleLogOut} >Logout</button>
        </center>
        </div>
      ) : (
        <Navigate to="/admin/login" />
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
