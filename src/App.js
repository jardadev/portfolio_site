import React, { useState } from 'react';
import AppLayout from './containers/AppLayout';
import Content from './views/Content';
import Navbar from './components/Navbar/Navbar.jsx';

const App = () => {
	const [defaultView, setDefaultView] = useState(true);
	const [aboutView, setAboutView] = useState(false);
	const [projectsView, setProjectsView] = useState(false);
	const [contactView, setContactView] = useState(false);
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
		<AppLayout>
			<Navbar setView={setView} />
			<Content
				defaultView={defaultView}
				aboutView={aboutView}
				contactView={contactView}
				projectsView={projectsView}
			/>
		</AppLayout>
	);
};

export default App;
