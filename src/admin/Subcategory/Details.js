import React from 'react'

const Details = ({subcategory , changestatus}) => {
  return (
    <div>
<>   
<div className="card position-fixed mx-5 my-2 px-3 ">
  <div className="container d-flex justify-content-center  align-items-start">
    <div className=" d-flex flex-column px-3 py-3 justify-content-center text-center">
        <h5 className="card-text">Subcategory Icon</h5>
        <img src={subcategory.subcat_img} className="card-img-top img-fluid img-thumbnail" alt={subcategory.subcat_name} />
    </div>
    <div className=" d-flex flex-column px-3 py-3 justify-content-center text-center">
        <h5 className="card-text">Product Image</h5>
        <img src={subcategory.product_img} className="card-img-top img-fluid img-thumbnail" alt={subcategory.subcat_name} />
    </div>
    <div className=" d-flex flex-column px-3 py-3 justify-content-center text-center">
        <h5 className="card-text">Poster Image</h5>
        <img src={subcategory.poster_img} className="card-img-top img-fluid img-thumbnail" alt={subcategory.subcat_name} />
    </div>
    <div className=" d-flex flex-column px-3 py-3 justify-content-center text-center">
        <h5 className="card-text">Promo Image</h5>
        <img src={subcategory.promo_img} className="card-img-top img-fluid img-thumbnail" alt={subcategory.subcat_name} />
    </div>
  </div>
  <div className="card-body">
    <h5 className="card-title text-center ">Name : {subcategory.subcat_name}</h5>
    <p className="card-text text-center "> Description : {subcategory.subcat_desc}</p>
    <div className="d-grid gap-2">
    {subcategory.is_active ?  <button  type="button" className="btn btn-danger" onClick={()=>{changestatus(subcategory.subcat_id,0)}}> InActive </button> : <button type="button" className="btn btn-success" onClick={()=>{changestatus(subcategory.subcat_id,1)}}> Active </button>}</div>
  </div>
</div>
        
        </>

    </div>
  )
}

export default Details