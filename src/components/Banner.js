import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import headerImg from '../assets/img/gift1.png'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import 'animate.css'
import TrackVisibility from 'react-on-screen'


export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0)
	const [isDeleting, setIsDeleting] = useState(false)
	const [text, setText] = useState('')
	const [delta, setDelta] = useState(100 - Math.random() * 2)
	const [index, setIndex] = useState(1)
	const toRotate = ['A Creative & Aspiring Software Engineer']
	const period = 700

	useEffect(() => {
		let ticker = setInterval(() => {
			tick()
		}, delta)

		return () => {
			clearInterval(ticker)
		}
	}, [text])

	const tick = () => {
		let i = loopNum % toRotate.length
		let fullText = toRotate[i]
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1)

		setText(updatedText)

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2)
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true)
			setIndex((prevIndex) => prevIndex - 1)
			setDelta(period)
		} else if (isDeleting && updatedText === '') {
			setIsDeleting(false)
			setLoopNum(loopNum + 1)
			setIndex(1)
			setDelta(100)
		} else {
			setIndex((prevIndex) => prevIndex + 1)
		}
	}

	return (
		<section className='banner' id='home'>
			<Container>
				<Row className='align-items-center'>
					<Col xs={12} md={6} xl={7}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? 'animate__animated animate__fadeIn' : ''
									}>
									<span className='tagline'>
										Welcome to Tharitar's Portfolio 👩‍💻
									</span>
									<h1>
										{`Hi! I'm Tharitar`} <br />
										<span
											className='txt-rotate'
											dataPeriod='500'
											data-rotate='[""]'>
											<span className='wrap'>{text}</span>
										</span>
									</h1>
									<p>
										“The journey of a thousand miles begins with one step.” ―
										Lao Tzu
									</p>
									<button onClick={() => console.log('/mail')}>
										Let’s Connect <ArrowRightCircle size={25} />
									</button>
								</div>
							)}
						</TrackVisibility>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div id='profile-pic'
									className={
										isVisible ? 'animate__animated animate__zoomIn' : ''
									}>
									<img src={headerImg} alt='Header Img' />
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	)
}
