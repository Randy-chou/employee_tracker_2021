# employee_tracker_2021
## Description
This app allows business owners to track and organize their company by creating a dynamic database of departments, roles, hierarchy, and employee information. This employee tracker was created using mySQL and Node.js. As a project, this was a demonstration of my ability to work with databases in backend development using sql. So far, the database is stored locally, but in the future I aim to bring the database to a remote server and create a deployed form of the application.
## Table of Contents (Optional)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
To use, simply clone the github repo, install the npm packages, and change the mySQL password to your own personal password.
## Usage
Type the following into the terminal
```
npm run start
```
You will then be brought to a menu where you can view and edit your employee database holding info about departments, roles, and individual employees.

Video Demo: https://www.youtube.com/watch?v=2XS3r9_skOk
## Credits
https://github.com/Randy-chou
## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Features
The employee tracker allows users to view departments, roles, and employees. They can also add or delete new departments, roles, and employees into the database. Note, that deleting a department will delete all employees and roles associated with that department. The same goes for deleting a role in that all employees under that role will also be deleted. The tracker also allows you to update the role and manager for individual employees as well as see the total salary of a department.
## How to Contribute
N/A
## Tests
N/A