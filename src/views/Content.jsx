import MainContentContainer from '../containers/MainContentContainer';

import { AnimatePresence } from 'framer-motion';

import Landing from '../components/Landing/Landing';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import './Content.sass';

const Content = ({ defaultView, aboutView, projectsView, contactView }) => {
	return (
		<MainContentContainer>
			<AnimatePresence>
				{defaultView && <Landing />}
				{aboutView && <About />}
				{projectsView && <Projects />}
				{contactView && <Contact />}
			</AnimatePresence>
		</MainContentContainer>
	);
};

export default Content;
