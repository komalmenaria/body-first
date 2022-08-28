import React, { useState, useEffect } from 'react'
import removewish from "./Product/Productsimg/removewish.png"
import addwish from "./Product/Productsimg/addwish.png"
import productDefalutImage from './Product/Productsimg/product1.png'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../actions/categoryAction'

import Logo from './Logo'
import { useLocation, useNavigate } from 'react-router-dom'


function Openproduct({}) {
  const navigation= useNavigate()
  let { products, cart ,title} = useSelector(state => state.categoryData)
  const search = useLocation().search;
  const product_id = new URLSearchParams(search).get('product_id');
  const [prodObj, setprodObj] = useState({});
  const dispatch = useDispatch()
 
  const [cartItem, setcartItem] = useState([]);
  const [show, setShow] = useState(true)
  useEffect(() => {
   let productCheck=products.find(e=>e.product_id==product_id)
   if(productCheck){
    setprodObj(productCheck)
   }
  }, []);
  useEffect(() => {
    let productInCart = cart.find(e => e.product_id == product_id)
    if (productInCart) {
      setShow(false)
    }
    if (cart) {
      setcartItem(cart)
    }
  }, [cart]);
  const handleCart = async (product_id, show) => {
    let newCart = cartItem
    console.log(newCart)
    if (!show) {
      newCart = newCart.filter((e) => e.product_id !== product_id)
       console.log(newCart)

    } else {
      newCart.push(prodObj)
      console.log(newCart)

    }

    setcartItem(newCart)
    await dispatch(addToCart(newCart))
  }
  return (
    <>
      <section className='open-single-product-bg'>
        <Logo height={150} width={220} />
        <div className="open-single-product">

          <h3>{title}</h3>

          <img className='open-product-img' src={prodObj.product_img ? prodObj.product_img : productDefalutImage} alt="" />
          <div className="open-single-product-info">
            <span className='product-name'>{prodObj?.product_name} </span>
            <div className="position-relative price-and-icon">

              <p>&#x20a8; <span>{prodObj?.product_price} </span></p>
              <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill" onClick={() => {
                setShow(!show);
                handleCart(product_id, show)
              }}>
                {
                  show ? <img src={removewish} alt="addtocart" className='addtocart addtocart-for-oepn-single-product' /> : <img src={addwish} alt="addtocart" className='addtocart addtocart-for-oepn-single-product' />
                }

              </span>
            </div>
          </div>
          
          
        </div>
        <div className="product-buttons">
      <button type='button' className='button-btn' onClick={()=>{
        navigation('/products')
      }} >Back to Products</button>
 
    
      <button type='button' className='button-btn'onClick={()=>{
        navigation('/cart')
      }} >View Cart</button>

    </div>
      </section>
    </>
  )
}

export default Openproduct