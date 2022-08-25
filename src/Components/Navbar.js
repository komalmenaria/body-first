import React from 'react'
import {Link} from "react-router-dom";
import Bodyfirstlogo from "../Images/Body-First-Logo.png"


function Navbar() {
  return (
    <>
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark body-first-navbar">
  <div className="container-fluid">
    <Link className="navbar-brand main-logo" to="/"> <img src={Bodyfirstlogo} alt="" /> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/categories">Categories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/subcategories">Sub Categories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/form">Form</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar