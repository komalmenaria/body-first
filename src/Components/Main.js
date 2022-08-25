import React from 'react';
import {
    Route,
    Routes,
  } from "react-router-dom";
import Home from './Home'
import Signin from './Signin'
import Verification from './Verification'
import Navbar from './Navbar';
import Genderage from './Genderage';
import Categories from './Category/Categories';
import Subcategories from './Category/Subcategories';
import Form from './MultiStepForm/Form';
import Products from './Product/Products.js'
import Cart from './Cart';
import Coupon from './Coupon';
import Catdesc from './Catdesc';



function Main() {
  return (
    <>
    <Navbar />
   
    <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={ <Signin />} />
          <Route exact path="/verification" element={<Verification />} />
          <Route exact path="/Genderage" element={<Genderage />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route exact path="/subcategories" element={<Subcategories />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/coupon" element={<Coupon />} />
          <Route exact path="/catdesc" element={<Catdesc />} />



        </Routes>
  
    </>
  )
}

export default Main