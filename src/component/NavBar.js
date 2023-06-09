import React from 'react'
import {motion} from 'framer-motion'
import { Link } from "react-router-dom";
import { useRef } from "react";
import Close from "../Img/close.png";
import Menu from "../Img/menu.png";
import { Image} from '@chakra-ui/react';


export default function NavBar() {
  
    // <motion.div
    // initial={{y:-100}}
    // animate={{y:0}}
    // transition={{
    //     delay:1.6,
    //     type:"spring",
    //     stiffness: 140
    // }}
    // className='flex justify-between items-center max-w-screen-lg mx-auto pt-8 z-10 relative text-black'>
    //     <Logo />

    //     <svg className='w-8 h-8' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    //     <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"></path>
    //     </svg>
      
    // </motion.div>

    const navRef = useRef();

    const showNav = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return(   
        
        <header>
            <h2 className='dental'>D e n t a l<br></br>H E L T H</h2>
            <nav className='nav55' ref={navRef}>
          
               
                    <Link to="/">Home</Link>
               
                    <Link to="/About">About</Link>
                
                    <Link to="/Contact">Contact</Link>
               
                    <Link to="/Services">Services</Link>
                
             
                
                {/* USE FOR SMOLLER SCREEN CLOSE THE NAV */}
                <button className="nav-btn nav-close-btn" onClick={showNav}> 
                    <a><Image className="img35" src={Close} /></a>
                </button>
            </nav>




            

            {/* OPEN THE NAV IN SMOLLER SCREEN */}
            <button className="nav-btn" onClick={showNav}>
            <a><Image className="img36" src={Menu} /></a>
                </button>
        </header>
  )
}
