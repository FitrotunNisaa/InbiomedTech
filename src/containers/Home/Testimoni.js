import { Container, Row, Col, Image } from 'react-bootstrap';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimoni.css'
import { testimoni } from '../../data/index'
import { Pagination } from 'swiper/modules';

export default function Testimoni() {
    return (
        <Container className='testimoni d-block w-100 min-vh-100'>
            <Row>
                <Col>
                    <div className='testimoni-title'>
                        Testimoni
                    </div>
                </Col>
            </Row>
            <Row>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        992: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        }
                    }}
                    modules={[Pagination]}
                    className="swiper"
                >
                    {testimoni.map((data) => {
                        return(
                            <SwiperSlide key={data.id} className='shadow-sm'>
                                <p className='desc'>{data.desc}</p>
                                <div className='people'>
                                    <Image src={data.image} alt='' />
                                    <div>
                                        <h5 className='mb-1'>{data.name}</h5>
                                        <p className='m-0 fw-bold'>{data.project}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                    </Swiper>
            </Row>
        </Container>
    )
}