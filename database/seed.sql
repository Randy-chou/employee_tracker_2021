DROP DATABASE IF EXISTS employee_trackerDB;

CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  manager_id INT,
  PRIMARY KEY (id)
  FOREIGN KEY (role_id) REFERENCES role(id)
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL(10,2) NULL,
  department_id INT NULL,
  PRIMARY KEY (id)
  FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

INSERT INTO department (name) VALUES ("Human Resources");
INSERT INTO department (name) VALUES ("Customer Service");
INSERT INTO department (name) VALUES ("IT");

INSERT INTO role (title, salary, department_id) 
VALUES ("Psychiatrist", "4000", "1");
INSERT INTO role (title, salary, department_id) 
VALUES ("Telephone operator", "2000", "2");
INSERT INTO role (title, salary, department_id) 
VALUES ("Service manager", "3000", "2");
INSERT INTO role (title, salary, department_id) 
VALUES ("Server tech", "4000", "3");
INSERT INTO role (title, salary, department_id) 
VALUES ("Front end tech", "4000", "3");
INSERT INTO role (title, salary, department_id) 
VALUES ("Back end tech", "4000", "3");

INSERT INTO employee (first_name, last_name, role_id) 
VALUES ("Jim", "Hendrick", "3");
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ("Bob", "Fishman", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ("Jenny", "Smith", 2, 1);
INSERT INTO employee (first_name, last_name, role_id) 
VALUES ("Gabe", "Newel", 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ("Elly", "Granbs", 5, 4);