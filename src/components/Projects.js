import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import projImg1 from '../assets/img/tic-tac-toe.png'
import projImg2 from '../assets/img/flas.jpeg'
import projImg3 from '../assets/img/message-board.png'
import colorSharp2 from '../assets/img/color-sharp2.png'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

export const Projects = () => {
	const projects = [
		{
			title: 'tic-tac-toe',
			description: 'First Project in my life',
			imgUrl: projImg1,
			linkUrl: 'https://tharitar8.github.io/TicTacToe-client/'			
		},
		{
			title: 'Flash-Meal',
			description: 'Menu Cooks Under 15 mins',
			imgUrl: projImg2,
			linkUrl: 'https://github.com/tharitar8/flash_meal-client'	
		},
		{
			title: 'Taco-Message Board',
			description: 'Message Board',
			imgUrl: projImg3,
			linkUrl: 'https://team-taco-project.github.io/taco-message-board-client/'
		},
	]

	return (
		<section className='project' id='projects'>
			<Container>
				<Row>
					<Col size={12}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? 'animate__animated animate__fadeIn' : ''
									}>
									<h2>Projects</h2>
									<p>These are projects. I have been making so far.</p>
									<Tab.Container id='projects-tabs' defaultActiveKey='first'>
										<Nav
											variant='pills'
											className='nav-pills mb-5 justify-content-center align-items-center'
											id='pills-tab'>
											<Nav.Item>
												<Nav.Link eventKey='first'>First Page</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey='second'>Second Page</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey='third'>Third Page</Nav.Link>
											</Nav.Item>
										</Nav>
										<Tab.Content
											id='slideInUp'
											className={
												isVisible ? 'animate__animated animate__slideInUp' : ''
											}>
											<Tab.Pane eventKey='first'>
												<Row>
													{/* mapping component */}
													{projects.map((project, index) => {
														return <ProjectCard key={index} {...project} />
													})}
												</Row>
											</Tab.Pane>
											<Tab.Pane eventKey='section'>
												<p></p>
											</Tab.Pane>
											<Tab.Pane eventKey='third'>
												<p></p>
											</Tab.Pane>
										</Tab.Content>
									</Tab.Container>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
			<img className='background-image-right' src={colorSharp2} alt=''></img>
		</section>
	)
}
