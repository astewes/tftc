import React, { useState } from 'react';
import axios from 'axios';

// const FORM_ENDPOINT = ''; // TODO - fill on the later step

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	// const hitBackend = (e) => {
	// 	e.preventDefault();
	// 	axios.get('/api')
	// 		.then((response) => {
	// 			console.log(response.data)
	// 		})
	// }

	const submitRequest = async (e) => {
		e.preventDefault();
		console.log('body: ', JSON.stringify({ name, email, message }));

		const response = await fetch('/api', {
			method: 'POST',
			// headers: {
			// 	'accepts': 'application/json',
			// 	'Content-Type': 'application/json'
			// },
			body: JSON.stringify({ name, email, message })
		});
		console.log('response: ', response);
		const resData = await response.json();
		console.log('resData: ', resData);
		if (resData.status === 'success') {
			alert("Message Sent.");
			this.resetForm()
		} else if (resData.status === 'fail') {
			alert("Message failed to send.")
		}
	};

	// fetching the GET route from the Express server which matches the GET route from server.js
	// callBackendAPI = async () => {
	// 	const response = await fetch('/express_backend');
	// 	const body = await response.json();

	// 	if (response.status !== 200) {
	// 		throw Error(body.message)
	// 	}
	// 	return body;
	// };


	// const nameRef = useRef(null);
	// const emailRef = useRef(null);
	// const messageRef = useRef(null);

	// const [submitted, setSubmitted] = useState(false);
	// const handleSubmit = (event) => {
	// 	event.preventDefault()
	// 	const data = {
	// 		name: nameRef.current.value,
	// 		email: emailRef.current.value,
	// 		message: messageRef.current.value
	// 	}
	// 	alert("tadaaa!: \n" + JSON.stringify(data) + "Your data 😎")
	// }

	// if (submitted) {
	// 	return (
	// 		<>
	// 			<p>Thank you!</p>
	// 			<p>We'll be in touch soon.</p>
	// 		</>
	// 	);
	// }

	return (
		<div className="Contact">
			<form
				// action={FORM_ENDPOINT}
				onSubmit={submitRequest}
				// method="POST"
				// target="_blank"
			>
				<div>
					<input
						type="text"
						placeholder="Name"
						onChange={e => setName(e.target.value)}
						name="name"
						tabIndex="1"
						value={name}
						// ref={nameRef}
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
						// ref={emailRef}
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
						// ref={messageRef}
						value={message}
						required
					/>
				</div>
				<div>
					<button type="submit">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Contact;
