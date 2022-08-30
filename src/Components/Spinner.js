import React from 'react'
import loading from  "../Images/preloader.mp4";

function Spinner() {
  return (
    <>
 <div>
      <video src={loading} autoPlay loop muted playsInline className='spinner'></video>
      </div>
    </>
  )
}

export default Spinner