import React from 'react'

const List = ({ subcategory, getsubcatdetails }) => {
  return (
    <>
      <tr onClick={() => { getsubcatdetails(subcategory.subcat_id) }}>
        <th className="text-center" scope="row">{subcategory.subcat_id}</th>
        <td className="text-center">{subcategory.subcat_name}</td>
        <td className="text-center">{subcategory.is_active ? <span className="badge bg-success rounded-pill">Active</span> : <span className="badge bg-danger rounded-pill">Inactive</span>}</td>
      </tr>
    </>
  )
}

export default List