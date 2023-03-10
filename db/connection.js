const mysql = require('mysql2');


const db = mysql.createConnection({
    host: 'localhost',

    user: 'root',
  
    password: 'Thunderjc1992!',
    database: 'employee_tracker_arellano'
});

module.exports = db;