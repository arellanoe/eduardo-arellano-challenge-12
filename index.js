const inquirer = require('inquirer');
const connection = require('./db/connection');

connection.connect(error => {
    if (error) throw error;
    console.log('Database connected successfully.');
    runTracker();
});

const runTracker = function () {
    inquirer.prompt([{
        type: 'list',
        name: 'command',
        message: 'Select a choice?',
        choices: ['View Departments', 'View Roles', 'View Employees', 'Add Department', 'Log Out']
    }]).then(response => {
        if (response.command === 'View Departments') {
            connection.query(`SELECT * FROM department`, (error, result) => {
                if (error) throw error;
                console.log("Displaying All Departments: ");
                console.table(result);
                runTracker();
            });
        } else if (response.command === 'Add Department') {
            inquirer.prompt([{
                type: 'input',
                name: 'departmentName',
                message: 'Enter the name of the department:',
                validate: departmentName => {
                    if (departmentName) {
                        return true;
                    } else {
                        console.log('Department name is required!');
                        return false;
                    }
                }
            }]).then(response => {
                connection.query(`INSERT INTO department (name) VALUES (?)`, [response.departmentName], (error, result) => {
                    if (error) throw error;
                    console.log(`Department "${response.departmentName}" added to the database.`)
                    runTracker();
                });
            });
        } else if (response.command === 'View Employees') {
            connection.query(`SELECT * FROM employee`, (error, result) => {
                if (error) throw error;
                console.log("Displaying All Employees: ");
                console.table(result);
                runTracker();
            });
        } else if (response.command === 'Log Out') {
            connection.end();
            console.log('Adios Amigo!');
        }
    });
};
