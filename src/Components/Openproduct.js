import React, { useState, useEffect } from 'react'
import removewish from "./Product/Productsimg/removewish.png"
import addwish from "./Product/Productsimg/addwish.png"
import productDefalutImage from './Product/Productsimg/product1.png'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../actions/categoryAction'
import Logo from './Logo'


function Openproduct({ prodname, prodimg, prodprice, prod_id, productObj }) {
  const dispatch = useDispatch()
  let { cart } = useSelector(state => state.categoryData)
  const [cartItem, setcartItem] = useState([]);
  const [show, setShow] = useState(true)
  useEffect(() => {
    let productInCart = cart.find(e => e.product_id == prod_id)
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
      newCart.push(productObj)
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

          <h3>Category Name</h3>

          <img className='open-product-img' src={prodimg ? prodimg : productDefalutImage} alt="" />
          <div className="open-single-product-info">
            <span className='product-name'>{prodname}Body First</span>
            <div className="position-relative price-and-icon">

              <p>&#x20a8; <span>{prodprice}8788</span></p>
              <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill" onClick={() => {
                setShow(!show);
                handleCart(prod_id, show)
              }}>
                {
                  show ? <img src={removewish} alt="addtocart" className='addtocart addtocart-for-oepn-single-product' /> : <img src={addwish} alt="addtocart" className='addtocart addtocart-for-oepn-single-product' />
                }

              </span>
            </div>
          </div>
          
          
        </div>
        <div className="product-buttons">
      <button type='button' className='button-btn' >Back to Products</button>
 
    
      <button type='button' className='button-btn' >View Cart</button>

    </div>
      </section>
    </>
  )
}

export default Openproduct