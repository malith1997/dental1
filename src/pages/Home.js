import React from 'react'
import Hero from '../component/Hero'
import Hero1 from '../component/Hero1'
import Hero2 from '../component/hero2'
import Hero3 from '../component/hero3'
import NavBar from '../component/NavBar'
import ContactUs from '../component/sendemail'
import Footer from '../component/Footer'
import "../Styles/main.css";


export default function Home() {
  return (
    <div>
      


      <React.Fragment>
      
  
      <NavBar />
      <Hero />
      <Hero1 />
      {/* <Hero2 /> */}
      <Hero3 />
      {/* <ContactUs /> */}
      <Footer />
    
      
      

    </React.Fragment>
    </div>
  )
}
