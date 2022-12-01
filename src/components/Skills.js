import bootstrap from '../assets/img/bootstrap.svg'
import react from '../assets/img/react.svg'
import express from '../assets/img/express.svg'
import git from '../assets/img/git.svg'
import github from '../assets/img/github.png'
import heroku from '../assets/img/heroku.svg'
import html5 from '../assets/img/html5.svg'
import javascript from '../assets/img/javascript.svg'
import jquery from '../assets/img/jquery.svg'
import mongodb from '../assets/img/mongodb.svg'
import node from '../assets/img/node.png'
import css from '../assets/img/css.svg'
import python from '../assets/img/python.svg'
import sass from '../assets/img/sass.svg'
import vscode from '../assets/img/visualstudio.svg'
import postgresql from '../assets/img/postgresql.svg'
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-multi-carousel'
import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	}

	return (
		<section className='skill' id='skills'>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<div className='skill-bx wow zoomIn'>
							<h2>Skills</h2>

							<div class='slider'>
								<div class='slide-track'>
									<div class='slide'>
										<img src={bootstrap} alt='' width='50' />
									</div>
									<div class='slide'>
										<img src={react} alt='' />
									</div>
									<div class='slide'>
										<img src={html5} alt='' />
									</div>
									<div class='slide'>
										<img src={css} alt='' />
									</div>
									<div class='slide'>
										<img src={javascript} alt='' />
									</div>
									<div class='slide'>
										<img src={express} alt='' />
									</div>
									<div class='slide'>
										<img src={node} alt='' />
									</div>
									<div class='slide'>
										<img src={python} alt='' />
									</div>
									<div class='slide'>
										<img src={jquery} alt='' />
									</div>
									<div class='slide'>
										<img src={git} alt='' />
									</div>
									<div class='slide'>
										<img src={github} alt='' />
									</div>
									<div class='slide'>
										<img src={sass} alt='' />
									</div>
									<div class='slide'>
										<img src={mongodb} alt='' />
									</div>
									<div class='slide'>
										<img src={postgresql} alt='' />
									</div>
									<div class='slide'>
										<img src={vscode} alt='' />
									</div>
									<div class='slide'>
										<img src={heroku} alt='' />
									</div>
								</div>
							</div>
							<br />

							{/* <Carousel
								responsive={responsive}
								infinite={true}
								className='owl-carousel owl-theme skill-slider'>
								<div className='item'>
									<img src={meter1} alt='Image' />
									<h5>Web Development</h5>
								</div>
								<div className='item'>
									<img src={meter2} alt='Image' />
									<h5>Brand Identity</h5>
								</div>
								<div className='item'>
									<img src={meter3} alt='Image' />
									<h5>Logo Design</h5>
								</div>
								<div className='item'>
									<img src={meter1} alt='Image' />
									<h5>Web Development</h5>
								</div>
							</Carousel> */}
						</div>
					</div>
				</div>
			</div>
			<img className='background-image-left' src={colorSharp} alt='img' />
		</section>
	)
}
