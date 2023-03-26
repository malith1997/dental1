
import React from 'react';
import Face from "../Img/facebook.png";
import Insta from "../Img/insta.png";
import Whatsapp from "../Img/whatsapp.png";


import { ButtonGroup,Divider,Stack,Image,Heading,Text,Button,Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';

function Footer() {
  return (
    <div className="footer">
     

     <div class="row100">
    <div class="columnx100" >
    <h1>D E N T A L<br></br>H E L T H</h1>
        
    </div>
    <div class="columnx100" >
        <div class="columnx100" >
        <h3>Service</h3><br></br>
        <p>Lorem ipsum</p><br></br>
        <p>Lorem ipsum</p><br></br>
        <p>Lorem ipsum</p>
    </div>
    <div class="columnx100" >
        <h3>About</h3><br></br>
        <p>Lorem ipsum</p><br></br>
        <p>Lorem ipsum</p><br></br>
        <p>Lorem ipsum</p>
    </div>
    <div class="columnx100" >
        <h3>Contact</h3><br></br>
        <p>Irajtoussaint@gmail.com</p><br></br>
        <p>+94 77 723 0575</p><br></br>
        <p> Colombo, Sri Lanka</p>
    </div>
    </div>
    <div class="columnx100" >
    <br></br><br></br><br></br>
        <div class="columnx100" >
        <Image className="img31" src={Face} alt="img" />
    </div>
    <div class="columnx100" >
        <Image className="img31" src={Insta} alt="img" />
    </div>
    <div class="columnx100" >
        <Image className="img31" src={Whatsapp} alt="img" />
    </div>
    </div>
    </div>
    </div>
  );
}

export default Footer;



  