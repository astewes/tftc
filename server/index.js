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
})

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

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.info(`server has started on ${PORT}`))
