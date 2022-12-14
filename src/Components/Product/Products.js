import React, { useEffect } from "react";
import Singleproduct from "./Singleproduct";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../actions/categoryAction";
import { addToCart } from "../../actions/categoryAction";
function Products() {
  let dispatch = useDispatch();
  let { products, cart } = useSelector((state) => state.categoryData);
  const navigation = useNavigate();
  function backtoCategories() {
    navigation("/categories");
  }
  const allProductsInCart = async () => {
    try {
      if (products.length) {
        console.log(products);
        await dispatch(addToCart(products));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="products" data-aos="zoom-in">
        <div className="all-products">
          {products.length
            ? products.map((item, index) => {
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
              })
            : "No Product Available on selected preference"}
        </div>
        <div className="product-buttons">
          <button
            type="button"
            className="button-btn"
            onClick={backtoCategories}
            
          >
            Back to Categories
          </button>
          {/* <button type='button' className='button-btn' onClick={() => {
            navigation('/cart')
          }} disabled={cart.length ? false : true} >View Cart</button> */}

          <button
            type="button"
            className="button-btn"
            onClick={allProductsInCart}
          >
            Add All In Carts
          </button>
        </div>
      </div>
    </>
  );
}

export default Products;
