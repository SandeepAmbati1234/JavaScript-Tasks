//Task 1: Traffic Signal Management (Switch)
let signal = "Green";

switch (signal) {
    case "Red":
        console.log("Stop");
        break;

    case "Yellow":
        console.log("Get Ready");
        break;

    case "Green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}
//Task 2: Employee Attendance Report (For Loop)
for (let i = 1; i <= 30; i++) {
    console.log(`Employee ${i} Present`);
}
//Task 3: ATM Cash Withdrawal (While Loop)
let balance = 10000;

while (balance > 0) {
    balance -= 500;
    console.log("Remaining Balance:", balance);
}
//Task 4: College Admission Eligibility (Nested If)
let age = 20;
let percentage = 80;
let entranceExam = true;

if (age >= 18) {

    if (percentage >= 70) {

        if (entranceExam) {
            console.log("Admission Approved");
        } else {
            console.log("Rejected: Entrance Exam Not Passed");
        }

    } else {
        console.log("Rejected: Percentage below 70");
    }

} else {
    console.log("Rejected: Age below 18");
}

//Task 5: Food Delivery Status (Function)
function delivery(customerName, foodItem, address) {

    console.log("Customer :", customerName);
    console.log("Food :", foodItem);
    console.log("Address :", address);
    console.log("Order Delivered Successfully");

}

delivery("Sandeep", "Pizza", "Hyderabad");

//Task 6: Salary Processing System (Return Function)
function calculateSalary(basicSalary) {
    return basicSalary;
}

function calculateBonus(salary) {

    let bonus = salary * 0.10;

    return salary + bonus;

}

let salary = calculateSalary(50000);

let totalSalary = calculateBonus(salary);

console.log(totalSalary);
//Task 7: E-commerce Discount Engine (Callback Function)
function generateInvoice(finalAmount) {
    console.log("Invoice Generated");
    console.log("Final Amount:", finalAmount);
}

function applyDiscount(amount, callback) {

    let discount = amount * 0.20;

    let finalAmount = amount - discount;

    callback(finalAmount);

}

applyDiscount(10000, generateInvoice);
//Task 8: Promotional Offers (Generator Function)
function* offers() {

    yield "10% OFF";

    yield "20% OFF";

    yield "Free Delivery";

    yield "Buy 1 Get 1";

}

let offer = offers();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);

// Task 9: Student Database Merge (Spread Operator)

let scienceStudents = [
    "Rahul",
    "Anil",
    "Priya"
];

let commerceStudents = [
    "Ravi",
    "Neha",
    "Kiran"
];

let students = [
    ...scienceStudents,
    ...commerceStudents
];

console.log(students);
// Task 10: Online Exam System (Rest Operator)
function totalMarks(studentName, ...marks) {

    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    console.log(studentName);
    console.log(total);

}

totalMarks("Sandeep", 80, 90, 75, 85, 95);

// Task 11: Employee Profile (Object Destructuring)
let employee = {

    name: "Sandeep",
    department: "IT",
    salary: 50000,
    experience: 2

};

let { name, department, salary: empSalary, experience } = employee;

console.log(name);
console.log(department);
console.log(empSalary);
console.log(experience);

//Task 12: Product Inventory Filter (Filter)
let products = [

    {
        name: "Laptop",
        price: 60000,
        category: "Electronics"
    },

    {
        name: "Mouse",
        price: 800,
        category: "Electronics"
    },

    {
        name: "Phone",
        price: 25000,
        category: "Electronics"
    }

];

let expensive = products.filter((product) => {

    return product.price > 5000;

});

console.log(expensive);
// Task 13: Find First Premium Customer (Find)
let customers = [

    {
        name: "Ravi",
        purchase: 20000
    },

    {
        name: "Priya",
        purchase: 70000
    },

    {
        name: "Anil",
        purchase: 90000
    }

];

let premium = customers.find((customer) => {

    return customer.purchase > 50000;

});

console.log(premium);

//Task 14: Company Expense Tracker (Reduce)
let expenses = [

    10000,
    15000,
    5000,
    25000,
    8000

];

let totalExpense = expenses.reduce((acc, current) => {

    return acc + current;

}, 0);

console.log(totalExpense);
//Task 15: Gaming Tournament Verification (Every)
let players = [

    {
        name: "A",
        age: 20
    },

    {
        name: "B",
        age: 25
    },

    {
        name: "C",
        age: 19
    }

];

let result = players.every((player) => {

    return player.age >= 18;

});

console.log(result);

//Task 16: Job Portal Search (Some)
let candidates = [

    {
        name: "Rahul",
        skill: "Java"
    },

    {
        name: "Ravi",
        skill: "React"
    },

    {
        name: "Priya",
        skill: "Python"
    }

];

let reactDeveloper = candidates.some((candidate) => {

    return candidate.skill === "React";

});

console.log(reactDeveloper);

//Task 17: Mobile Number Validator (String Methods)
let mobile = "9876543210";

if (
    mobile.length === 10 &&
    (
        mobile.startsWith("6") ||
        mobile.startsWith("7") ||
        mobile.startsWith("8") ||
        mobile.startsWith("9")
    )
) {

    console.log("Valid Mobile Number");

} else {

    console.log("Invalid Mobile Number");

}

//Task 18: URL Slug Generator (Split + Join)
let title = "Learn JavaScript Complete Course";

let slug = title
    .toLowerCase()
    .split(" ")
    .join("-");

console.log(slug);

//Task 19: Employee Sorting Dashboard (Sort)
let employees = [

    {
        name: "A",
        salary: 30000
    },

    {
        name: "B",
        salary: 70000
    },

    {
        name: "C",
        salary: 50000
    }

];

// Highest to Lowest

employees.sort((a, b) => {

    return b.salary - a.salary;

});

console.log(employees);

// Lowest to Highest

employees.sort((a, b) => {

    return a.salary - b.salary;

});

console.log(employees);

//Task 20: Movie Booking System (Map)
let movies = [

    "Leo",
    "Pushpa",
    "Kalki",
    "KGF"

];

let bookingIds = movies.map((movie, index) => {

    return {
        movieName: movie,
        bookingId: "BOOK" + (index + 1)
    };

});

console.log(bookingIds);