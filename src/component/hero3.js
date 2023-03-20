import React from 'react'
import { ButtonGroup,Divider,Stack,Image,Heading,Text,Button,Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import Img5 from "../Img/BOOK1.png";
import Img1 from "../Img/img5.png";
import Img2 from "../Img/img6.png";
import ContactUs from "../component/sendemail"

export default function Hero3() {
  return (
    <div>
      <div className='row2'>
                    <div className='card-050'> 
                    <div className='container3'>
                        <div className='row1'>
                            <div className='card-20'>
                                <ContactUs /> 
                            </div>
                                            
                        </div>

                        

                       
                              
                        </div>
                    </div>
                    

                    
                    <div className='card-051'>
                  

                        <div className='row3'>
                            <div className='card-040'>
                            <Image className="img111" src={Img5} alt="img" />
                            </div>
                
                        </div>


                    </div>
                   
                </div>
    </div>
  )
}
