const mysql = require('mysql');
const contable = require('console.table');

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
        connection.query('SELECT name FROM department', (err, res) => {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.table(res);
            resolve(res);
        });
    });
}

const displayRoles = () => {
    return new Promise((resolve,reject) => {
        connection.query("SELECT title, salary, name AS department FROM role LEFT JOIN department ON role.department_id = department.id", (err, res) => {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.table(res);
            resolve(res);
        });
    });
}

const displayEmployees = () => {
    return new Promise((resolve,reject) => {
        connection.query("Select a.first_name AS 'first name', a.last_name AS 'last name', concat(b.first_name,' ',b.last_name) AS manager, title, salary, name AS department From employee a LEFT JOIN employee b ON a.manager_id = b.id LEFT JOIN role ON a.role_id = role.id LEFT JOIN department ON role.department_id = department.id;", (err, res) => {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.table(res);
            resolve(res);
        });
    });
}

module.exports = {exit, displayDepartments, displayRoles, displayEmployees};

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