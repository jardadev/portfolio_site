import React from 'react';
import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';
import { motion } from 'framer-motion';
import './Landing.sass';

const Landing = () => {
	return (
		<motion.div
			className='header-content'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			{/* TODO: Span className */}
			<h1 className='header-title'>
				Hello, I'm <span>Aaron Johnson</span>.
			</h1>
			<div>
				<p>Full Stack Developer 💻</p>
				<p>U.S. Navy Veteran ⚓️</p>
				<p>Problem Solver 🧮</p>
				<p>Lifelong Learner 📝</p>
			</div>
			<div>
				<h6>Connect With Me:</h6>
				<hr />
				<div className='socials'>
					<motion.a
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.8 }}
						href='https://www.linkedin.com/in/jardacs/'
					>
						<BsLinkedin size={24} />
					</motion.a>
					<motion.a
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.8 }}
						href='https://twitter.com/JardaDono'
					>
						<BsTwitter size={24} />
					</motion.a>
					<motion.a
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.8 }}
						href='https://github.com/jardaaron'
					>
						<BsGithub size={24} />
					</motion.a>
				</div>
			</div>
		</motion.div>
	);
};

export default Landing;
