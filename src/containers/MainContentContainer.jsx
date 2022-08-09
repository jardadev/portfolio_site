import React from 'react';
import Container from 'react-bootstrap/Container';
import './MainContentContainer.sass';

const MainContentContainer = ({ children }) => {
	return <Container className='main-content'>{children}</Container>;
};

export default MainContentContainer;
