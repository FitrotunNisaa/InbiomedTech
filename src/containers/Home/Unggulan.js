import './Unggulan.css';
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Unggul_1 from '../../assets/Unggul/unggul1.png';
import Unggul_2 from '../../assets/Unggul/unggul2.png';
import Unggul_3 from '../../assets/Unggul/unggul3.png';

export default function Unggulan() {
    return (
        <Container className='unggulan d-block w-100 min-vh-100'>
            <Row>
                <Col>
                    <div className='unggulan-title'>
                        Keunggulan INBIOMED
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className='unggulan-item'>
                    <Image className='unggulan-img d-block' src={Unggul_1}/>
                    <h4>Berbasis Project Result</h4>
                    <p>Produk yang dihasilkan sesuai dengan ide dan keinginanmu.</p>
                </Col>
                <Col className='unggulan-item'>
                    <Image className='unggulan-img d-block' src={Unggul_2}/>
                    <h4>One-stop-solution</h4>
                    <p>Penuhi semua kebutuhanmu mulai dari program hingga alat.</p>
                </Col>
                <Col className='unggulan-item'>
                    <Image className='unggulan-img d-block' src={Unggul_3}/>
                    <h4>Harga Terjangkau</h4>
                    <p>Harga ramah di kantong sesuai kompleksitas project.</p>
                </Col>
            </Row>
        </Container>
    )
}