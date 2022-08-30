import React from 'react'
import { Link } from "react-router-dom";
import Logo from "./Logo"
import Cart from "../Images/Cart.png";
import { useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';



function Navbar() {
  let { products, cart } = useSelector(state => state.categoryData)
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg p-0 body-first-navbar">
        <div className="container-fluid">
          <Logo width={130} height={100} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          
          </button>
          <div  id="navbarSupportedContent">
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
                      {cart.length ? cart.length : 0}
                    </span>
                  </button>
                </Link>
              </li>
              <li className="nav-item">
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar