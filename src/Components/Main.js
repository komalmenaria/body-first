import React from "react";
import { Route, Routes } from "react-router-dom";
// import Home from './Home'
// import Signin from "./Signin";
// import Verification from "./Verification";
// import Navbar from "./Navbar";
// import Genderage from "./Genderage";
// import Categories from "./Category/Categories";
// import Subcategories from "./Category/Subcategories";
// import Form from "./MultiStepForm/Form";
// import Products from "./Product/Products.js";
// import Cart from "./Cart";
// import Coupon from "./Coupon";
// import Catdesc from "./Catdesc";
// import Openproduct from "./Openproduct";

import Products from "../admin/Products/Products";
import Spinner from "./Spinner";
import Navbar from "./Navbar";
const LazyHome = React.lazy(() => import("./Home"));
const LazySignin = React.lazy(() => import("./Signin")); 
const LazyVerification = React.lazy(() => import("./Verification"));  
const LazyGenderage = React.lazy(() => import("./Genderage")); 
const LazyCategories = React.lazy(() => import("./Category/Categories")); 
const LazySubcategories = React.lazy(() => import("./Category/Subcategories"));  
const LazyForm = React.lazy(() => import("./MultiStepForm/Form"));  
const LazyProducts = React.lazy(() => import("./Product/Products.js"));  
const LazyCart = React.lazy(() => import("./Cart")); 
const LazyCoupon = React.lazy(() => import("./Coupon")); 
const LazyCatdesc = React.lazy(() => import("./Catdesc"));  
const LazyOpenproduct = React.lazy(() => import("./Openproduct"));  

function Main() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <React.Suspense fallback={<Spinner />}>
              <LazyHome />
            </React.Suspense>
          }
        />
        <Route
          exact
          path="/signin"
          element={
            <React.Suspense fallback={<Spinner />}>
              <LazySignin />
            </React.Suspense>
          }
        />
        <Route
         exact
         path="/admin/product"
         element={<Products />}
        />
        <Route
          exact
          path="/verification"
          element={
            <React.Suspense fallback={<Spinner />}>
              <LazyVerification />
            </React.Suspense>
          }
        />
        <Route
          exact
          path="/Genderage"
          element={
            <React.Suspense fallback={<Spinner />}>
              <LazyGenderage />
            </React.Suspense>
          }
        />
        <Route
          exact
          path="/categories"
          element={
            <React.Suspense fallback={<Spinner />}>
              <LazyCategories />
            </React.Suspense>
          }
        />
        <Route
          exact
          path="/subcategories"
          element={
            <React.Suspense fallback={<Spinner />}>
              <LazySubcategories />
            </React.Suspense>
          }
        />
        <Route
          exact
          path="/form"
          element={
            <React.Suspense fallback={<Spinner />}>
              <LazyForm />
            </React.Suspense>
          }
        />
        <Route
          exact
          path="/products"
          element={
            <React.Suspense fallback={<Spinner />}>
              <LazyProducts />
            </React.Suspense>
          }
        />
        <Route
          exact
          path="/cart"
          element={
            <React.Suspense fallback={<Spinner />}>
              <LazyCart />
            </React.Suspense>
          }
        />
        <Route
          exact
          path="/coupon"
          element={
            <React.Suspense fallback={<Spinner />}>
              <LazyCoupon />
            </React.Suspense>
          }
        />
        <Route
          exact
          path="/catdesc"
          element={
            <React.Suspense fallback={<Spinner />}>
              <LazyCatdesc />
            </React.Suspense>
          }
        />
        <Route
          exact
          path="/openproduct"
          element={
            <React.Suspense fallback={<Spinner />}>
              <LazyOpenproduct />
            </React.Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default Main;
