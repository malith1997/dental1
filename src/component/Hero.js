import React from 'react'
import "../Styles/main.css";
import { ButtonGroup,Divider,Stack,Image,Heading,Text,Button,Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import Img3 from "../Img/cover333333.png";
import Img1 from "../Img/img5.png";
import Img2 from "../Img/img6.png";

export default function Hero() {
  return (
    <div>
    
        <div className='row2'>
                    <div className='card-05'> 
                    <div className='container3'>
                        <div className='row1'>
                            <div className='card-03'>
                                <h1 className='text1'>Implant</h1>
                                <h1 className='text2'>Dentistry</h1>
                            </div>
                                            
                        </div>

                        <div className='row2'>
                            <div className='card-02'><Image className="img8" src={Img1} alt="img" /></div>
                            <div className='card-02'><Image className="img8" src={Img2} alt="img" /></div>
                        </div>

                        <div className='row3'>
                            <div className='card-02'>
                            <h1 className='text3'>Dental</h1>
                            <h1 className='text4'>Restoraton</h1>
                            <h1 className='text5'>Services</h1>
                            <Button className='button1'>
                            Book Online
                            </Button>
                            </div>

                            
                                        
                        </div>
                              
                        </div>
                    </div>
                    

                    
                    <div className='card-05'>
                  

                        <div className='row3'>
                            <div className='card-04'>
                            <Image className="img111" src={Img3} alt="img" />
                            </div>
                
                        </div>


                    </div>
                   
                </div>
           
      
    </div>
  )
}
