let express = require('express')
let morgan = require('morgan')
let fetch = require('node-fetch')
let app = express()
const path = require('path');
const port = 3101;

app.use(morgan('dev'))

const corsMiddleware = (req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
}

app.use(corsMiddleware)

app.get('/', async function (req, res) {
  res.send('Hello')
});


app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
});
