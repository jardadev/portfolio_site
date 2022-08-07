import React from 'react';
import { MdHome } from 'react-icons/md';
import './Navbar.sass';

const Navbar = () => {
	return (
		<div className='navbar-ui p-2'>
			<MdHome size={64} />
			<ul className='navbar-links'>
				<li>About</li>
				<li>Projects</li>
				<li>Contact</li>
			</ul>
		</div>
	);
};

export default Navbar;
