const mysql = require('mysql');

const con = mysql.createConnection({
  host: "sql7.freesqldatabase.com",
  user: "sql7284796",
  password: "AfL37Tigjs"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});