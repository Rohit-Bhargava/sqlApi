var express = require('express');
var mysql = require('mysql');
var app = express('');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'studant'
});

con.connect(function(err) {
  if (!!err) throw err;
  console.log("Connected!");
});

app.get('/', function(req, resp) {
  con.query("SELECT * FROM studantTable", function(err, rows, fields){
    if(!!err){
      console.log('Error')
    } else {
      console.log('Successful!\n');
      console.log(rows[1].Name);
      resp.send('Hello, ' + rows[1].Name);
    }
  });
})

port:3306