import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./List";
import config from "../../Config";
import Details from "./Details";

const Products = () => {
  const [productlist, setProductList] = useState([]);
  const [detailproduct, setdetailproduct] = useState(false);
  
  const [name, setname] = useState('')
  const [price, setprice] = useState('')
  const [image, setimage] = useState('')

  const handleFileInputChange = (e) => {
    console.log("submitting");
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setimage(reader.result);
    };
  };

async function changestatus(id , status){
try {
  // console.log(id,status)
  await axios.patch(`${config.BASE_URL}product/${id}`,{
    is_active : status

  });
  await getallproduct();
  getproductdetail(id);
} catch (error) {
  alert(error.message)
}
}

  async function createproduct(){
try {
  let description = "hello"
    console.log(name , price , image)
    await axios.post(`${config.BASE_URL}product`,{
      product_name : name,
      product_desc : description,
      product_img : image,
      product_price : price

    });
    getallproduct();
    
} catch (error) {
  alert(error.message)
}

    
  }

  async function getallproduct() {
    return new Promise( async (resolve , reject) =>{
      let data = await axios.get(`${config.BASE_URL}product`);
      // console.log(data);
      setProductList(data.data.data);
      resolve(data)
    })
   
  }

  function getproductdetail(id) {
    let product = productlist.find((e) => e.product_id === id);
    if (product) setdetailproduct(product);
  }

  useEffect(() => {
    getallproduct();
  }, []);
  return (
    <>
      <div className="admin-product">
        <div className="left">
          {productlist.length
            ? productlist.map((product, index) => {
                return (
                  <List product={product} getproductdetail={getproductdetail} />
                );
              })
            : "Product Not found"}
        </div>
        <div className="right">
          {detailproduct && <Details product={detailproduct} changestatus={changestatus} />}
        </div>
        <div>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add Product
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form class="row g-3">
                    <div class="col-12">
                      <label for="inputAddress" class="form-label">
                        Product Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputAddress"
                        placeholder="Product Name"
                        onChange={(e)=>  {setname(e.target.value)}}
                      />
                    </div>
                    <div class="col-12">
                      <label for="inputAddress2" class="form-label">
                        Product Price
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="inputAddress2"
                        placeholder="Product Price"
                        onChange={(e)=>  {setprice(e.target.value)}}
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="inputCity" class="form-label">
                        Product Image
                      </label>
                      <input
                        type="file"
                        class="form-control"
                        id="inputCity"
                        accept="image/*"
              onChange={handleFileInputChange}
                      />
                    </div>

                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary" onClick={createproduct}>
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
