import React from 'react'
import loading from  "../Images/Preloader.gif";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Spinner() {
  return (
    <>
    <center><LazyLoadImage   src={loading} width={100} height={100} alt="loading" /></center>
    </>
  )
}

export default Spinner