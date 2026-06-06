
//Task 1: Student Result Checker

let marks = 75;

marks >= 35
    ? console.log("Pass")
    : console.log("Fail");

marks >= 90
    ? console.log("Grade A")
    : marks >= 75
        ? console.log("Grade B")
        : marks >= 60
            ? console.log("Grade C")
            : console.log("No Grade");


//Task 2: Employee Bonus Calculator
let salary = 25000;

let bonus = salary * 10 / 100;

salary += bonus;

console.log("Original Salary :", 25000);
console.log("Bonus :", bonus);
console.log("Final Salary :", salary);


//Task 3: User Login Validation

let email = "admin@gmail.com";
let password = "12345";

(email === "admin@gmail.com" && password === "12345")
    ? console.log("Login Success")
    : console.log("Login Failed");


//Task 4: Product Discount Calculator
let price = 2000;

let finalAmount =
    price > 1000
        ? price - (price * 20 / 100)
        : price;

console.log("Final Amount :", finalAmount);


//Task 5: Array Product Management
let products = ["Laptop", "Mobile", "Mouse", "Keyboard"];

console.log("First Product :", products[0]);

console.log("Last Product :",
    products[products.length - 1]);

console.log("Total Products :",
    products.length);

//Task 6: Employee Object

let employee = {
    name: "Naveen",
    department: "Development",
    salary: 30000
};

console.log(employee);

console.log("Employee Name :",
    employee.name);

console.log("Salary :",
    employee.salary);

//Task 7: E-Commerce Cart Total

let shirt = 500;
let pant = 1000;
let shoe = 1500;

let total = shirt + pant + shoe;

let discount = total * 10 / 100;

let finalBill = total - discount;

console.log("Total Bill :", total);
console.log("Discount :", discount);
console.log("Final Amount :", finalBill);


//Task 8: Age Eligibility Checker
let age = 19;

age >= 18
    ? console.log("Eligible for Voting")
    : console.log("Not Eligible");


//Task 9: Increment Decrement Practice
let a = 10;

a++;
console.log("After a++ :", a);

++a;
console.log("After ++a :", a);

a--;
console.log("After a-- :", a);

--a;
console.log("After --a :", a);


//Task 10: Mini Employee Attendance System

let isPresent = true;
let completedTask = true;

(isPresent && completedTask)
    ? console.log("Eligible for Salary")
    : console.log("Not Eligible");


//Bonus Company-Level Task

let employees = {
    id: 101,
    name: "John",
    department: "Development",
    salary: 35000,
    experience: 2
};

console.log("Employee ID :", employees.id);
console.log("Employee Name :", employees.name);
console.log("Department :", employees.department);
console.log("Salary :", employees.salary);
console.log("Experience :", employees.experience, "Years");

let bonuses = employees.salary * 10 / 100;
let finalSalary = employees.salary + bonuses;

console.log("Bonus :", bonuses);
console.log("Final Salary :", finalSalary);

employees.experience >= 2
    ? console.log("Performance Status : Good")
    : console.log("Performance Status : Average");