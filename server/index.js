const express = require('express');
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
let app = express();

dotenv.config();
app.use(express.json());
app.options('*', cors());

app.get('/api', (req, res) => {
	res.send('Welcome to the backend!')
});

// begin test
// all other GET requests not handled before will return our React app
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
// have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));
// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/*', function (req, res) {
// 	res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
// end test

app.use('/public', express.static(path.join(__dirname, 'public')));

let transporter = nodemailer.createTransport({
	host: process.env.MAIL_HOST,
	name: process.env.MAIL_HOST,
	port: 465,
	secure: true,
	auth: {
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASS
	},
	tls: { rejectUnauthorized: false },
	logger: true
});

transporter.verify((error, success) => {
	console.log(error ? error : 'Server is ready to take our messages');
});

app.post('/api', cors(), (req, res) => {
	const name = req.body.data.name,
				email = req.body.data.email,
				message = req.body.data.message,
				mail = {
					from: name + ' <' + email + '>',
					to: process.env.MAIL_TO,
					subject: 'Contact Form Submission',
					text: message
				};

	transporter.sendMail(mail, (err, data) => {
		res.json({ status: err ? 'fail' : 'success' });
	});
});

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.info(`server has started on ${PORT}`))
