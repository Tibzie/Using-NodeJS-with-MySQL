const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if(err) throw err;
  const sql = "DROP TABLE IF EXISTS company";
  con.query(sql, function(err, result) {
    if(err) throw err;
    console.log("Table has been utterly destroyed!" + result);
  });
});
