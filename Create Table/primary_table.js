const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  const sql = "CREATE TABLE Company (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function(err) {
    if(err) throw err;
    console.log(("Table created with primary key!"));
  })
})
