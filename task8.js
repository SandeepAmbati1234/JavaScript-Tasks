//Task 1: Employee Salary Management
let employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kavin", salary: 50000 },
    { id: 3, name: "John", salary: 75000 }
];

let highSalary = employees.filter(emp => emp.salary > 40000);
console.log(highSalary);

let firstHighSalary = employees.find(emp => emp.salary > 60000);
console.log(firstHighSalary);

let totalSalary = employees.reduce((acc, emp) => acc + emp.salary, 0);
console.log(totalSalary);

let names = employees.map(emp => emp.name);
console.log(names);


//Task 2: College Admission Form
function checkAdmission(name, age, percentage) {

    if (age >= 18 && percentage >= 60) {
        return `${name} Admission Approved`;
    }

    return `${name} Admission Rejected`;
}

console.log(checkAdmission("Rahul", 20, 75));

// Task 3: E-Commerce Cart
let cart = [
    { product: "Shoes", price: 2000, qty: 2 },
    { product: "Watch", price: 1500, qty: 1 },
    { product: "Bag", price: 1000, qty: 3 }
];

let totalBill = cart.reduce((acc, item) => {
    return acc + item.price * item.qty;
}, 0);

console.log(totalBill);

let expensive = cart.reduce((max, item) => {
    return item.price > max.price ? item : max;
});

console.log(expensive);

cart.forEach(item => {
    console.log(item.product);
});



//Task 4: Traffic Fine System
let signal = "red";
let violation = true;

switch (signal) {

    case "red":
        console.log("Stop");
        if (violation) {
            console.log("Fine: ₹1000");
        }
        break;

    case "yellow":
        console.log("Wait");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}

// Task 5: Student Result Processing

let students = [
    { name: "A", mark: 95 },
    { name: "B", mark: 45 },
    { name: "C", mark: 80 },
    { name: "D", mark: 30 }
];

let passed = students.filter(student => student.mark >= 50);
console.log(passed);

let failed = students.filter(student => student.mark < 50);
console.log(failed);

let grades = students.map(student => {

    let grade =
        student.mark >= 90 ? "A" :
            student.mark >= 75 ? "B" :
                student.mark >= 50 ? "C" : "Fail";

    return {
        name: student.name,
        grade: grade
    };
});

console.log(grades);


// Task 6: Online Food Delivery
function placeOrder(customerName, ...items) {

    console.log("Customer:", customerName);

    console.log("Items:", items);

    console.log("Item Count:", items.length);
}

placeOrder(
    "Rahul",
    "Pizza",
    "Burger",
    "Cool Drink"
);

//Task 7: Bank Account System


let balance = 5000;

function deposit(amount) {
    balance += amount;
    return balance;
}

function withdraw(amount) {
    balance -= amount;
    return balance;
}

function checkBalance() {
    return balance;
}

console.log(deposit(2000));
console.log(withdraw(1000));
console.log(checkBalance());


// Task 8: Movie Ticket Booking
let bookedSeats = ["A1", "A2", "B3"];

let seat = "A1";

if (bookedSeats.includes(seat)) {
    console.log("Seat Already Booked");
} else {
    bookedSeats.push(seat);
}

for (let seatNo of bookedSeats) {
    console.log(seatNo);
}

// Task 9: User Login Validation
let username = "rahul";
let password = "Rahul@123";
let email = "rahul@gmail.com";

if (
    !username.includes(" ") &&
    password.length >= 8 &&
    email.includes("@")
) {
    console.log("Valid User");
} else {
    console.log("Invalid User");
}


// Task 10: Product API Dashboard

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {

        // Titles
        products.forEach(product => {
            console.log(product.title);
        });

        let costlyProducts =
            products.filter(product => product.price > 1000);

        console.log("costlyProducts",costlyProducts);

        console.log("Total Products:", products.length);
    })
    .catch(error => {
        console.log(error);
    });


//Task 11: Birthday Day Finder

let dob = new Date("2000-05-10");

let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

console.log("Day:", dob.getDate());
console.log("Month:", dob.getMonth() + 1);
console.log("Year:", dob.getFullYear());

console.log(
    "Weekday:",
    weekdays[dob.getDay()]
);

//Task 12: Netflix Subscription System

let plan = "Premium";

let benefits =
    plan === "Mobile"
        ? "1 Mobile Device"
        : plan === "Basic"
            ? "HD Quality"
            : plan === "Standard"
                ? "Full HD + 2 Devices"
                : plan === "Premium"
                    ? "4K + 4 Devices"
                    : "Invalid Plan";

console.log(benefits);
// Task 13: Hospital Patient Management

let patients = [
    { id: 1, name: "Ravi", critical: true },
    { id: 2, name: "John", critical: false },
    { id: 3, name: "Kiran", critical: true }
];
let criticalPatients =
    patients.filter(patient => patient.critical);

console.log(criticalPatients);

let patient =
    patients.find(patient => patient.id === 2);

console.log(patient);

console.log("Total Patients:", patients.length);


// Task 14: Inventory Management System
let inventory1 = [
    { id: 1, product: "Laptop" }
];

let inventory2 = [
    { id: 2, product: "Mouse" }
];

let inventory = [
    ...inventory1,
    ...inventory2
];

console.log(inventory);

let { id, product } = inventory[0];

console.log(id);
console.log(product);

let updatedInventory = [
    ...inventory,
    { id: 3, product: "Keyboard" }
];

console.log(updatedInventory);

// Task 15: WhatsApp Group Management

let group = [
    "Rahul",
    "John",
    "Kiran"
];

group.push("David");

group.pop();

group.shift();

group.unshift("Admin");

group.splice(2, 0, "New Member");

console.log(group);