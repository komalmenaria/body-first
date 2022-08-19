import React from 'react'
import Video from "../Images/body-first-promotion-image.mp4"

function Home() {
  return (
    <>
    <div >
    <video src={Video}  autoPlay={true} />
    </div>
    </>
  )
}

export default Home