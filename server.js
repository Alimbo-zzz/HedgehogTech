const express = require('express');
const path = require('path');
const morgan = require('morgan');
const createPath = require('./src/helpers/createPath.js');
const nodemailer = require('nodemailer');

require('dotenv').config(); // безопасность

const app = express();
const PORT = 8080;

// __________

app.listen(PORT, (err)=>{ //sever
	err ? console.log(err) : console.log(`PORT: ${PORT}`);
})

app.use('/', express.static('Front-end')); // путь для всех элементов
app.use(morgan(':method :url :status :res[content-length] :response-time ms')); // выведение в консоль всех запросов
app.use(express.json());  // позволяет получать json-files
app.use(express.urlencoded({extended: false})); // middle var - позволяет принимать body в запросах




// _____routes

app.get('/', (req, res)=>{
	res.sendfile(createPath('index'))
})



// ______mailer


const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth:{
		user: process.env.EMAIL,
		pass: process.env.PASSWORD
	}
})





// API___

app.post('/contact/', (req, res)=>{
	let data = req.body.data;
	console.log(data);
	const html = `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>3D card</title>
		<style media="screen">
			.wrap{
				width:100%;
				background-color: #222;
				color: #fff;
				padding: 50px 0;
				margin: 0 auto;
			}

			.block{
				width:500px;
				padding:30px;
				margin: 0 auto;
				border:1px solid #fff;
			}
			h1{text-align:center; margin-bottom: 10px;}
			li{}
			span{color:orange;}
			._orange{color:orange; text-align:center; margin-bottom: 10px;}
		</style>

	</head>
	<body>

		<div class="wrap">
			<div class="block">
				<h1>Hedgehog</h1>
				<ul>
					<li>Name: <span>${data.name}</span></li>
					<li>Number: <span>${data.number}</span></li>
					<li>Telegram: <span>${data.telegram}</span></li>
					<li>Mail: <span>${data.mail}</span></li>
					<li><div class="_orange">Description</div><p>${data.description}</p></li>
				</ul>
			</div>
		</div>

	</body>
	</html>
`;

	const mail_options = {
		from: 'hedgehogtechwhite@gmail.com',  // кто будет отправлять
		to: process.env.EMAIL,    // кому отправить
		subject: 'Обратная связь',
		html: html
	}

	console.log(req.body);
	transporter.sendMail(mail_options, err=>{
		console.log(err);
	})
	res.status(200).json({"status": "success"})
})

app.post('/project/', (req, res)=>{
	let data = req.body.data;
	console.log(data);
	const html = `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>3D card</title>
		<style media="screen">
			.wrap{
				width:100%;
				background-color: #222;
				color: #fff;
				padding: 50px 0;
				margin: 0 auto;
			}

			.block{
				width:500px;
				padding:30px;
				margin: 0 auto;
				border:1px solid #fff;
			}
			h1{text-align:center; margin-bottom: 10px;}
			li{}
			span{color:orange;}
			._orange{color:orange; text-align:center; margin-bottom: 10px;}
		</style>

	</head>
	<body>

		<div class="wrap">
			<div class="block">
				<h1>Hedgehog</h1>
				<ul>
					<li>Name: <span>${data.name}</span></li>
					<li>Type: <span>${data.type}</span></li>
					<li>Connection: <span>${data.connection}</span></li>
					<li>Cash: <span>${data.cash}$</span></li>
					<li>Platform: <span>${data.platform}</span></li>
					<li><div class="_orange">Description</div><p>${data.description}</p></li>
				</ul>
			</div>
		</div>

	</body>
	</html>
`;

	const mail_options = {
		from: 'hedgehogtechwhite@gmail.com',  // кто будет отправлять
		to: process.env.EMAIL,    // кому отправить
		subject: 'Проект',
		html: html
	}

	console.log(req.body);
	transporter.sendMail(mail_options, err=>{
		console.log(err);
	})
	res.status(200).json({"status": "success"})
})
