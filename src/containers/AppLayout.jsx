import React from 'react';
import Container from 'react-bootstrap/Container';
import './AppLayout.sass';

const AppLayout = ({ children }) => {
	return <Container className='app'>{children}</Container>;
};

export default AppLayout;
