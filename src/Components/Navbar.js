import React from 'react'
import { Link } from "react-router-dom";
import Bodyfirstlogo from "../Images/Body-First-Logo.png"
import Cart from "../Images/Cart.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from 'react-redux';


function Navbar() {
  let { products, cart } = useSelector(state => state.categoryData)
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
                <Link className="nav-link active" aria-current="page" to="/cart">
                  <button type="button" className="btn  position-relative ">
                    <LazyLoadImage
                      effect="blur"
                      src={Cart}
                      alt=""
                    />
                    <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-success">
                     {cart.length?cart.length :0 }
                    </span>
                  </button>
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/openproduct">
                 Open Product
                </Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar