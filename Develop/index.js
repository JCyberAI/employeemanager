require("env").config();
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

const

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

        case "Add Employee":
          addEmployee();
          break;

        case 'Add Department':
          addDepartment();
          break;

        case 'Add Roles':
          addRole();
          break;

        case 'Update Employee Roles':
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

const viewEmployees = () => {
  db.query(
    `SELECT employee.id AS "ID", employee.first_name AS "First Name", 
      employee.last_name AS "Last Name", role.title AS "Role", department.name AS "Department", 
      role.salary AS "Salary", CONCAT(e.first_name, " ", e.last_name) AS "Manager"
      FROM employee`,
    (err, rows) => {
      console.log('\n');
      console.log(table.getTable(rows));
    }
  );
  runPrompt();
}

const viewDepartments = () => {
  db.query(
    `SELECT id AS "ID", name AS "Department Name"
    FROM department`,
    (err, rows) => {
      if (err) throw err;
      console.log('\n');
      console.log(table.getTable(rows));
    }
  )
  runPrompt();
}

const viewRoles = () => {
  db.query(
    `SELECT role.id AS "ID", title AS "Role Title", salary AS "Salary"
    FROM role`,
    (err, rows) => {
      if (err) throw err;
      console.log('\n');
      console.log(table.getTable(rows));
    }
  )
  runPrompt();
}