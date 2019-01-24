

const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if(err) throw err;
  console.log("Connected!");
  const sql = "SELECT * FROM employees";
  con.query(sql, function(err, result, fields) {
    if(err) throw err;
    console.log(result);
    console.log(fields);
  });
});
