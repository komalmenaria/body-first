import React from 'react'
import { Link } from 'react-router-dom'
import Video from "../Images/body-first-promotion-image.mp4"

function Home() {
  return (
    <>
    <div className='home'>
    <video src={Video}  autoPlay loop muted playsInline />
    <Link to="/signin" className='explore-body-first'>EXPLORE BODY FIRST</Link>
    </div>
    </>
  )
}

export default Home