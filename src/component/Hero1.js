import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import "../Styles/main.css";
import { ButtonGroup,Divider,Stack,Image,Heading,Text,Button,Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import Img3 from "../Img/smile.png";
import Img1 from "../Img/img5.png";
import Img2 from "../Img/img6.png";
import Gallery from "../Img/gallery.png";
import Smile from "../Img/smilelogo.png";
import one from "../Img/1.png";
import two from "../Img/2.png";
import three from "../Img/3.png";
import four from "../Img/4.png";




export default function Hero1() {
  return (
    <div>
      
        <div className='row2'>
                    
                    <div className='card-05'>
                    
                    <div className='card-07'>
                            <Image className="img3" src={Img3} alt="img" />
                            </div>
                              

                    </div>


                    
                    <div className='card-05'>
                    <div className='container1'>
                        <div className='row3'>
                        <div className='row1'>
                            <div className='card-08'>
                                <h1 className='text10'>Smile</h1>
                                <h1 className='text20'>Gallery</h1>
                               
                                
                                
                            </div>
                                            
                        </div>

                        <div className='row2'>
                            <div className='card-09'>
                            <h1 className='text11'>Smile</h1>
                            <h1 className='text12'>Makeover</h1>
                            

                            </div>
                           
                        </div>
                            
                
                        </div>


                    </div>
                    </div>
        
                    </div>
                    

                    <div className='container2'>
                     <div className='row2'>
                            <div className='card-10'><h1 className='text13'>Dental</h1><h1 className='text14'>Veneers</h1><Image className="one" src={one} alt="img" /></div>
                            <div className='card-10'><h1 className='text13'>Dental</h1><h1 className='text14'>Crowns</h1><Image className="one" src={two} alt="img" /></div>
                            <div className='card-10'><h1 className='text13'>Teeth</h1><h1 className='text14'>Whitening</h1><Image className="one" src={three} alt="img" /></div>
                            <div className='card-10'><h1 className='text13'>Dental</h1><h1 className='text14'>Implants</h1><Image className="one" src={four} alt="img" /></div>
                        </div><br></br>
                        

                        <div className="card-11">
                            <h1 className='textcenter'>Advanced Dentistry</h1>
                            </div>

                            <div className="card-11">
                                <h1 className='textcenter'>High Quality Equipment</h1>
                            </div>

                            <div className="card-11">
                            <h1 className='textcenter'>Friendly Staff</h1>
                            </div>
                    </div>
                
                </div>
  )
}
