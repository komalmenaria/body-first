import React ,{useState} from 'react'
import removewish from "./Product/Productsimg/removewish.png"
import addwish from "./Product/Productsimg/addwish.png"
import check from "./Product/Productsimg/Checked-Checkbox.png"
import uncheck from "./Product/Productsimg/Unchecked-Checkbox.png"


function Singlewishlistitem({prodname , prodimg , prodprice}) {
  const [show, setShow] = useState(true)
  const [select, setSelect] = useState(true)

  return (
    <>
    <div className="single-product position-relative">
    <span className="position-absolute bottom-0 start-0 translate-middle badge rounded-pill" onClick={()=>setShow(!show)}>
    {
      show ? <img src={removewish} alt="addedtocart" className='addedtocart' /> : <img src={addwish} alt="addedtocart" className='addedtocart' />
    }
    
  </span>
  <span className="position-absolute bottom-0 start-100 translate-middle badge rounded-pill" onClick={()=>setSelect(!select)}>
    {
      select ? <img src={uncheck} alt="check-uncheck" className='check-uncheck' /> : <img src={check} alt="check-uncheck" className='check-uncheck' />
    }
    
  </span>
      <img src={prodimg} alt="" />
      <span>{prodname}</span>
      <p>&#x20a8; <span>{prodprice}</span></p>
    </div>
    </>
  )
}

export default Singlewishlistitem