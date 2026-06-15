
// TASK 1: Employee Bonus Calculator


console.log(" TASK 1: Employee Bonus Calculator ");

let employees = [
    { name: "Rahul", salary: 30000, experience: 7 },
    { name: "Priya", salary: 25000, experience: 3 },
    { name: "Karthik", salary: 20000, experience: 1 }
];

function calculateBonus(employee) {
    let bonusPercent = 0;
    let bonusLabel = "";

    if (employee.experience >= 5) {
        bonusPercent = 20;
        bonusLabel = "Senior (5+ yrs)";
    } else if (employee.experience >= 2) {
        bonusPercent = 10;
        bonusLabel = "Mid-level (2+ yrs)";
    } else {
        bonusPercent = 5;
        bonusLabel = "Fresher (<2 yrs)";
    }

    let bonusAmount = (employee.salary * bonusPercent) / 100;
    let finalSalary = employee.salary + bonusAmount;


    console.log("Name        :", employee.name);
    console.log("Experience  :", employee.experience, "years  ", bonusLabel);
    console.log("Base Salary : " + employee.salary);
    console.log("Bonus (" + bonusPercent + "%)  : " + bonusAmount);
    console.log("Final Salary: " + finalSalary);
}

for (let emp of employees) {
    calculateBonus(emp);
}



// TASK 2: College Admission System


console.log(" TASK 2: College Admission System ");

let applicants = [
    { name: "Anjali", age: 18, percentage: 75 },
    { name: "Suresh", age: 16, percentage: 80 },
    { name: "Meena", age: 17, percentage: 55 },
    { name: "Arjun", age: 19, percentage: 62 }
];

function checkAdmission(student) {

    console.log("Student    :", student.name);
    console.log("Age        :", student.age);
    console.log("Percentage :", student.percentage + "%");

    if (student.age >= 17) {
        if (student.percentage >= 60) {
            console.log("Result     :  Admission Approved");
        } else {
            console.log("Result     :  Admission Rejected (Percentage below 60%)");
        }
    } else {
        console.log("Result     :  Admission Rejected (Age below 17)");
    }
}

for (let applicant of applicants) {
    checkAdmission(applicant);
}



// TASK 3: Food Delivery Menu


console.log(" TASK 3: Food Delivery Menu ");

function placeFood(choice) {
    let item = "";

    switch (choice) {
        case 1: item = "Pizza"; break;
        case 2: item = "Burger"; break;
        case 3: item = "Shawarma"; break;
        case 4: item = "Fried Rice"; break;
        default: item = null;
    }

    if (item) {
        console.log("Order Confirmed :", item);
    } else {
        console.log("Invalid Selection. Please choose 1 to 4.");
    }
}

console.log("Menu: 1-Pizza | 2-Burger | 3-Shawarma | 4-Fried Rice");
placeFood(1);
placeFood(3);
placeFood(5);



// TASK 4: Attendance Tracker


console.log(" TASK 4: Attendance Tracker ");

let studentNames = [
    "Naveen", "Divya", "Arun", "Sneha", "Gopal",
    "Keerthi", "Surya", "Lavanya", "Manoj", "Harini"
];

console.log("All Students:");
for (let student of studentNames) {
    console.log(" -", student);
}

console.log("Total Students:", studentNames.length);



// TASK 5: E-Commerce Cart


console.log(" TASK 5: E-Commerce Cart ");

let cart = [
    { product: "Mobile", price: 15000 },
    { product: "Headset", price: 2000 },
    { product: "Charger", price: 1000 }
];

// Print all products
console.log("Cart Items:");
for (let item of cart) {
    console.log(" -", item.product, ": " + item.price);
}

// Total cart value
let cartTotal = 0;
for (let item of cart) {
    cartTotal += item.price;
}
console.log("Total Cart Value: " + cartTotal);

// Most expensive product
let mostExpensive = cart[0];
for (let i = 1; i < cart.length; i++) {
    if (cart[i].price > mostExpensive.price) {
        mostExpensive = cart[i];
    }
}
console.log("Most Expensive Product:", mostExpensive.product, ">" + mostExpensive.price);



// TASK 6: Bank Account Management


