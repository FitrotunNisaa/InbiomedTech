import './ProjectI.css';
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Project_1 from '../../assets/Project/Project_1.png';
import Project_2 from '../../assets/Project/Project_2.png';
import Project_3 from '../../assets/Project/Project_3.png';
import Project_4 from '../../assets/Project/Project_4.png';
import Project_5 from '../../assets/Project/Project_5.png';
import Project_6 from '../../assets/Project/Project_6.png';
import bg_project from '../../assets/background-project.png'

export default function ProjectI() {
    return (
        <div className='project d-block w-100 min-vh-100' style={{ backgroundImage: 'url(' + bg_project + ')', backgroundSize: 'auto' }}>
            <Container>
                <Row>
                    <Col>
                        <div className='project-title'>
                            PROJECT INBIOMED
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='project-item'>
                        <Image className='project-img d-block' src={Project_1}/>
                        <h4>HANDPRO ~ Hand Robotic Exoskeleton</h4>
                        <p>HANDPRO ~ Hand Robotic Exoskeleton merupakan salah satu perangkat robotik yang dapat digunakan untuk rehabilitasi pada bagian tangan. Desain Hand Robotic Exoskeleton disesuaikan dengan kebutuhan untuk mencapai keberhasilan rehabilitasi. </p>
                    </Col>
                    <Col className='project-item'>
                        <Image className='unggulan-img d-block' src={Project_2}/>
                        <h4>Lower Limb Exoskeleton</h4>
                        <p>Lower Limb Exoskeleton merupakan salah satu perangkat robotik yang dapat digunakan untuk rehabilitasi pada bagian kaki. Desain Hand Robotic Exoskeleton disesuaikan dengan kebutuhan untuk mencapai keberhasilan rehabilitasi. </p>
                    </Col>
                    <Col className='project-item'>
                        <Image className='project-img d-block' src={Project_3}/>
                        <h4>Hand Drill Screw Counter</h4>
                        <p>Hand Drill Screw Counter merupakan alat yang dapat digunakan untuk menghitung ukuran sekrup yang perlu diperlukan untuk hand drill. Dengan adanya alat ini dapat lebih mudah menentukan ukuran sekrup yang sesuai dengan kebutuhan</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='project-item'>
                        <Image className='project-img d-block' src={Project_4}/>
                        <h4>Smart Infusion</h4>
                        <p>Smart Infusion merupakan alat yang dapat memonitoring kondisi cairan infus. Apabila tersumbat atau tercabut maka alarm akan berbunyi dan terdapat peringatan melalui smartphone secara realtime yang ditandai lampu kerlip biru.</p>
                    </Col>
                    <Col className='project-item'>
                        <Image className='project-img d-block' src={Project_5}/>
                        <h4>ARTA ~ Airlangga Robotic Triage Assistant</h4>
                        <p>ARTA ~ Airlangga Robotic Triage Assistant merupakan Robot yang dapat digunakan untuk tahapan awal mendeteksi virus Covid-19 seseorang tanpa perlu melakukan sentuhan, sehingga dapat diketahui tingkat risiko seseorang terpapar virus atau tidak.</p>
                    </Col>
                    <Col className='project-item'>
                        <Image className='project-img d-block' src={Project_6}/>
                        <h4>Used Cooking Oil Processing Machine</h4>
                        <p>Used Cooking Oil Processing Machine merupakan alat untuk melakukan pengolahan yang tepat agar limbah Used Cooking Oil (UCO) atau minyak jelantah dapat bermanfaat dan tidak merugikan baik dari aspek kesehatan manusia dan lingkungan.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}