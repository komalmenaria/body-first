import React, { useState ,useEffect} from 'react'
import removewish from "./Product/Productsimg/removewish.png"
import addwish from "./Product/Productsimg/addwish.png"
import check from "./Product/Productsimg/Checked-Checkbox.png"
import uncheck from "./Product/Productsimg/Unchecked-Checkbox.png"
import { LazyLoadImage } from 'react-lazy-load-image-component';

import productDefalutImage from './Product/Productsimg/product1.png'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart,addToCheckout } from '../actions/categoryAction'
function Singlewishlistitem({ product }) {
  const dispatch=useDispatch()
  const [cartItem, setcartItem] = useState([]);
  const [checkoutItem, setcheckoutItem] = useState([]);
  let  {cart,checkout}=useSelector(state=>state.categoryData)
  const [show, setShow] = useState(true)
  const [select, setSelect] = useState(true)
  useEffect(() => {
    let productInCart=cart.find(e=>e.product_id==product.product_id)
    let productIncheckout=checkout.find(e=>e.product_id==product.product_id)
    if(productInCart){
      setShow(false)
    }
    if(productIncheckout){
      setSelect(false)
    }
    if(cart){
      setcartItem(cart)
    }
    if(checkout){setcheckoutItem(checkout)}
  }, [cart,checkout]);
  const handleCart= async(product_id,show)=>{
    let newCart=cartItem
      console.log(newCart)
      if(!show){
          newCart=newCart.filter((e)=>e.product_id !==product_id)
          console.log(newCart)
          
      } else{
        newCart.push(product)
        console.log(newCart)
      
      }
      
      setcartItem(newCart)
      await dispatch(addToCart(newCart))
    } 

  const handleCheckout=async(product_id,select)=>{
    let newCart=checkoutItem
      console.log(newCart)
      if(!select){
          newCart=newCart.filter((e)=>e.product_id !==product_id)
          console.log(newCart)
          
      } else{
        newCart.push(product)
        console.log(newCart)
      
      }
      
      setcheckoutItem(newCart)
      await dispatch(addToCheckout(newCart))
    } 
  
  return (
    <>
      <div className="single-product position-relative"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <span className="position-absolute bottom-0 start-0 translate-middle badge rounded-pill"
        onClick={()=>{
          setShow(!show);
          handleCart(product.product_id,show)
        }}
        >
          {
            show ? <LazyLoadImage effect="blur" src={removewish} alt="addedtocart" className='addedtocart' /> : <LazyLoadImage effect="blur" src={addwish} alt="addedtocart" className='addedtocart' />
          }

        </span>
        <span className="position-absolute bottom-0 start-100 translate-middle badge rounded-pill" onClick={() =>{
          setSelect(!select)
          handleCheckout(product.product_id,select)
          
        } }>
          {
            select ? <LazyLoadImage effect="blur" src={uncheck} alt="check-uncheck" className='check-uncheck' /> : <LazyLoadImage effect="blur" src={check} alt="check-uncheck" className='check-uncheck' />
          }

        </span>
        <LazyLoadImage effect="blur" src={product.product_img?product.product_img:productDefalutImage} alt="" />
        <span>{product.product_name}</span>
        <p>&#x20a8; <span>{product.product_price}</span></p>
      </div>
    </>
  )
}

export default Singlewishlistitem