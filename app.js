// app.js
var mysql = require('mysql');

// First you need to create a connection to the db
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'imubitdb'
});

// con.connect((err) => {
//   if(err){
//     console.log('Error connecting to Db');
//     return;
//   }
//   console.log('Connection established');
// });


con.connect(function(err){
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE IF NOT EXISTS log_table(id int AUTO_INCREMENT PRIMARY KEY,file_name varchar(255) NOT NULL,file_size varchar(255),time_stamp varchar(255))";
  con.query(sql, function(err, result){
	  if (err) throw err;
  console.log('table created');
	});
});

var log = { file_name: 'test.log', file_size: '12345' };
con.query('INSERT INTO log_table SET ?', log, (err, res) => {
  if(err) throw err;
  console.log('Last insert ID:', res.insertId);
});

con.query('SELECT * FROM log_table', (err,rows) => {
  if(err) throw err;
  console.log('Data received from Db:\n');
  console.log(rows);
  rows.forEach( (row) => {
  console.log(`${row.file_name} is in ${row.file_size} ${row.time_stamp}`);
  });
});



con.on('error', function(err) {
  console.log("[mysql error]",err);
});

// con.end((err) => {
//   // The connection is terminated gracefully
//   // Ensures all previously enqueued queries are still
//   // before sending a COM_QUIT packet to the MySQL server.
// });
