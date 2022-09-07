import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./List";
import config from "../../Config";
import Details from "./Details";
import Addproduct from "./Addproduct";

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
    let form_data=new FormData(document.getElementById("add_product_form"))
    await axios.post(`${config.BASE_URL}product`,form_data);
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
   <div className="container py-2 ">
<Addproduct handleFileInputChange={handleFileInputChange} setname={setname} setprice={setprice} createproduct={createproduct} />
</div>
      <div className="container d-flex ">
      
        <div className="py-2">
        <table className="table table-bordered table-hover ">
    <thead>
      <tr>
        <th  className="table-cell-padding-x px-5"  scope="col">ID</th>
        <th  className="table-cell-padding-x px-5" scope="col">Product Name</th>
        <th className="table-cell-padding-x px-5"  scope="col">Status</th>
             
      </tr>
    </thead>
    <tbody >
          {productlist.length
            ? productlist.map((product, index) => {
                return (
                  <List product={product} getproductdetail={getproductdetail} />
                );
              })
            : "Product Not found"}
             </tbody>
</table>
        </div>
        <div className="right">
          {detailproduct && <Details product={detailproduct} changestatus={changestatus} />}
        </div>
        
      </div>
 
      
    </>
  );
};

export default Products;
