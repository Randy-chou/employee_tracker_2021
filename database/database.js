const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'Chou0124',
  database: 'ice_creamDB',
});

const exit = () => {connection.end()}

connection.connect((err) => {
    if (err) throw err;
});

const display = () => {
    connection.query('SELECT * FROM products', (err, res) => {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
    });
}

module.exports = {exit, display};