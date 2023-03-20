
import React, { useRef,useState } from 'react';
import Alert from './Alert';
import emailjs from '@emailjs/browser';
import {
    FormControl,
    FormLabel,Input,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'


const ContactUs = () => {

  const [showAlert, setShowAlert] = useState(false);
  const handleClick = () => {
    // Perform action here
    <Alert type="success" message="Successfully sent!" />
  }
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_day7mbu', 'template_6pubtg5', form.current, '7hCSNowO3QBkPohay')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (


    <div>

    <section className='formset'>
      <form ref={form} onSubmit={sendEmail}>
     
        <input className='form1' type="text" name="user_name" placeholder='Name' /> 
        
        <input className='form2' type="email" name="user_email" placeholder='Email' />
        
        <textarea className='form3' name="message" placeholder='Message' />
        <input className="BtnCard6" type="submit" value="Send" onClick={handleClick} />
        
       
      </form>

      </section>


    </div>

        
    );
  };

  export default ContactUs;


