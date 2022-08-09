import React from 'react';
import MainContentContainer from '../../containers/MainContentContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';
import './Header.sass';

const Header = () => {
	return (
		<MainContentContainer>
			<Row className='header'>
				<Col>
					<img
						className='cover-img'
						src='/assets/images/cover.jpg'
						alt='Aaron Johnson wearing a green shirt, smiling.'
					/>
				</Col>
				<Col className='header-content'>
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
					<div>
						<h6>Connect With Me:</h6>
						<div className='socials'>
							<a href='https://www.linkedin.com/in/jardacs/'>
								<BsLinkedin size={24} />
							</a>
							<a href='https://twitter.com/JardaDono'>
								<BsTwitter size={24} />
							</a>
							<a href='https://github.com/jardaaron'>
								<BsGithub size={24} />
							</a>
						</div>
					</div>
				</Col>
			</Row>
		</MainContentContainer>
	);
};

export default Header;
