
const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if(err) throw err;
  // %rn = that ends with 'rn', s% = that starts with 's'
  const sql = "SELECT * FROM employees WHERE name LIKE '%rn'";
  con.query(sql, function(err, result) {
    if(err) throw err;
    console.log(result);
  });
});
