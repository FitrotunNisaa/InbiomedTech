import './FAQ.css';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { faq } from '../../data/index'
import React from 'react';

export default function FAQ() {
    return (
        <div className='faq d-block w-100'>
            <Container>
                <Row>
                    <Col>
                        <div className='faq-title'>
                            Frequently Asked Questions
                        </div>
                    </Col>
                </Row>
                <Row className='row-cols-lg-2 row-cols-1 g-4 pt-5'>
                    {faq.map((data) => {
                        return (
                            <Col key={data.id}>
                                <Accordion className='shadow-sw'>
                                    <Accordion.Item eventKey={data.eventKey}>
                                        <Accordion.Header>{data.title}</Accordion.Header>
                                        <Accordion.Body>{data.desc}</Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
      );
}