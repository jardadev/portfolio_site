import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';
const Contact = () => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<h2>
				Please leave your name, email, and a brief message here for any
				inquiries!
			</h2>
			<Form>
				<Row>
					<Col>
						<Form.Group className='mb-3'>
							<Form.Label>Name</Form.Label>
							<Form.Control type='text' placeholder='Jane Doe' />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group className='mb-3'>
							<Form.Label>Email</Form.Label>
							<Form.Control
								type='email'
								placeholder='somebody@wherever.com'
							/>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Form.Group className='mb-3'>
						<Form.Label>Message</Form.Label>
						<Form.Control
							as='textarea'
							rows={3}
							placeholder="Let's work on something!"
						/>
					</Form.Group>
				</Row>
				<Row>
					<Button variant='primary'>✉️</Button>
				</Row>
			</Form>
		</motion.div>
	);
};

export default Contact;
