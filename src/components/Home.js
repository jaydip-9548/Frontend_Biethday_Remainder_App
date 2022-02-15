import React from 'react'
import '../css/home.css'
import home from '../media/Home.jpg'
export default function Home() {
  return (
    <div>
      
      <div className="myImg">
          <img src={home} alt="Loading error.."  id="homeImg"/>
      </div>
    </div>
  )
}
