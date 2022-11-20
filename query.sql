USE employee_db;
SELECT role_id, title, salary, department_id, department.name
FROM role
LEFT JOIN department
ON department.id = role.department_id;