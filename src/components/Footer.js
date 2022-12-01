import { Container, Row, Col } from 'react-bootstrap'

import logo from '../assets/img/Tharitar.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import navIcon4 from '../assets/img/icons8.png'
import resume from './/Resume.pdf'
export const Footer = () => {
	return (
		<footer className='footer'>
			<Container>
				<Row className='align-items-center'>
					<Col size={12} sm={6}>
						<img src={logo} alt='Logo' />
					</Col>
					<Col size={12} sm={6} className='text-center text-sm-end'>
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
						<p>Copyright 2022. All Rights Reserved</p>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}
