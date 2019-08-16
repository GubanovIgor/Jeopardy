let express = require('express')
let morgan = require('morgan')
let fetch = require('node-fetch')
let app = express()
const path = require('path');
const mongoose = require('mongoose');

const { Card } = require('./models/Card');

mongoose.connect('mongodb://localhost:27017/jeopardy', { useNewUrlParser: true, useCreateIndex: true });

const port = 3101;

app.use(morgan('dev'))

const corsMiddleware = (req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
}

app.use(corsMiddleware)

app.get('/getCards', async function (req, res) {
	const cards = await Card.find();
  res.send(cards);
});


app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
});
