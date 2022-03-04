const express = require('express');
const path = require('path');
const morgan = require('morgan');
const createPath = require('./src/helpers/createPath.js');
const nodemailer = require('nodemailer');
const cors = require('cors');

require('dotenv').config(); // безопасность


const app = express();
const PORT = 8080;
const mail_address = process.env.EMAIL;
const mail_password = process.env.PASSWORD;


// __________

app.listen(PORT, (err)=>{ //sever
	err ? console.log(err) : console.log(`PORT: ${PORT}`);
})

app.use('/', express.static('Front-end')); // путь для всех элементов
app.use(morgan(':method :url :status :res[content-length] :response-time ms')); // выведение в консоль всех запросов
app.use(express.json());  // позволяет получать json-files
app.use(express.urlencoded({extended: false})); // middle var - позволяет принимать body в запросах
app.use(cors());

// _____routes
app.get('/', (req, res)=>{
	res.sendfile(createPath('index'))
})


// ______mailer
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth:{
		user: mail_address,
		pass: mail_password
	}
},
{from: `HedgehogTech <${mail_address}>`,}
)


// API___

app.post('/mailer/', (req, res)=>{
	const html = `${req.body.html}`;
	const type = req.body.type;

	const mail_options = {
		to: mail_address,    // кому отправить
		subject: type,
		html: html
	}

	transporter.sendMail(mail_options, err=>{
		console.log(err);
	})
	res.status(200).json({"status": "success"})
})
