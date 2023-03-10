
INSERT INTO department
  (name)
VALUES
('Marketing'),
('Human Resources'),
('Customer Service'),
('Research');

INSERT INTO employee
  (first_name, last_name, role_id, manager_id)
VALUES
('Emma', 'Johnson', 1, 4),
('Aiden', 'Smith', 2, 3),
('Chloe', 'Martinez', 3, 1),
('Jaun', 'Escutia', 4, 5);



INSERT INTO role
  (title, salary, department_id)
VALUES
('Marketing Coordinator', 60000, 1),
('HR Manager', 90000, 2),
('Customer Support Specialist', 50000, 3),
('Research Scientist', 100000, 4);

