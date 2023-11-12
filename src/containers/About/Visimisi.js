import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import visimisi from '../../assets/visimisi.png';
import { FaQuoteLeft } from 'react-icons/fa';
import './Visimisi.css';

export default function Profil() {
    return (
        <div className='visimis d-block w-100'>
            <Container>
                <div>
                    <div className='quote'>
                        <FaQuoteLeft />
                    </div>
                    <div className='tagline-title'>
                        Kemudahan berinovasi wujudkan kreasi teknologi
                    </div>
                </div>
                <Row>
                    <Col className='visimisi-gambar'>
                        <Image
                            className='gambar-uk d-block'
							src={visimisi}
						/>
                    </Col>
                    <Col className='col-7'>
                    <div>
                        <div className='visimisi-title'>
                            Visi
                        </div>
                        <div className='visi-content'>
                            Menjadi perusahaan teknologi yang berkualitas dan profesional dalam hal pengembangan dan produksi produk inovasi teknologi khususnya dalam bidang kesehatan atau medis.
                        </div>
                    </div>
                    <div>
                        <div className='visimisi-title'>
                            Misi
                        </div>
                        <div className='misi-content'>
                            <ol>
                                <li>Menyediakan solusi integrasi sistem yang inovatif dan berorientasi pada pelanggan</li>
                                <li>Menyediakan produk dan layanan terkini yang berkelanjutan dengan memastikan keamanan dan purna jual</li>
                                <li>Memberikan inovasi dan solusi berbasis elektronik dan teknologi informasi untuk meningkatkan kualitas hidup</li>
                                <li>Mewujudkan ide atau kebutuhan pelanggan untuk menghasilkan produk teknologi yang berkualitas dan bermanfaat</li>
                            </ol>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}