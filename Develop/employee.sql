DROP DATABASE IF EXISTS ems_db;

CREATE DATABASE IF NOT EXISTS ems_db;

USE ems_db;

CREATE TABLE employees (

    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    manager_id INT,
    role_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id),
    FOREIGN KEY (manager_id)

);