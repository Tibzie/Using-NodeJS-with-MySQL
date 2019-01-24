

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
  const sql = "DELETE FROM employees WHERE name = 'Alan Smith'";
  con.query(sql, function(err, result) {
    if(err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  })
})
