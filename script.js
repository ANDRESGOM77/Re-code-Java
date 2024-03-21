// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  let employeeList = [];
  let addEmployee = true;

  while (addEmployee) {
    let firstName = prompt("Enter the employee's first name:");
    let lastName = prompt("Enter the employee's last name:");
    let salary = prompt("Enter the employee's salary:");

    // Validate that the fields are not empty and that the salary is a valid number
    while (!firstName || !lastName || isNaN(parseFloat(salary))) {
      alert("Please enter valid values.");
      firstName = prompt("Enter the employee's first name:");
      lastName = prompt("Enter the employee's last name:");
      salary = prompt("Enter the employee's salary:");
    }

    // Create an employee object with the entered data
    let employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary)
    };

    employeeList.push(employee);

    addEmployee = confirm("Do you want to add another employee?");
  }

  return employeeList;
}
// console.log(collectEmployees);

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let promSalary=0;
  for (let i=0; i < employeesArray.length;i++){
    promSalary+=employeesArray[i].salary;
  }
  
  let total = promSalary/employeesArray.length;

  console.log("the average is:", total);
}

displayAverageSalary(collectEmployees);



// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  let alet = Math.floor(Math.random() * employeesArray.length);
  console.log(employeesArray[alet])
}
getRandomEmployee(collectEmployees);

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
