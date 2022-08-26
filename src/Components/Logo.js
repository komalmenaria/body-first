import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import logo from "../Images/Body-First-Logo.png"

function Logo({height ,width}) {
  return (
    <>
    <LazyLoadImage  effect="blur" height={height} width={width} src={logo} alt="body first" />
    
    </>
  )
}

export default Logo