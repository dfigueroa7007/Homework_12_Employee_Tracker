var mysql = require("mysql");
var inquirer = require("inquirer");

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

  