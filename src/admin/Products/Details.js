import React ,{useState , useEffect} from 'react'


function Details({product , changestatus}) {
  return (
    <div>


        Name : {product.product_name} <br />
         Price : {product.product_price}
         <img src={product.product_img} alt="" />
         Status : {product.is_active}
{product.is_active ?  <button onClick={()=>{changestatus(product.product_id,0)}}> InActive </button> : <button onClick={()=>{changestatus(product.product_id,1)}}> Active </button>}
         
        

    </div>
  )
}

export default Details