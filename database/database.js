const mysql = require('mysql');
const contable = require('console.table');
const inquirer = require('inquirer'); 

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
        connection.query("Select a.first_name AS 'first name', a.last_name AS 'last name', concat(b.first_name,' ',b.last_name) AS manager, title, salary, name AS department From employee a LEFT JOIN employee b ON a.manager_id = b.id LEFT JOIN role ON a.role_id = role.id LEFT JOIN department ON role.department_id = department.id", (err, res) => {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.table(res);
            resolve(res);
        });
    });
}

const addDepartment = () => {
    let questions = [{
        type: 'input',
        message: 'Enter name of new department:',
        name: 'name',
    }];
    return new Promise((resolve,reject) => {
        inquirer.prompt(questions).then((data) => {
            connection.query("INSERT INTO department SET ?", data , (err, res) => {
                if (err) throw err;
                console.log("Added new department.");
                resolve(res);
            });
        });
    });
}

const addRole = () => {
    return new Promise((resolve,reject) => {
        connection.query("SELECT name, id AS value FROM department", (err, res) => {
            if (err) throw err;
            let questions = [{
                type: 'input',
                message: 'Enter title of new role:',
                name: 'title',
            },{
                type: 'input',
                message: 'Enter salary:',
                name: 'salary',
            },{
                type: 'list',
                message: 'Pick a department:',
                name: 'department_id',
                choices: res,
            }];
            inquirer.prompt(questions).then((data) => {
                connection.query("INSERT INTO role SET ?", data , (err, res) => {
                    if (err) throw err;
                    console.log("Added new role.");
                    resolve(res);
                });
            });
        }); 
    });
}

const addEmployee = () => {
    return new Promise((resolve,reject) => {
        connection.query("SELECT concat(first_name,' ',last_name) AS name, id AS value FROM employee", (err, res1) => {
            if (err) throw err;
            connection.query("SELECT title AS name, id AS value FROM role", (err, res2) => {
                if (err) throw err;
                let questions = [{
                    type: 'input',
                    message: 'Enter first name of new employee:',
                    name: 'first_name',
                },{
                    type: 'input',
                    message: 'Enter last name of new employee:',
                    name: 'last_name',
                },{
                    type: 'list',
                    message: 'Pick a role:',
                    name: 'role_id',
                    choices: res2,
                },{
                    type: 'list',
                    message: 'Pick a manager if applicable:',
                    name: 'manager_id',
                    choices: [...res1, {name: "N/A", value: null}],
                }];
                inquirer.prompt(questions).then((data) => {
                    connection.query("INSERT INTO employee SET ?", data , (err, res) => {
                        if (err) throw err;
                        console.log("Adding new employee...");
                        resolve();
                    });
                });
            }); 
        }); 
    });
}

const updateRole = () => {
    return new Promise((resolve,reject) => {
        connection.query("SELECT concat(first_name,' ',last_name) AS name, id AS value FROM employee", (err, res1) => {
            if (err) throw err;
            connection.query("SELECT title AS name, id AS value FROM role", (err, res2) => {
                if (err) throw err;
                let questions = [{
                    type: 'list',
                    message: 'Pick an employee to change role:',
                    name: 'employee',
                    choices: res1,
                },{
                    type: 'list',
                    message: 'Pick a new role:',
                    name: 'newRole',
                    choices: res2,
                }];
                inquirer.prompt(questions).then((data) => {
                    connection.query("UPDATE employee SET ? WHERE ?",
                    [{
                        role_id: data.newRole,
                    },{
                        id: data.employee,
                    }],
                    (err, res) => {
                        if (err) throw err;
                        console.log("Updating employee...");
                        resolve();
                    });
                });
            }); 
        }); 
    });
}



module.exports = {
    exit, 
    displayDepartments, 
    displayRoles, 
    displayEmployees, 
    addDepartment,
    addRole,
    addEmployee,
    updateRole
};