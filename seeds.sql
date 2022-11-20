INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUES ("Jim",'Calloway',NULL,1),
       ("Bob",'Dabuilder',1,2),
       ("Yara",'Lara',1,4),
       ("Ally",'Whey',1,5);

INSERT INTO department (name)
VALUES ('Engineering'),
       ('Production'),
       ('HR');

INSERT INTO roles (title, salary, department_id)
VALUES ('Engineer', 110000.00, 1),
       ('Assembler I', 20000.00, 2),
       ('Assembler II', 30000.00, 2),
       ('Assembler III', 40000.00, 2),
       ('HR Partner I', 80000.00, 3);

