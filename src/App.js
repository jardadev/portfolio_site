import AppLayout from './containers/AppLayout';
import Content from './views/Content';
import Navbar from './components/Navbar/Navbar.jsx';

const App = () => {
	return (
		<AppLayout>
			<Navbar />
			<Content />
		</AppLayout>
	);
};

export default App;
