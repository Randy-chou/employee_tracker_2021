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
                console.log("Viewing departments...");
                toMenu();
                break;
            case "View roles":
                console.log("Viewing roles..");
                toMenu();
                break;
            case "View employees":
                console.log("Viewing employees...");
                toMenu();
                break;
            case "Add department":
                console.log("Adding deparment...");
                toMenu();
                break;
            case "Add role":
                console.log("Adding role...");
                toMenu();
                break;
            case "Add employee":
                console.log("Adding employee...");
                toMenu();
                break;
            case "Update employee role":
                console.log("Update employee role...");
                toMenu();
                break;
            case "Finish":
                console.log("Exiting Tracker...");
                database.exit();
                break;
            default:
                throw 'nonexistant menu option selected?';
        }
    })
}

init();