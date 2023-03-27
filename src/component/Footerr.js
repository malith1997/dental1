import React from 'react';
import Face from "../Img/facebook.png";
import Insta from "../Img/insta.png";
import Whatsapp from "../Img/whatsapp.png";
import '../Styles/footer.css';



import { ButtonGroup,Divider,Stack,Image,Heading,Text,Button,Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';

function Footerr() {
  return (
    <div className="footerr1">
        <div className='sb_footer section_padding'>
            <div className='sb_footer-links'>
            <div className='sb_footer-links_div'>
                <h4 className='sb4'>Home</h4>

                <a href='/'>
                    <p className='sbp'>Lorem ipsum</p>
                </a>

                <a href='/'>
                    <p className='sbp'>Lorem ipsum</p>
                </a>

                <a href='/'>
                    <p className='sbp'>Lorem ipsum</p>
                </a>

                <a href='/'>
                    <p className='sbp'>Lorem ipsum</p>
                </a>
            </div>
            <div className='sb_footer-links_div'>
                <h4 className='sb4'>Services</h4>

                <a href='/Services'>
                    <p className='sbp'>Lorem ipsum</p>
                </a>

                <a href='/Services'>
                    <p className='sbp'>Lorem ipsum</p>
                </a>

                <a href='/Services'>
                    <p className='sbp'>Lorem ipsum</p>
                </a>

                <a href='/Services'>
                    <p className='sbp'>Lorem ipsum</p>
                </a>


            </div>

            <div className='sb_footer-links_div'>
                <h4 className='sb4'>About</h4>
                <a href='/About'>
                    <p className='sbp'>Lorem ipsum</p>
                </a>
                <a href='/About'>
                    <p className='sbp'>Lorem ipsum</p>
                </a>
                <a href='/About'>
                    <p className='sbp'>Lorem ipsum</p>
                </a>
                <a href='/About'>
                    <p className='sbp'>Lorem ipsum</p>
                </a>
                
            </div>

            <div className='sb_footer-links_div'>
            <h4 className='sb4'>Contact</h4>
                <a href='/Contact'>
                    <p className='sbp'>Dental.helth@gmail.com</p>
                </a>
                <a href='/Contact'>
                    <p className='sbp'>+9411223355</p>
                </a>
                <a href='/Contact'>
                    <p className='sbp'>127,Colombo 07</p>
                </a>  

            </div>
            <div className='sb_footer-links_div'>
                <h4 className='sb4'></h4>
                <div className='socialmedia'>
                    <p className='sbp'><Image className="img31" src={Face} alt="img" /></p>
                    <p className='sbp'> <Image className="img31" src={Insta} alt="img" /></p>
                    <p className='sbp'><Image className="img31" src={Whatsapp} alt="img" /></p>
                </div>
            </div>
            </div>

            <hr></hr>
            <div className='sb_footer-below'>
                <div className='sb_footer-copyright'>
                    <p className='copy'>
                        @{new Date().getFullYear()} Cristal Code.All right reserved.
                    </p>
                </div>
                <div className='sb_footer-below-links'>
                    <a href='/terms'><div><p className='sbp1'>Terms & conditions</p></div></a>
                    <a href='/terms'><div><p className='sbp1'>Privacy</p></div></a>
                    <a href='/terms'><div><p className='sbp1'>Security</p></div></a>
                   
                </div>
            </div>
        </div>
     

     
    </div>
  );
}

export default Footerr;



  