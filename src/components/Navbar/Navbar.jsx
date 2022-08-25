import './Navbar.sass';

const Navbar = ({ setView }) => {
	return (
		<div className='navbar-ui'>
			<h1 className='navbar-header'>Jarda.dev</h1>
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
		</div>
	);
};

export default Navbar;
