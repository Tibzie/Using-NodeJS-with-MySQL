

const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  const sql = "CREATE TABLE Employees (name VARCHAR(255), jobtitle VARCHAR(255))";
  con.query(sql, function(err) {
    if(err) throw err;
    console.log("Table created!");
  });
});
