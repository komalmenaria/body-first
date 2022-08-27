import React,{useEffect} from 'react'
import Singleproduct from './Singleproduct';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { getProducts } from '../../actions/categoryAction';
import { addToCart } from '../../actions/categoryAction';
function Products() {
  let dispatch=useDispatch()
  let {products,cart}=useSelector(state=>state.categoryData)
  const navigation = useNavigate();
  function backtoCategories(){
    navigation('/categories')
  }
useEffect(() => {
 dispatch(getProducts({"answers":[1,3]}))
}, [dispatch]);
const allProductsInCart = async()=>{
  try {
    if(products.length){
      console.log(products)
      await dispatch(addToCart(products))
    }
  } catch (error) {
      console.log(error)
  }
  
}
  return (
    <>
    <div className="products">
    
            <div className="all-products">
            { products.length&& products.map((item, index) => {
              return (
                <Singleproduct
                  key={index}
                  prodname={item.product_name}
                  prodimg={item.product_img}
                  prodprice={item.product_price}
                  prod_id={item.product_id}
                  productObj={item}
                />
              );
            })}
            </div>
            <div className="product-buttons">
      <button type='button' className='button-btn' onClick={backtoCategories} >Back to Categories</button>
     {cart.length?  <button type='button' className='button-btn' onClick={()=>{
         navigation('/cart')
      }} >View Cart</button> :""}
    
      <button type='button' className='button-btn' onClick={allProductsInCart}>Add All In Carts</button>

    </div>
    </div>
  
    </>
  )
}

export default Products