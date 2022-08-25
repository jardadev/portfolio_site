import { motion } from 'framer-motion';
import Card from 'react-bootstrap/Card';
import './Projects.sass';

const Projects = () => {
	return (
		<motion.div
			className='projectsContainer'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<Card bg='primary'>
				<Card.Img variant='top' src='/assets/images/laptop.svg' />
				<Card.Header>
					<Card.Title className='text-center'>Jarda.dev</Card.Title>
				</Card.Header>
				<Card.Body>
					<Card.Text>
						My portfolio website. Built with React. Deployed via
						AWS. You are here.
					</Card.Text>
					<div className='project-links'>
					{/* FIXME: add source link */}
						<a href='#'>Source</a>
					</div>
				</Card.Body>
				<Card.Footer>
					<div className='tags'>
						<p>React</p>
						<p>SASS</p>
						<p>AWS</p>
						<p>Bootstrap</p>
					</div>
				</Card.Footer>
			</Card>
			<Card bg='primary'>
				<Card.Img variant='top' src='/assets/images/python.svg' />
				<Card.Header>
					<Card.Title className='text-center'>
						Productivity.py
					</Card.Title>
				</Card.Header>
				<Card.Body>
					<Card.Text>
						Note and Appointment tracker, featuring full CRUD
						operations, and Login/Registration. Built with Python
						and Flask.
					</Card.Text>
					<div className='project-links'>
						<a href='#'>Demo</a> | <a href='#'>Source</a>
					</div>
				</Card.Body>
				<Card.Footer>
					<div className='tags'>
						<p>Python</p>
						<p>Flask</p>
						<p>MongoDB</p>
					</div>
				</Card.Footer>
			</Card>
		</motion.div>
	);
};

export default Projects;
