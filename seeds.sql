USE ee_tracker_db;

INSERT INTO department (dept_name) VALUES ("TestingDpt");
INSERT INTO role (title, salary, dept_id) VALUES ("TestingTitle", 80000.00, 10);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Master", "Roshi", 69, 10);
