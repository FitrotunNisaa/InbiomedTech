import React from 'react';
import CarouselImg from './Carousel'
import Unggulan from './Unggulan'
import Mitra from './Mitra'
import Testimoni from './Testimoni'
import FAQ from './FAQ'
import Video from './Video'
import Contact from './ContactBawah'

export default function Home() {
    return (
        <div>
            <div>
                <CarouselImg />
            </div>
            <div>
                <Video />
            </div>
            <div>
                <Unggulan />
            </div>
            <div>
                <Mitra />
            </div>
            <div>
                <Testimoni />
            </div>
            <div>
                <FAQ />
            </div>
            <div>
                <Contact />
            </div>
        </div>
    )
}