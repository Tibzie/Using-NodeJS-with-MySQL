
const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if(err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE nodejs", function(err, result) {
    if(err) throw err;
    console.log("Database created");
  });
});
