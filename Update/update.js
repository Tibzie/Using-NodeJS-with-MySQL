

const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function (err) {
  if(err) throw err;
  const sql = "UPDATE employees SET jobtitle = 'director' WHERE name = 'Hannah Small'";
  con.query(sql, function(err, result) {
    if(err) throw err;
    console.log(result.affectedRows + " record has been updated!");
  })
})
