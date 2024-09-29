import React from 'react'
import NavBar from './components/nav-bar/NavBar'
import Footer from './components/footer/Footer'
import Banner from './components/banner/Banner'
import Customer from './components/CustomerSection/Customer'
export default function App() {
  return (
    <div>
        <NavBar/>
      <Banner/>
     <Customer/>
      <Footer/>

    </div>
    
  )
}
