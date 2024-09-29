import React from 'react'
import "../../style/components/Banner/Banner.css"
import Menu from '../Menu/Menu'
import NavBar from '../nav-bar/NavBar'
export default function Banner() {
  return (
   
    <div class ="banner">
       < Menu/>
       <NavBar/>
      <div class="content">
        <h2>Explore beautiful</h2>
        <h1>HIMCHAL</h1>
        <div class ="swiber"> 
          <p class="active"> 01 </p>
          <p> 02 </p>
          <p> 03 </p>
          <p> 04 </p>
        </div>
        </div>   
   
    
    </div>
    
  )
}

