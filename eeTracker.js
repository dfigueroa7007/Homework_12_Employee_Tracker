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
  });

  