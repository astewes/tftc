import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [submitted, setSubmitted] = useState(false);

	const submitRequest = async (e) => {
		e.preventDefault();

		const data = { name, email, message };
		axios.post('http://localhost:8080/api', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			data
		})
			.then(response => {
				if (response.data.status === 'success') {
					setName('');
					setEmail('');
					setMessage('');
					setSubmitted(true);
				} else if (response.data.status === 'fail') {
					// do something
				}
				return response;
			});
	};

	if (submitted) {
		return (
			<>
				<p>Thank you!</p>
				<p>We'll be in touch soon.</p>
			</>
		);
	}

	return (
		<div className="Contact">
			<form onSubmit={submitRequest}>
				<div>
					<input
						type="text"
						placeholder="Name"
						onChange={e => setName(e.target.value)}
						name="name"
						tabIndex="1"
						value={name}
						required
					/>
				</div>
				<div>
					<input
						type="email"
						placeholder="Email"
						onChange={e => setEmail(e.target.value)}
						name="email"
						tabIndex="2"
						value={email}
						required
					/>
				</div>
				<div>
					<textarea
						placeholder="Message"
						onChange={e => setMessage(e.target.value)}
						name="message"
						tabIndex="3"
						value={message}
						required
					/>
				</div>
				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
};

export default Contact;
