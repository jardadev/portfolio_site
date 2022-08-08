import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';
import './Header.sass';

const Header = () => {
	return (
		<Container>
			<Row>
				<Col>
					<img
						className='cover-img'
						src='/assets/images/cover.jpg'
						alt='Aaron Johnson wearing a green shirt, smiling.'
					/>
				</Col>
				<Col>
					{/* TODO: Span className */}
					<h1>
						Hello, I'm <span>Aaron Johnson</span>.
					</h1>
					<div>
						<p>Full Stack Developer 💻</p>

						<p>Problem Solver 🧮</p>
						<p>Music Enthusiast 🎧</p>
						<p>Lifelong Learner 📝</p>
					</div>
					<div className='socials'>
						<a href='https://www.linkedin.com/in/jardacs/'>
							<BsLinkedin />
						</a>
						<a href='https://twitter.com/JardaDono'>
							<BsTwitter />
						</a>
						<a href='https://github.com/jardaaron'>
							<BsGithub />
						</a>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Header;
