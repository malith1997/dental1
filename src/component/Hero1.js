import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import "../Styles/main.css";
import { ButtonGroup,Divider,Stack,Image,Heading,Text,Button,Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import Img3 from "../Img/smile.png";
import Img1 from "../Img/img5.png";
import Img2 from "../Img/img6.png";



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

                        <div className='row3'>
                        <div className='row1'>
                            <div className='card-08'>
                                <h1 className='text10'>Smile Gallery</h1>
                                
                                
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
                    


                     <div className='row2'>
                            <div className='card-02'><Image className="img8" src={Img1} alt="img" /></div>
                            <div className='card-02'><Image className="img8" src={Img2} alt="img" /></div>
                            <div className='card-02'><Image className="img8" src={Img1} alt="img" /></div>
                            <div className='card-02'><Image className="img8" src={Img2} alt="img" /></div>
                        </div>
           
                
    </div>
  )
}
