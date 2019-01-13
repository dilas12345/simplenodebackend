var express = require('express');
var login = require('./routes/loginroutes');
var mysql = require('./database/mysql');
var bodyParser = require('body-parser');

var router = express.Router();
 
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



/**
 * This should be our test route
 */
router.get('/', function(req, res) {
  res.json({ message: 'welcome to our upload module apis' });
});
 
// app.get('/notes', function(req, res) {
//   res.json({notes: "This is your notebook. Edit this to start saving your notes!"});
// })

/**
 * Router to handle registration
 */
router.post('/register',login.register);
router.post('/login',login.login)
app.use('/api', router);
console.log("Che if you see this, server is up");
app.listen(3031)