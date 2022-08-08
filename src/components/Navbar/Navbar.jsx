import React from 'react';

import './Navbar.sass';

const Navbar = () => {
	return (
		<div className='navbar-ui p-2'>
			<h1 className='navbar-header'>Jardaaron.me</h1>
			<ul className='navbar-links'>
				<li>About</li>
				<li>Projects</li>
				<li>Contact</li>
			</ul>
		</div>
	);
};

export default Navbar;
