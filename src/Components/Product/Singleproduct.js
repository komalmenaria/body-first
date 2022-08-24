import React ,{useState} from 'react'
import removewish from "./Productsimg/removewish.png"
import addwish from "./Productsimg/addwish.png"


function Singleproduct({prodname , prodimg , prodprice}) {
  const [show, setShow] = useState(true)
  return (
    <>
    <div className="single-product position-relative">
    <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill" onClick={()=>setShow(!show)}>
    {
      show ? <img src={removewish} alt="addtocart" className='addtocart' /> : <img src={addwish} alt="addtocart" className='addtocart' />
    }
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