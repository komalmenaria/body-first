import React from 'react'
import { Link } from 'react-router-dom'
import Video from "../Images/body-first-promotion-image.mp4"
import poster from "../Images/poster.png"
import Particle from './Particle'


function Home() {
  return (
    <>
    <div className='home'>
  < Particle />

    <video src={Video}  autoPlay loop muted playsInline poster={poster} />
    <Link to="/signin" className='explore-body-first' data-aos="zoom-in" >EXPLORE BODY FIRST</Link>
    </div>
    </>
  )
}

export default Home