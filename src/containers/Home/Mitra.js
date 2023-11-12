import './Mitra.css';
import React from 'react';
import {Container, Image} from 'react-bootstrap';
import Unair from '../../assets/Mitra/Unair.png';
import Soetomo from '../../assets/Mitra/Soetomo.png';
import Abimanyu from '../../assets/Mitra/Abimanyu.png';
import Ibe from '../../assets/Mitra/Ibe.png';
import Nexmed from '../../assets/Mitra/Nexmed.png';
import FTMM from '../../assets/Mitra/FTMM.png';
import FST from '../../assets/Mitra/FST.png';
import BPBRIN from '../../assets/Mitra/BPBRIN.jpg';
import Azka from '../../assets/Mitra/Azka.png';
import Gelatah from '../../assets/Mitra/Gelataah.png';

export default function Mitra() {
    return (
        <Container className='mitra d-block w-100'>
            <div className='mitra-title'>
                Mitra Kami
            </div>
            <div class="grid-container-atas">
                <div class="grid-item">
                    <Image className='d-block w-100' src={Unair} alt="Unair" width='140' center/>
                </div>
                <div class="grid-item">
                    <Image className='d-block w-100' src={Soetomo} alt="Soetomo" width='140'/>
                </div>
                <div class="grid-item">
                    <Image className='d-block w-100' src={Abimanyu} alt="Abimanyu" width='140'/>
                </div>  
                <div class="grid-item">
                    <Image className='d-block w-100' src={Ibe} alt="Ibe" width='140'/>
                </div>
                <div class="grid-item">
                    <Image className='d-block w-100' src={Nexmed} alt="Nexmed" width='140'/>
                </div>
                <div class="grid-item">
                    <Image className='d-block w-100' src={FTMM} alt="FTMM" width='140' />
                </div>
                <div class="grid-item">
                    <Image className='d-block w-100' src={FST} alt="Nexmed" width='140' />
                </div>
                <div class="grid-item">
                    <Image className='d-block w-100' src={BPBRIN} alt="BPBRIN" width='140'/>
                </div>
                <div class="grid-item">
                    <Image className='d-block w-100' src={Azka} alt="Azka" width='140'/>
                </div>
                <div class="grid-item">
                    <Image className='d-block w-100' src={Gelatah} alt="Gelatah" width='140' />
                </div>
            </div>
        </Container>
    )
}