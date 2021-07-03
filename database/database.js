const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'Chou0124',
  database: 'employee_trackerDB',
});

const exit = () => {connection.end()}

connection.connect((err) => {
    if (err) throw err;
});

const displayDepartments = () => {
    return new Promise((resolve,reject) => {
        connection.query('SELECT * FROM department', (err, res) => {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.table(res);
            resolve(res);
        });
    });
}

module.exports = {exit, displayDepartments};

// Promise
// const promiseTest = new Promise((resolve, reject) => {
//     connection.query('SELECT * FROM department', (err, res) => {
//         if (err) throw err;
//         // Log all results of the SELECT statement
//         console.table(res);
//     });
// });

// const displayDepartments = () => {
//     connection.query('SELECT * FROM department', (err, res) => {
//         if (err) throw err;
//         // Log all results of the SELECT statement
//         console.table(res);
//     });
// }