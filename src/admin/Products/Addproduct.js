import React from "react";

const Addproduct = ({handleFileInputChange,setname,setprice,createproduct}) => {
  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Product
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className=" d-flex justify-content-between px-3 py-3">
                <h5 className="modal-title" id="exampleModalLabel">
                 Add Product Details
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form className="row g-3" id="add_product_form">
                  <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">
                      Product Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      name="product_name"
                      onChange={(e) => {
                        setname(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">
                      Product Price
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="product_price"
                      id="inputAddress2"
                      onChange={(e) => {
                        setprice(e.target.value);
                      }}
                    />
                    <input type="hidden" name="product_desc" value={"DEfalut desc"} id="" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">
                      Product Image
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="inputCity"
                      accept="image/*"
                      name="product_img"
                      // onChange={handleFileInputChange}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={createproduct}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addproduct;
