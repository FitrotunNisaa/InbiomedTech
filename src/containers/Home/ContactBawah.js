import { Container } from 'react-bootstrap';
import React from 'react';
import './ContactBawah.css';

export default function Footer() {
    return (
        <div className='contact'>
            <Container>
                <div className='contact-title d-block w-100'>
                    Ada ide atau inovasi yang ingin Anda wujudkan?
                </div>
                <div className='contact-content'>
                    Gunakan INBIOMED
                </div>
                <div className='text-center'>
                    <a href='/contact'>
				        <button className='button-contact'>Sekarang</button>
                    </a>
			    </div>
            </Container>
        </div>
    )
}