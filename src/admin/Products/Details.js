import React ,{useState , useEffect} from 'react'


function Details({product , changestatus}) {
  return (
   

        <>   
<div className="card position-fixed mx-5 my-2  " style={{width:"18rem"}}>
  <img src={product.product_img} className="card-img-top img-fluid img-thumbnail" alt={product.product_name} />
  <div className="card-body">
    <h5 className="card-title text-center fw-bold fs-4">{product.product_name}</h5>
    <p className="card-text text-center fw-semibold"> Price : {product.product_price}</p>
    <div className="d-grid gap-2">
    {product.is_active ?  <button  type="button" className="btn btn-danger" onClick={()=>{changestatus(product.product_id,0)}}> InActive </button> : <button type="button" className="btn btn-success" onClick={()=>{changestatus(product.product_id,1)}}> Active </button>}</div>
  </div>
</div>
        
        </>
  )
}

export default Details