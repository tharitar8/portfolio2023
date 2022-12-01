import { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../assets/img/Tharitar.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import navIcon4 from '../assets/img/icons8.png'
import { HashLink } from 'react-router-hash-link'
import { BrowserRouter as Router } from 'react-router-dom'
import resume from './/Resume.pdf'

export const NavBar = () => {
	const [activeLink, setActiveLink] = useState('home')
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener('scroll', onScroll)

		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	const onUpdateActiveLink = (value) => {
		setActiveLink(value)
	}

	return (
		<Router>
			<Navbar expand='md' className={scrolled ? 'scrolled' : ''}>
				<Container>
					<Navbar.Brand href='/'>
						<img src={logo} alt='Logo' />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav'>
						<span className='navbar-toggler-icon'></span>
					</Navbar.Toggle>
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<Nav.Link
								href='#home'
								className={
									activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
								}
								onClick={() => onUpdateActiveLink('home')}>
								Home
							</Nav.Link>
							<Nav.Link
								href='#skills'
								className={
									activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
								}
								onClick={() => onUpdateActiveLink('skills')}>
								Skills
							</Nav.Link>
							<Nav.Link
								href='#projects'
								className={
									activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
								}
								onClick={() => onUpdateActiveLink('projects')}>
								Projects
							</Nav.Link>
						</Nav>
						<span className='navbar-text'>
							<div className='social-icon'>
								<a href='https://www.linkedin.com/in/tharitarserna/' target='_blank'>
									<img src={navIcon1} alt='linkedin' />
								</a>
								<a href='https://github.com/tharitar8' target='_blank'>
									<img src={navIcon2} alt='github' 
								/>
								</a>
								<a href='https://www.instagram.com/coding.traveler/' target='_blank' >
									<img src={navIcon3} alt='instagram'/>
								</a>

								<a href={resume} target='_blank' title="My Resume" download='Tharitar Resume'>
									<img src={navIcon4} alt='Resume'/>
								</a>
							</div>
								<form action={resume} method="get" target="_blank">
        					 <button type="submit">Resume</button>
     							 </form>
						</span>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Router>
	)
}
