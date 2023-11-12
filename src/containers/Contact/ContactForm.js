import './ContactForm.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Contact from '../../assets/contact.png';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5w3rau9', 'template_5r4gsqd', form.current, '-xNjLchrNjiugJd_C')
      .then((result) => {
          console.log(result.text);
          console.log('pesan terkirim')
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset()
  };

  return (
    <div className='contact-form d-block w-100'>
        <Container>
            <Row>
                <Col>
                  <Image 
                    className='d-block w-100'
							      src={Contact}/>
                </Col>
                <Col className='contact-form2'>
                    <form ref={form} onSubmit={sendEmail}>
                        <label className='contact-label'>Name</label>
                        <input className='contact-input' type="text" name="user_name" />
                        <label className='contact-label'>Email</label>
                        <input className='contact-input' type="email" name="user_email" />
                        <label className='contact-label'>Phone</label>
                        <input className='contact-input' type="text" name="user_phone" />
                        <label className='contact-label'>Message</label>
                        <textarea className='contact-message' name="message" />
                        <div className='contact-button2 text-center'>
                            <input className='contact-button d-block w-100' type="submit" value="Send" />
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    </div>
  );
};