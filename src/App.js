import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar.jsx';
import Container from 'react-bootstrap/Container';

const App = () => {
	return (
		<Router>
			<Container className='d-flex flex-column justify-content-between'>
				<Navbar />
				<Routes className='d-flex'>
					<Route path='/' element={<Home />} />
				</Routes>
			</Container>
		</Router>
	);
};

export default App;
