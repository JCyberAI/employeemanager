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