console.log(" TASK 6: Bank Account Management ");

let balance = 10000;

function deposit(amount) {
    if (amount <= 0) {
        console.log("Invalid deposit amount.");
        return;
    }
    balance += amount;
    console.log("Deposited " + amount + " | New Balance: " + balance);
}

function withdraw(amount) {
    if (amount <= 0) {
        console.log("Invalid withdrawal amount.");
    } else if (amount > balance) {
        console.log("Insufficient funds! Available: " + balance);
    } else {
        balance -= amount;
        console.log("Withdrawn " + amount + " | Remaining Balance: " + balance);
    }
}

function checkBalance() {
    console.log("Current Balance: " + balance);
}

checkBalance();
deposit(5000);
withdraw(3000);
withdraw(20000);
checkBalance();



// TASK 7: Movie Ticket Booking


console.log(" TASK 7: Movie Ticket Booking ");

function getTicketPrice(age) {
    let price = 0;
    let category = "";

    if (age < 5) {
        price = 0;
        category = "Child (< 5)";
    } else if (age <= 18) {
        price = 100;
        category = "Student (5–18)";
    } else if (age <= 60) {
        price = 200;
        category = "Adult (18–60)";
    } else {
        price = 120;
        category = "Senior (> 60)";
    }

    if (price === 0) {
        console.log("Age:", age, "| Category:", category, "| Ticket: FREE ");
    } else {
        console.log("Age:", age, "| Category:", category, "| Ticket Price: " + price);
    }
}

getTicketPrice(3);
getTicketPrice(15);
getTicketPrice(30);
getTicketPrice(65);



// TASK 8: Online Shopping Discount


console.log(" TASK 8: Online Shopping Discount ");

function applyDiscount(purchaseAmount) {
    let discountPercent = 0;

    if (purchaseAmount > 5000) {
        discountPercent = 20;
    } else if (purchaseAmount > 3000) {
        discountPercent = 10;
    } else if (purchaseAmount > 1000) {
        discountPercent = 5;
    }

    let discountAmount = (purchaseAmount * discountPercent) / 100;
    let finalAmount = purchaseAmount - discountAmount;


    console.log("Original Amount : " + purchaseAmount);
    console.log("Discount (" + discountPercent + "%)   : " + discountAmount);
    console.log("Final Amount    : " + finalAmount);
}

applyDiscount(6000);
applyDiscount(3500);
applyDiscount(1500);
applyDiscount(800);



// TASK 9: Food Inventory System


console.log(" TASK 9: Food Inventory System ");

let inventory = ["Rice", "Oil", "Sugar", "Milk", "Egg"];
console.log("Initial Inventory:", inventory);

// Add 2 items
inventory.push("Wheat");
inventory.push("Butter");
console.log("After Adding 2 items:", inventory);

// Remove first item
let removedFirst = inventory.shift();
console.log("Removed First Item:", removedFirst);

// Remove last item
let removedLast = inventory.pop();
console.log("Removed Last Item:", removedLast);

// Check whether "Milk" exists
let milkIndex = inventory.indexOf("Milk");
if (milkIndex !== -1) {
    console.log('"Milk" exists in inventory at index', milkIndex);
} else {
    console.log('"Milk" does NOT exist in inventory');
}

console.log("Final Inventory:", inventory);



// TASK 10: Hospital Patient Management


console.log(" TASK 10: Hospital Patient Management ");

let patient = {
    patientName: "Murugan",
    age: 68,
    disease: "Hypertension",
    doctor: "Dr. Senthil Kumar"
};

// Display all details using for-in loop
console.log("Patient Details (for-in loop):");
for (let key in patient) {
    console.log(" ", key, ":", patient[key]);
}

// Destructuring to extract values
let { patientName, age, disease, doctor } = patient;

console.log("Destructured Values:");
console.log("Patient Name :", patientName);
console.log("Age          :", age);
console.log("Disease      :", disease);
console.log("Doctor       :", doctor);



// TASK 11: Amazon Order Tracker


console.log(" TASK 11: Amazon Order Tracker ");

function sendSMS(orderDetails) {
    console.log("SMS Sent To Customer");
    console.log("  > Hi " + orderDetails.customer + "! Your order for '" + orderDetails.product + "' has been placed. Estimated delivery: 3-5 days.");
}

