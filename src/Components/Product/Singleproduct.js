import React from 'react'
import wish from "./Productsimg/wish.png"

function Singleproduct({prodname , prodimg , prodprice}) {
  return (
    <>
    <div className="single-product position-relative">
    <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill">
    <img src={wish} alt="addtocart" className='addtocart' />
    <span className="visually-hidden">unread messages</span>
  </span>
      <img src={prodimg} alt="" />
      <span>{prodname}</span>
      <p>&#x20a8; <span>{prodprice}</span></p>
    </div>
    </>
  )
}

export default Singleproduct