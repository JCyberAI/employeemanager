-- added departments 
INSERT INTO department (name)
VALUES ("Sales");


INSERT INTO department (name)
VALUES ("Engineering");


INSERT INTO department (name)
VALUES ("Finance");

-- added roles

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000.00, 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 150000.00, 5);

INSERT INTO role (title, salary, department_id)
VALUES ("Sr. Accountant", 125000.00, 6);

-- added employees 

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("John", "Wick", 13, 12);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Phan", "Neim", 13, 11);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Dosey", "Carabo", null, 10);