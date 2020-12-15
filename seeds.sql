USE ee_tracker_db;

INSERT INTO department (dept_name) VALUES 
    ("Engineering"),
    ("Finance"),
    ("Legal"),
    ("Sales");

INSERT INTO role (title, salary, dept_id) VALUES 
("Lead Engineer", 150000.00, 1),
("Lead Engineer", 150000.00, 1),
("Software Engineer", 120000.00, 1),
("Accountant", 125000.00, 2),
("Legal Team Lead", 250000.00, 3),
("Lawyer", 190000.00, 3),
("Sales Lead", 100000.00, 4),
("Salesperson", 80000.00, 4);

INSERT INTO employee (first_name, last_name, role_id) VALUES
("Billy", "Cranston", 1),
("Trini", "Kwan", 2),
("Kimberly", "Hart", 3),
("Zack", "Taylor", 4),
("Zordon", "", 5),
("Alpha", "Five", 6),
("Tommy", "Oliver", 7),
("Jason", "Scott", 8);