import React, { useState, useEffect } from 'react'
import removewish from "./Productsimg/removewish.png"
import addwish from "./Productsimg/addwish.png"
import productDefalutImage from './Productsimg/product1.png'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../actions/categoryAction'
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';


function Singleproduct({ prodname, prodimg, prodprice, prod_id, productObj }) {
  const dispatch = useDispatch()
  const navigation = useNavigate()
  let { cart } = useSelector(state => state.categoryData)
  const [cartItem, setcartItem] = useState([]);
  const [show, setShow] = useState(true)
  useEffect(() => {
    let productInCart = cart.find(e => e.product_id === prod_id)
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
      <div className="single-product position-relative" data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
        <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill" onClick={() => {
          setShow(!show);
          handleCart(prod_id, show)
        }}>
          {
            show ? <LazyLoadImage effect="blur" src={removewish} alt="addtocart" className='addtocart' /> : <LazyLoadImage effect="blur" src={addwish} alt="addtocart" className='addtocart' />
          }
          <span className="visually-hidden">unread messages</span>
        </span>
        <LazyLoadImage id='product-singleimg' effect="blur" src={prodimg ? prodimg : productDefalutImage} alt="" onClick={() => {

          navigation(`/openproduct?product_id=${prod_id}`)
        }} />
        <span>{prodname}</span>
        <p>&#x20a8; <span>{prodprice}</span></p>
      </div>
    </>
  )
}

export default Singleproduct