import { Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

export const ProjectCard = ({ title, description, imgUrl, linkUrl }) => {
	return (
		<Col size={12} sm={6} md={4}>
			<div className='proj-imgbx'>
				<img src={imgUrl} href={linkUrl} />
				 
				<div className='proj-txtx'>
					<h4>{title}</h4>
					<span>{description}</span><br/>
					<Card.Link href={linkUrl} target="_blank" class="p-3 mb-2 text-white">Click here</Card.Link>
				</div>
		
			</div>
		</Col>
	)
}
