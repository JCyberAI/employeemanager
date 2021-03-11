require ("dotenv").config();
const actions = require("./actions");
const inquirer = require("inquirer");
const mysql = require("sql");
const dbmain = process.env.DB_HOST;
const dbsub = process.env.DB_USER;
const dbpass = process.env.DB_PASS;
const db = mysql.createConnection({
    dbmain,
    dbsub,
    dbpass,
    db
})

const prompt = () => {
    inquirer
      .prompt(actions)
      .then(answers => {
        switch (answers.choices) {
          case 'View Employees':
            viewEmployees();
            break;
  
          case 'View Departments':
            viewDepartments();
            break;
  
          case 'View Roles':
            viewRoles();
            break;
  
          case 'Add Employee':
            addEmployee();
            break;
  
          case 'Add Department':
            addDepartment();
            break;
  
          case 'Add Roles':
            addRole();
            break;
  
          case 'Quit':
            delete answers.choices;
            quit(answers);
            break;
        }
      })
      .catch(err => {
        if (err) throw err;
      })
  }
// const initQuestions = require('./lib/questions');
// const inquirer = require('inquirer');
// const table = require('console.table');
// const mysql = require('mysql');
// const host = process.env.DB_HOST;
// const user = process.env.DB_USER;
// const password = process.env.DB_PASS;
// const database = process.env.DB_NAME;
// const db = mysql.createConnection({
//   host,
//   user,
//   password,
//   database
// })