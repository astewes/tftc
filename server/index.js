let express = require('express');
const path = require('path');
let app = express();
let nodemailer = require('nodemailer');
// a test route to make sure we can reach the backend
//this would normally go in a routes file
app.get('/api', (req, res) => {
	res.send('Welcome to the backend!')
})
//Set the port that you want the server to run on
// const port = process.env.PORT || 8080;
// app.listen(port);
// console.log('App is listening on port ' + port);

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

let transporter = nodemailer.createTransport({
	host: "mail.talesfromtheclosetpodcast.com",
	port: 26,
	secure: false,
	auth: {
		user: "talesgg9",
		pass: "Kismet$99Anne"
	},
	tls: {
		rejectUnauthorized: false
	}
});

// verify connection configuration
transporter.verify(function (error, success) {
	if (error) {
		console.log(error);
	} else {
		console.log("Server is ready to take our messages");
	}
});


app.post('/api', (req, res, next) => {
	console.log('req: ', req);
	console.log('res: ', res);
	var name = req.body.name;
	var email = req.body.email;
	var message = req.body.message;
	var content = `name: ${name} \n email: ${email} \n message: ${message} `

	var mail = {
		from: name,
		to: name,
		message,
		text: content
	}

	transporter.sendMail(mail, (err, data) => {
		if (err) {
			res.json({
				status: 'fail'
			})
		} else {
			res.json({
				status: 'success'
			})
		}
	})
});

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.info(`server has started on ${PORT}`))
