import React from 'react'
import Category from './Category'
import data from './Categorydata'

function Categories() {
  return (
    <div className='categories-section'>
        <h1>Choose Your Category</h1>

        <div className="categories">
{data.categoryData.map((item,index)=>{
  return(
    <Category key={index} categimage={item.Image}  categname={item.name} />
  )
})}
        </div>

    </div>
  )
}

export default Categories