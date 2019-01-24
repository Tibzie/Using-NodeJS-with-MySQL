

const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function (err) {
  if(err) throw err;
  console.log("Connected!");
  const sql = "INSERT INTO employees (name, jobtitle) VALUES ('George Wayland', 'singer')";
  con.query(sql, function(err) {
    if(err) throw err;
    console.log("1 record insterted.");
  });
});
