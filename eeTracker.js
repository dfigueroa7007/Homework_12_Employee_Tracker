const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table'); 

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "DanE",
    password: "pwd123",
    database: "ee_tracker_db"
  });

  connection.connect(function(err) {
    if (err) {
      console.error("Error connecting: " + err.stack);
      return;
    }
    console.log("Connected as id: " + connection.threadId);
    runTrackerChoices()
  });

function runTrackerChoices() {
  inquirer
  .prompt([
    {
      type: "list",
      name: "userCommand",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add department",
        "Add role",
        "Add employee",
        "Update employee role",
        "Exit"
      ]
    },
  ])
  .then(answers => {
    console.log(answers)
    switch (answers.userCommand) {
      case "View all departments":
        viewDept();
        break;

      case "View all roles":
        viewRoles();
        break;

      case "View all emlpoyees":
        viewAllEmp();
        break;

      case "Add department":
        addDep();
        break;

      case "Add role":
        addRole();
        break;

      case "Add employee":
        addEmp();
        break;

      case "Update employee role":
        udpateEmpRole();
        break;

      case "Exit":
        connection.end();
        break;
    }
  })
  .catch(error => {
    console.log(error)
  });
}

function viewDept() {
  var query = "SELECT * FROM ee_tracker_db.department";
  connection.query(query, function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(res);
    }
    runTrackerChoices()
  });
}