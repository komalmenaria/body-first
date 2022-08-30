import React from 'react'
import logo from "../Images/Body-First-Logo.png"
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Logo({height ,width}) {
  return (
    <>
    <Link to="/"><LazyLoadImage effect="blur" height={height} width={width} src={logo} alt="body first" /></Link>
    
    </>
  )
}

export default Logo