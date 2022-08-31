import React ,{useState , useEffect} from 'react'


function List({product , getproductdetail}) {
  return (
    <div onClick={()=>{
        getproductdetail(product.product_id)
    }}>
    Name :    {product.product_name}
    </div>
  )
}

export default List