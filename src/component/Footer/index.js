import { Container, Row, Col, Image } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom'
import './index.css';
import inbiomed_logo from '../../assets/logo_main_inbiomed.png';
import { FaWhatsapp, FaEnvelope, FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <div>
        <div className='footer'>
            <Container>
                <Row>
                    <Col lg='4' className='mt-4'>
                        <Image
                            className='footer-title'
							src={inbiomed_logo}
							width='150'
							alt='Logo Inbiomed'
						/>
                        <div>
                            Wonorejo Indah Timur IX No.76, Surabaya, Indonesia
                        </div>
                    </Col>
                    <Col lg='4' className='mt-4'>
                        <h5 className='footer-title center'>Hubungi Kami</h5>
                        <div className='footer-contact'>
                            <Link to='https://wa.me/6281337791188' className='text-decoration-none'>
                                <p><FaWhatsapp />     +62 813-3779-1188</p>
                            </Link>
                            <Link to='mailto:inbiomed.tech@gmail.com' className='text-decoration-none'>
                                <p><FaEnvelope />     inbiomed.tech@gmail.com</p>
                            </Link>
                        </div>
                    </Col>
                    <Col lg='4' className='mt-4'>
                        <h5 className='footer-title'>Ikuti Kami</h5>
                        <div className='footer-sosmed'>
                            <Link to='https://www.instagram.com/inbiomed_tech/' className='text-decoration-none'>
                                <p><FaInstagram/>     inbiomed_tech</p>
                            </Link>
                            <Link to='https://web.facebook.com/inbiomed.tech' className='text-decoration-none'>
                                <p><FaFacebook/>     inbiomed.tech</p>
                            </Link>
                            <Link to='https://twitter.com/inbiomed_tech' className='text-decoration-none'>
                                <p><FaTwitter/>     inbiomed_tech</p>
                            </Link>
                            <Link to='https://www.youtube.com/@inbiomed_tech' className='text-decoration-none'>
                                <p><FaYoutube/>     inbiomed_tech</p>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
            <div className='footer-bawah'>
                <p className='text-center'>&copy; Copyright {new Date ().getFullYear()} Innovative Biomedical Technology</p>
            </div>
        </div>
    )
}