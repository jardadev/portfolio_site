import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<h2>a little more about me...</h2>
			<div>
				<p>
					I am a 26 year old Software Developer who loves overcoming
					new challenges. Please feel free to ask me about my
					experience as a Sonar Technician for the U.S. Navy, Coding
					Dojo coding bootcamp graduate, or any other tech related
					topics.
				</p>
				<div>
					<ul>
						Languages:
						<li>JavaScript</li>
						<li>Java</li>
						<li>Python</li>
					</ul>
					<ul>
						Front-End Tools & Frameworks:
						<li>ReactJS</li>
						<li>SASS</li>
						<li>Bootstrap</li>
						<li>JSP</li>
					</ul>
					<ul>
						Back-End Tools & Frameworks:
						<li>NodeJS</li>
						<li>Express</li>
						<li>MongoDB</li>
						<li>MySQL</li>
						<li>Spring</li>
						<li>Flask</li>
						<li>Postman</li>
						<li>Firebase Cloud</li>
					</ul>
					<ul>
						Currently / Very Interested in learning:
						<li>Jest</li>
						<li>Typescript</li>
						<li>Advanced SEO</li>
					</ul>
				</div>
			</div>
		</motion.div>
	);
};

export default About;
