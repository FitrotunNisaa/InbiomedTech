import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import logo_inbiomed from '../../assets/logo-inbiomed-square.png';
import bg_profil from '../../assets/background-profil.png'
import './Profil.css';

export default function Profil() {
    return (
        <div className='profil d-block w-100' style={{ backgroundImage: 'url(' + bg_profil + ')', backgroundSize: 'auto' }}>
            <Container>
                <Row>
                    <Col className='col-8'>
                    <div>
                        <div className='profil-title'>
                            Tentang Kami
                        </div>
                        <div className='profil-content'>
                            Innovative Biomedical Technology (INBIOMED) merupakan start up yang menyediakan jasa pembuatan atau pengembangan berbagai macam produk teknologi berbasis project result baik dalam bentuk hardware maupun software, seperti 3D Printing, Cetak PCB (Printed Circuit Board), CAD (Computer Aided Design) dan lain sebagainya.
                        </div>
                    </div>
                    </Col>
                    <Col className='profil-gambar'>
                        <Image
                            className='d-block'
							src={logo_inbiomed}
							alt='Logo Inbiomed'
                            width='200'
						/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}