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

app.get('/user', async function (req, res) {
  // let user = new User({login: "t", password: "123"})
  // await user.save();
  // let user1 = new User({login: "y", password: "123"})
  // await user1.save();
  let users = await User.find();
  res.json({users : users})
});


app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
});
