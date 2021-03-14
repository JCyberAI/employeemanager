INSERT INTO department (name)
VALUES ("Sales");

-- Engineering Department
INSERT INTO department (name)
VALUES ("Engineering");

-- Customer Service
INSERT INTO department (name)
VALUES ("Finance");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000.00, 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 150000.00, 5);

INSERT INTO role (title, salary, department_id)
VALUES ("Sr. Accountant", 125000.00, 6);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("John", "Wick", 13, 12);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Phan", "Neim", 13, 11);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Dosey", "Carabo", null, 10);