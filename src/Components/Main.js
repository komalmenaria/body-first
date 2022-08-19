import React from 'react';
import {
    Route,
    Routes,
  } from "react-router-dom";
import Home from './Home'
import Signin from './Signin'
import Verification from './Verification'
import Explore from './Genderage'
import Navbar from './Navbar';





function Main() {
  return (
    <>
    <Navbar />
   
    <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={ <Signin />} />
          <Route exact path="/verification" element={<Verification />} />
          <Route exact path="/genderage" element={<Explore />} />
        </Routes>
  
    </>
  )
}

export default Main