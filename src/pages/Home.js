import React from 'react'
import Hero from '../component/Hero'
import Hero1 from '../component/Hero1'
import Hero2 from '../component/hero2'
import Hero3 from '../component/hero3'
import NavBar from '../component/Navbar'
import ContactUs from '../component/sendemail'
import Footer from '../component/Footer'
import Footerr from '../component/Footerr'
import "../Styles/main.css";
import Navbar from '../component/Navbar.js'



export default function Home() {
  return (
    <div>
      


      <React.Fragment>
      
  
      <Navbar />
      
      <Hero />
      <Hero1 />
      {/* <Hero2 /> */}
      <Hero3 />
      {/* <ContactUs /> */}
      {/* <Footer /> */}
      <Footerr />
    
      
      

    </React.Fragment>
    </div>
  )
}
