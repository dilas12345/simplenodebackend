var mysql      = require('mysql');
console.log("mysql shows thumb up");

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'olabas',
  password : 'jesuslove',
  database : 'smartcard'
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");
} else {
    console.log("Error connecting database ... nn");
}
});

module.exports = { mysql: function() { return mysql }};