function placeOrder(orderDetails, callback) {
    console.log("Order Placed Successfully");
    console.log("  > Product :", orderDetails.product);
    console.log("  > Amount  : " + orderDetails.amount);
    callback(orderDetails);
}

let order = { customer: "Naveen", product: "Wireless Headset", amount: 2500 };
placeOrder(order, sendSMS);



// TASK 12: Cashback Offer Generator


console.log(" TASK 12: Cashback Offer Generator ");

function* cashbackOffers() {
    yield " 10% Cashback";
    yield " 20% Cashback";
    yield " Free Delivery";
    yield " Buy 1 Get 1";
}

let offers = cashbackOffers();

console.log("Offer 1:", offers.next().value);
console.log("Offer 2:", offers.next().value);
console.log("Offer 3:", offers.next().value);
console.log("Offer 4:", offers.next().value);

let checkDone = offers.next();
if (checkDone.done) {
    console.log("No more offers available.");
}



// TASK 13: Employee Database


console.log(" TASK 13: Employee Database ");

let empDatabase = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kavin", salary: 30000 },
    { id: 3, name: "John", salary: 40000 }
];

// Print all employee names
console.log("All Employees:");
for (let emp of empDatabase) {
    console.log(" -", emp.name);
}

// Total salary expense
let totalExpense = 0;
for (let emp of empDatabase) {
    totalExpense += emp.salary;
}
console.log("Total Salary Expense: " + totalExpense);

// Highest salary employee
let topEarner = empDatabase[0];
for (let i = 1; i < empDatabase.length; i++) {
    if (empDatabase[i].salary > topEarner.salary) {
        topEarner = empDatabase[i];
    }
}
console.log("Highest Salary Employee:", topEarner.name, "> " + topEarner.salary);



// TASK 14: Railway Reservation System


console.log(" TASK 14: Railway Reservation System ");

let totalSeats = 50;
let availableSeats = 50;
let bookedPassengers = [];

function bookSeat(passengerName, seatsRequested) {

    console.log("Passenger     :", passengerName);
    console.log("Seats Requested:", seatsRequested);

    if (seatsRequested <= 0) {
        console.log("Status: Invalid seat count.");
        return;
    }

    if (seatsRequested <= availableSeats) {
        availableSeats -= seatsRequested;
        bookedPassengers.push({ name: passengerName, seats: seatsRequested });
        console.log("Status: Booking Confirmed!");
        console.log("Remaining Seats:", availableSeats + "/" + totalSeats);
    } else {
        console.log("Status: Booking Rejected — Only", availableSeats, "seat(s) left.");
    }
}

bookSeat("Arjun", 2);
bookSeat("Priya", 10);
bookSeat("Rajan", 40);
bookSeat("Meena", 1);

console.log("All Bookings:");
for (let b of bookedPassengers) {
    console.log(" -", b.name, ">", b.seats, "seat(s)");
}



// TASK 15: Mobile Store Billing System


console.log(" TASK 15: Mobile Store Billing System ");

let storeProducts = {
    Mobile: 15000,
    Laptop: 55000,
    Headphone: 2000,
    Smartwatch: 8000
};

// Display available products
console.log("Available Products:");
for (let product in storeProducts) {
    console.log(" -", product, ": " + storeProducts[product]);
}

// Customer's selected products
let selectedProducts = ["Mobile", "Headphone", "Smartwatch"];

let totalAmount = 0;
console.log("\nSelected Products:");
for (let item of selectedProducts) {
    if (storeProducts[item] !== undefined) {
        console.log(" -", item, ": " + storeProducts[item]);
        totalAmount += storeProducts[item];
    } else {
        console.log(" -", item, ": Not found in store.");
    }
}

let gstRate = 18;
let gstAmount = (totalAmount * gstRate) / 100;
let finalBill = totalAmount + gstAmount;

console.log("---------------------------");
console.log("Total Amount : " + totalAmount);
console.log("GST (18%)    : " + gstAmount);
console.log("Final Bill   : " + finalBill);
console.log("Thank you for shopping with us! ");