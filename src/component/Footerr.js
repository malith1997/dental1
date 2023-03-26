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
            <div className='sb_footer-links-div'>
                <h4 >for bussnes</h4>

                <a href='/home'>
                    <p>employee</p>
                </a>

                <a href='/home'>
                    <p>employee</p>
                </a>

                <a href='/home'>
                    <p>employee</p>
                </a>

                <a href='/home'>
                    <p>employee</p>
                </a>
            </div>
            <div className='sb_fotter_links_div'>
                <h4>resources</h4>

                <a href='/home'>
                    <p>employee111</p>
                </a>

                <a href='/home'>
                    <p>employee111</p>
                </a>

                <a href='/home'>
                    <p>employee1111</p>
                </a>

                <a href='/home'>
                    <p>employee111</p>
                </a>


            </div>

            <div className='sb_footer-links_div'>
                <h4 className='sb4'>patners</h4>
                <a href='/home'>
                    <p className='sbp'>employeedddd</p>
                </a>
                <a href='/home'>
                    <p className='sbp'>employeedddd</p>
                </a>
                <a href='/home'>
                    <p className='sbp'>employeeddd</p>
                </a>
                <a href='/home'>
                    <p className='sbp'>employeedd</p>
                </a>
                
            </div>

            <div className='sb_footer-links_div'>
            <h4 className='sb4'>commingaaaaaaaaaaa</h4>
                <a href='/home'>
                    <p className='sbp'>employeedd</p>
                </a>
                <a href='/home'>
                    <p className='sbp'>employeedd</p>
                </a>
                <a href='/home'>
                    <p className='sbp'>employeedd</p>
                </a>  

            </div>
            <div className='sb_footer-links_div'>
                <h4 className='sb4'>comming soon</h4>
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



  