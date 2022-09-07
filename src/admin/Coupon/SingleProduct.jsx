import React from 'react'

const SingleProduct = ({item}) => {
  return (
    <div class="card shadow-0 border mb-4">
    <div class="card-body">
      <div class="row">
        <div class="col-md-2">
          <img src={item.product_img}
            class="img-fluid" alt="Phone" />
        </div>
        <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
          <p class="text-muted mb-0 small">ProductID: {item.product_id}</p>
        </div>
        <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
          <p class="text-muted mb-0">{item.product_name}</p>
        </div>
   
        <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
          <p class="text-muted mb-0 small">Qty: {item.qty}</p>
        </div>
        <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
          <p class="text-muted mb-0 small">&#x20a8;  {item.rate}</p>
        </div>
      </div>
      <hr class="mb-4" 
      style ={{ backgroundColor:'#e0e0e0',opacity:'1'}}
      />
    
    </div>
  </div>
  )
}

export default SingleProduct