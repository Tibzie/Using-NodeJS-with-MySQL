
const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connection(function(err) {
  if(err) throw err;
  const sql = "SELECT * FROM employees LIMIT 2";
  con.query(sql, function(err, result) {
    if(err) throw err;
    console.log(result);
  });
});