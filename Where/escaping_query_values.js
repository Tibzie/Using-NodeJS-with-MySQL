const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if(err) throw err;
  const jobt = 'singer';
  const sql = 'SELECT * FROM employees WHERE jobtitle = ' + mysql.escape(jobt);
  con.query(sql, function(err, result) {
    if(err) throw err;
    console.log(result);
  });
});
