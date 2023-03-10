CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name text
);

CREATE TABLE role (
    ID INTEGER AUTO_INCREMENT PRIMARY KEY,
    TITLE VARCHAR(30),
    SALARY DECIMAL,
    department_id INTEGER
);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) ,
    last_name VARCHAR(30) ,
    role_id INTEGER,
    manager_id INTEGER
);