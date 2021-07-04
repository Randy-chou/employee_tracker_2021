const database = require('./database/database');
const inquirer = require('inquirer'); 

function init(){
    console.log("  ___            _                  ");
    console.log(" | __|_ __  _ __| |___ _  _ ___ ___ ");
    console.log(" | _|| '  \\| '_ \\ / _ \\ || / -_) -_)");
    console.log(" |___|_|_|_| .__/_\\___/\\_, \\___\\___|");
    console.log("           |_|         |__/         ");
    console.log("  _____            _           ");
    console.log(" |_   _| _ __ _ __| |_____ _ _ ");
    console.log("   | || '_/ _` / _| / / -_) '_|");
    console.log("   |_||_| \\__,_\\__|_\\_\\___|_|  ");
    console.log("");
    toMenu();
}

// console.log(database);

let questions_main = [
    {
        type: 'list',
        message: 'What would you like to do?:',
        name: 'choice',
        choices: ["View departments", "View roles", "View employees", "Add department", "Add role", "Add employee", "Update employee role", "Finish"]
    }
]

function toMenu(){
    inquirer.prompt(questions_main).then((data) =>{
        switch(data.choice) {
            case "View departments":
                database.displayDepartments().then(toMenu);
                break;
            case "View roles":
                database.displayRoles().then(toMenu);
                break;
            case "View employees":
                database.displayEmployees().then(toMenu);
                break;
            case "Add department":
                database.addDepartment().then(toMenu);
                break;
            case "Add role":
                database.addRole().then(toMenu);
                break;
            case "Add employee":
                database.addEmployee().then(toMenu);
                break;
            case "Update employee role":
                database.updateRole().then(toMenu);
                break;
            case "Finish":
                console.log("Exiting Employee Tracker...");
                database.exit();
                break;
            default:
                throw 'nonexistant menu option selected?';
        }
    })
}

init();