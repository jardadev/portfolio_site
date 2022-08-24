import React, { useState } from 'react';
import MainContentContainer from '../containers/MainContentContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AnimatePresence } from 'framer-motion';

import Landing from '../components/Landing/Landing';
import About from '../components/About/About';
import './Content.sass';

const Content = () => {
	const [defaultView, setDefaultView] = useState(true);
	const [aboutView, setAboutView] = useState(false);
	const [projectsView, setProjectsView] = useState(false);
	const [contactView, setContactView] = useState(false);

	// FIXME: Change function calls to '!view' so that I may click the view button to show component and again to hide component and show landing component
	const setView = (view) => {
		switch (view) {
			case 'about':
				setDefaultView(false);
				setContactView(false);
				setProjectsView(false);
				setAboutView(true);
				break;
			case 'projects':
				setDefaultView(false);
				setAboutView(false);
				setContactView(false);
				setProjectsView(true);
				break;
			case 'contact':
				setDefaultView(false);
				setAboutView(false);
				setProjectsView(false);
				setContactView(true);
				break;
			case 'home':
				setAboutView(false);
				setProjectsView(false);
				setContactView(false);
				setDefaultView(true);
				break;
			default:
				break;
		}
	};

	return (
		<MainContentContainer>
			<div className='view-buttons'>
				<button
					className='btn btn-primary'
					onClick={() => setView('home')}
				>
					home
				</button>
				<button
					className='btn btn-primary'
					onClick={() => setView('about')}
				>
					about
				</button>
				<button
					className='btn btn-primary'
					onClick={() => setView('projects')}
				>
					projects
				</button>
				<button
					className='btn btn-primary'
					onClick={() => setView('contact')}
				>
					contact
				</button>
			</div>
			<Row>
				<Col>
					<img
						className='cover-img'
						src='/assets/images/cover.jpg'
						alt='Aaron Johnson wearing a green shirt, smiling.'
					/>
				</Col>
				<Col>
					<AnimatePresence>
						{defaultView && <Landing />}
						{aboutView && <About />}
						{projectsView && <div>Projects</div>}
						{contactView && <div>Contact</div>}
					</AnimatePresence>
				</Col>
			</Row>
		</MainContentContainer>
	);
};

export default Content;
