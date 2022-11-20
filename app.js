import mysql from "mysql2";
import inquirer from 'inquirer';

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: '123654',
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
    );
    


 function menu() {
inquirer.prompt([
    {
        type: 'list',
        name: 'menu',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add department', 'Add employee','Add role','Quit'],
    },
]).then(answers => {
    switch (answers.menu) {
        case 'View all departments':
            db.query('SELECT id, name FROM department', function (err, results) {
                console.table(results);
                return menu();
            });
            break;
        case 'View all roles':
            db.query('SELECT * FROM roles', function (err, results) {
                console.table(results);
                return menu();
            });
            break;
        case 'View all employees':
            db.query('SELECT * FROM employees', function (err, results) {
                console.table(results);
                return menu();
              });
            break;
        case 'Add department':
            return addDep();
            break;
        case 'Add employee':
            return addEmp();
            break;
        case 'Add role':
            return addRole();
            break;
        case 'Quit':
            console.log('BYE')
            process.exit(0)
            return;
            break;
    }
    
}); 
};

menu();  
/* INSERTS */

/* ADD DEP */
function addDep(){
inquirer.prompt([
    {
        type: 'input',
        name: 'department',
        message:'Enter the name of a new Department'
    }
]).then(answers => {
        db.query(
            "INSERT INTO department (name) VALUES (?)",
            [answers.department]
        ); 
}).then(menu);
 
};
/* ADD ROLE */

function addRole(){
   
    
    inquirer.prompt([
        
        {
            type: 'input',
            name: 'role',
            message:'Enter the name of a new role'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary for this role?'
        },
        {
            type: 'number',
            name: 'roleDepartment',
            message:'Enter the department id for this role',
        
    
        }
    ]).then(answers => {
            db.query(
                "INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)",
                [answers.role, answers.salary, answers.roleDepartment]
            ); 
    }).then(menu);
};

/* ADD EMPLOYEE */
function addEmp(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'fName',
            message:'Enter the first name of our new employee'
        },
        {
            type: 'input',
            name: 'lName',
            message:'Enter the last name of our new employee'
        },
        {
            type: "number",
            name: "roleId",
            message: "Please enter their role id"
        },
        {
            type: "number",
            name: "mgrId",
            message:"Please enter their manager's id"
        }
    ]).then(answers => {
            db.query(
                "INSERT INTO employees (first_name, last_name, manager_id, role_id) VALUES (?,?,?,?)",
                [answers.fName, answers.lName, answers.mgrId, answers.roleId]
            )
    }).then(menu);
     

};
/* UPDATE EMPLOYEE ROLE */
/* function updateRole(){
    inquirer.prompt([
        {
            
        }
    ]).then(answers => {
            db.query(
               
    }).then();
     
};
 */

