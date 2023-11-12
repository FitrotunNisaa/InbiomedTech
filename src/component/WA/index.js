import React from 'react';
import { Link } from 'react-router-dom'
import './index.css';
import { FaWhatsapp } from 'react-icons/fa';

export default function WA() {
    return (
        <div>
            <Link to='https://wa.me/6281337791188' 
                className='whatsapp_float'
                target="_blank"
                rel="noopener noreferrer">
                <FaWhatsapp />
            </Link>
        </div>
    )
}