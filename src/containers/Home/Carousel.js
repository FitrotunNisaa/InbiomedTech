import { Image } from 'react-bootstrap';
import React from 'react';
import './Carousel.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Carousel_1 from '../../assets/Carousel/carousel1.png';
import Carousel_2 from '../../assets/Carousel/carousel2.png';
import Carousel_3 from '../../assets/Carousel/carousel3.png';

export default function CarouselImg() {
	return (
        <Carousel className='carousel d-flex align-items-center'>
            <Carousel.Item interval={2000} >
                <Image className='d-block w-100' src={Carousel_1} alt="Carousel 1" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>                    
                <Image className='d-block w-100' src={Carousel_2} alt='Carousel_2' />
            </Carousel.Item>
            <Carousel.Item interval={2000}>                    
                <Image className='d-block w-100' src={Carousel_3} alt='Carousel_2' />
            </Carousel.Item>
        </Carousel>
	)
}