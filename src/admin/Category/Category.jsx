import React from 'react'

const Category = ({ category, getcatdetails}) => {
  return (
    <>
    <tr onClick={() => { getcatdetails(category.cat_id) }}>
      <th className="text-center" scope="row">{category.cat_id}</th>
      <td className="text-center">{category.cat_name}</td>
      <td className="text-center">{category.is_active ? <span className="badge bg-success rounded-pill">Active</span> : <span className="badge bg-danger rounded-pill">Inactive</span>}</td>
    </tr>
  </>
  )
}

export default Category