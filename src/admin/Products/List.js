import React ,{useState , useEffect} from 'react'


function List({product , getproductdetail}) {
  return (
    
  
  <tr onClick={()=>{
        getproductdetail(product.product_id)
    }}> 
      <th className="text-center" scope="row">{product.product_id}</th>
      <td className="text-center">{product.product_name}</td>
      <td className="text-center">{product.is_active ?  <span class="badge bg-success rounded-pill">Active</span> :  <span class="badge bg-danger rounded-pill">Inactive</span> }</td>
    </tr>
 

  )
}

export default List