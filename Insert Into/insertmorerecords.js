

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
  const sql = "INSERT INTO employees (name, jobtitle) VALUES ?";
  const values = [
    ['Jonathan Woodburn', 'director'],
    ['Alan Smith', 'dancer'],
    ['Hannah Small', 'actress'],
    ['Speedy Gonzales', 'cartoon character'],
    ['Violet Charlotte', 'singer']
  ];
  con.query(sql, [values], function(err, result) {
    if(err) throw err;
    console.log("Added many records!Number of records: " + result.message);
  });
})
