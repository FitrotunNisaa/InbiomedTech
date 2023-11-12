import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import inbiomed_logo from '../../assets/logo_main_inbiomed.png';
import { navLinks } from '../../data/index'

export default function Header() {
	return (
		<div>
			<Navbar bg='white' expand='lg' className='navbar d-block w-100' activeKey='/' fixed='top'>
  				<Container>
					<Navbar.Brand href='/'>
						<Image
							src={inbiomed_logo}
							width='150'
							alt='Logo Inbiomed'
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav'/>
					<Navbar.Collapse>
						<Nav className='mx-auto text-center'>
							{navLinks.map((link) => {
								return (
									<div className='nav-link' key={link.id}>
										<NavLink to={link.path} className = {({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' :'')} end>
											{link.text}
										</NavLink>
									</div>
								)
							})}
						</Nav>
						<div className='text-center'>
							<a href='/contact'>
								<button className='button oren'>Hubungi Kami</button>
							</a>
						</div>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}
