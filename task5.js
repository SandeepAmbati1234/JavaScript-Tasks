
// TASK 1: Student Management System


let students = [
    { id: 1, name: "Arjun", department: "CSE", mark: 92 },
    { id: 2, name: "Priya", department: "ECE", mark: 78 },
    { id: 3, name: "Rahul", department: "MECH", mark: 55 },
    { id: 4, name: "Sneha", department: "IT", mark: 45 },
    { id: 5, name: "Karthik", department: "EEE", mark: 85 }
];

// Display all student names
console.log(" TASK 1: Student Management System ");
console.log("All Student Names:");
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}

// Calculate total marks
let totalMarks = 0;
for (let i = 0; i < students.length; i++) {
    totalMarks += students[i].mark;
}
console.log("Total Marks:", totalMarks);

// Students who scored above 80
console.log("Students scored above 80:");
for (let i = 0; i < students.length; i++) {
    if (students[i].mark > 80) {
        console.log(students[i].name, "-", students[i].mark);
    }
}

// Grade display
function getGrade(mark) {
    if (mark >= 90) return "A";
    else if (mark >= 75) return "B";
    else if (mark >= 50) return "C";
    else return "Fail";
}

// Print student details function
function printStudentDetails(student) {
    console.log("ID:", student.id, "| Name:", student.name, "| Dept:", student.department, "| Mark:", student.mark, "| Grade:", getGrade(student.mark));
}

console.log("All Student Details:");
for (let i = 0; i < students.length; i++) {
    printStudentDetails(students[i]);
}



// TASK 2: Employee Payroll System


let employees = [
    { id: 1, name: "Vikram", salary: 45000, department: "HR" },
    { id: 2, name: "Divya", salary: 28000, department: "IT" },
    { id: 3, name: "Suresh", salary: 60000, department: "Finance" },
    { id: 4, name: "Meera", salary: 22000, department: "Marketing" },
    { id: 5, name: "Arun", salary: 35000, department: "Operations" }
];

console.log(" TASK 2: Employee Payroll System ");

// Print all employee names
console.log("All Employee Names:");
for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].name);
}

// Total company salary expense
let totalSalary = 0;
for (let i = 0; i < employees.length; i++) {
    totalSalary += employees[i].salary;
}
console.log("Total Salary Expense: ₹" + totalSalary);

// Employees earning above ₹30,000
console.log("Employees earning above ₹30,000:");
for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary > 30000) {
        console.log(employees[i].name, "-", "₹" + employees[i].salary);
    }
}

// Switch for department descriptions
function getDepartmentDesc(dept) {
    switch (dept) {
        case "HR": return "Handles recruitment and employee relations";
        case "IT": return "Manages technology and software systems";
        case "Finance": return "Controls budgets and financial reports";
        case "Marketing": return "Drives brand and product promotion";
        case "Operations": return "Oversees day-to-day business operations";
        default: return "Unknown department";
    }
}

// Callback function for payroll report
function generatePayrollReport(employee, callback) {
    console.log("--- Payroll Report ---");
    console.log("Name:", employee.name);
    console.log("Salary: ₹" + employee.salary);
    console.log("Department:", employee.department, "-", getDepartmentDesc(employee.department));
    callback(employee);
}

function payrollConfirmation(employee) {
    console.log("Salary of ₹" + employee.salary + " processed for " + employee.name);
}

generatePayrollReport(employees[0], payrollConfirmation);



// TASK 3: Online Food Order System


let foodItems = [
    { id: 1, foodName: "Paneer Butter Masala", price: 250, category: "Main Course" },
    { id: 2, foodName: "Veg Fried Rice", price: 180, category: "Rice" },
    { id: 3, foodName: "Masala Dosa", price: 120, category: "Breakfast" },
    { id: 4, foodName: "Chocolate Brownie", price: 220, category: "Dessert" },
    { id: 5, foodName: "Fresh Lime Soda", price: 80, category: "Beverages" }
];

console.log(" TASK 3: Online Food Order System ");

// Display all food names
console.log("All Food Names:");
for (let i = 0; i < foodItems.length; i++) {
    console.log(foodItems[i].foodName);
}

// Total menu value
let totalMenuValue = 0;
for (let i = 0; i < foodItems.length; i++) {
    totalMenuValue += foodItems[i].price;
}
console.log("Total Menu Value: ₹" + totalMenuValue);

// Foods above ₹200
console.log("Foods above ₹200:");
for (let i = 0; i < foodItems.length; i++) {
    if (foodItems[i].price > 200) {
        console.log(foodItems[i].foodName, "- ₹" + foodItems[i].price);
    }
}

// Switch for category descriptions
function getCategoryDesc(category) {
    switch (category) {
        case "Main Course": return "Rich and filling main dishes";
        case "Rice": return "Flavoured rice varieties";
        case "Breakfast": return "Morning starter dishes";
        case "Dessert": return "Sweet treats to end your meal";
        case "Beverages": return "Refreshing drinks";
        default: return "Uncategorised item";
    }
}

// Order confirmation callback
function placeOrder(item, callback) {
    console.log("Placing order for:", item.foodName);
    callback(item);
}

function orderConfirmation(item) {
    console.log(" Order Confirmed! " + item.foodName + " (₹" + item.price + ") | " + getCategoryDesc(item.category));
}

placeOrder(foodItems[0], orderConfirmation);



// TASK 4: Movie Ticket Booking System


let movies = [
    { movieName: "KGF Chapter 3", ticketPrice: 250, availableSeats: 40, language: "Kannada" },
    { movieName: "Theri 2", ticketPrice: 200, availableSeats: 0, language: "Tamil" },
    { movieName: "Pushpa 3", ticketPrice: 300, availableSeats: 15, language: "Telugu" },
    { movieName: "Jawan 2", ticketPrice: 350, availableSeats: 5, language: "Hindi" },
    { movieName: "RRR Returns", ticketPrice: 280, availableSeats: 22, language: "Telugu" }
];

console.log(" TASK 4: Movie Ticket Booking System ");

// Display all movie names
console.log("All Movies:");
for (let i = 0; i < movies.length; i++) {
    console.log(movies[i].movieName);
}

// Total available seats
let totalSeats = 0;
for (let i = 0; i < movies.length; i++) {
    totalSeats += movies[i].availableSeats;
}
console.log("Total Available Seats:", totalSeats);

// Check booking possibility
console.log("Booking Availability:");
for (let i = 0; i < movies.length; i++) {
    if (movies[i].availableSeats > 0) {
        console.log(movies[i].movieName, "- Booking Available (" + movies[i].availableSeats + " seats left)");
    } else {
        console.log(movies[i].movieName, "- Housefull! Booking Not Available");
    }
}

// Switch for movie language
function getLanguageInfo(language) {
    switch (language) {
        case "Tamil": return "South Indian Tamil language film";
        case "Telugu": return "South Indian Telugu language film";
        case "Hindi": return "Bollywood Hindi language film";
        case "Kannada": return "South Indian Kannada language film";
        case "English": return "Hollywood English language film";
        default: return "Regional language film";
    }
}

// Booking confirmation callback
function bookTicket(movie, seats, callback) {
    if (movie.availableSeats >= seats) {
        callback(movie, seats, true);
    } else {
        callback(movie, seats, false);
    }
}

function bookingConfirmation(movie, seats, success) {
    if (success) {
        console.log(" Booking Confirmed! Movie:", movie.movieName, "| Seats:", seats, "| Total: ₹" + (movie.ticketPrice * seats));
        console.log("Language Info:", getLanguageInfo(movie.language));
    } else {
        console.log(" Booking Failed for", movie.movieName, "- Not enough seats.");
    }
}

bookTicket(movies[0], 2, bookingConfirmation);
bookTicket(movies[1], 2, bookingConfirmation);



// TASK 5: Hospital Patient Records


let patients = [
    { patientId: 1, patientName: "Murugan", age: 65, disease: "Cardiology" },
    { patientId: 2, patientName: "Lakshmi", age: 45, disease: "Orthopedics" },
    { patientId: 3, patientName: "Rajan", age: 72, disease: "Neurology" },
    { patientId: 4, patientName: "Anitha", age: 35, disease: "Dermatology" },
    { patientId: 5, patientName: "Selvam", age: 58, disease: "Cardiology" }
];

console.log(" TASK 5: Hospital Patient Records ");

// Display all patient names
console.log("All Patient Names:");
for (let i = 0; i < patients.length; i++) {
    console.log(patients[i].patientName);
}

// Total patient count
console.log("Total Patients:", patients.length);

// Patients above age 60
console.log("Patients above age 60:");
for (let i = 0; i < patients.length; i++) {
    if (patients[i].age > 60) {
        console.log(patients[i].patientName, "- Age:", patients[i].age);
    }
}

// Switch for disease departments
function getDepartmentInfo(disease) {
    switch (disease) {
        case "Cardiology": return "Heart and cardiovascular care";
        case "Orthopedics": return "Bone, joint and muscle treatment";
        case "Neurology": return "Brain and nervous system care";
        case "Dermatology": return "Skin and hair treatment";
        case "Pediatrics": return "Children's health care";
        default: return "General medicine";
    }
}

// Appointment confirmation callback
function scheduleAppointment(patient, callback) {
    console.log("Scheduling appointment for:", patient.patientName);
    callback(patient);
}

function appointmentConfirmation(patient) {
    console.log(" Appointment Confirmed! Patient:", patient.patientName, "| Age:", patient.age, "| Department:", patient.disease, "-", getDepartmentInfo(patient.disease));
}

scheduleAppointment(patients[0], appointmentConfirmation);
scheduleAppointment(patients[2], appointmentConfirmation);



// TASK 6: Library Management System


let books = [
    { bookId: 1, bookName: "Clean Code", author: "Robert C. Martin", price: 650, category: "Programming" },
    { bookId: 2, bookName: "The Alchemist", author: "Paulo Coelho", price: 350, category: "Fiction" },
    { bookId: 3, bookName: "Wings of Fire", author: "A.P.J. Abdul Kalam", price: 290, category: "Biography" },
    { bookId: 4, bookName: "JavaScript Ninja", author: "John Resig", price: 720, category: "Programming" },
    { bookId: 5, bookName: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: 420, category: "Finance" }
];

console.log(" TASK 6: Library Management System ");

// Display all book names
console.log("All Book Names:");
for (let i = 0; i < books.length; i++) {
    console.log(books[i].bookName, "by", books[i].author);
}

// Total book value
let totalBookValue = 0;
for (let i = 0; i < books.length; i++) {
    totalBookValue += books[i].price;
}
console.log("Total Library Value: ₹" + totalBookValue);

// Books above ₹500
console.log("Books above ₹500:");
for (let i = 0; i < books.length; i++) {
    if (books[i].price > 500) {
        console.log(books[i].bookName, "- ₹" + books[i].price);
    }
}

// Switch for book categories
function getBookCategoryDesc(category) {
    switch (category) {
        case "Programming": return "Software and coding books";
        case "Fiction": return "Imaginative story-based novels";
        case "Biography": return "Real-life inspiring stories";
        case "Finance": return "Money, investing and wealth books";
        case "Science": return "Scientific discovery and research";
        default: return "General knowledge books";
    }
}

// Issue a book function
function issueBook(book, memberName) {
    console.log(" Book Issued!");
    console.log("Book:", book.bookName, "| Author:", book.author);
    console.log("Issued To:", memberName);
    console.log("Category:", book.category, "-", getBookCategoryDesc(book.category));
    console.log("Return within 14 days. Fine: ₹5/day after due date.");
}

issueBook(books[0], "Naveen Kumar");



// TASK 7: E-Commerce Product Dashboard


let products = [
    { productId: 1, productName: "Laptop", price: 55000, stock: 8 },
    { productId: 2, productName: "Wireless Mouse", price: 1200, stock: 45 },
    { productId: 3, productName: "USB Hub", price: 800, stock: 3 },
    { productId: 4, productName: "Keyboard", price: 2500, stock: 12 },
    { productId: 5, productName: "Monitor", price: 18000, stock: 6 }
];

console.log(" TASK 7: E-Commerce Product Dashboard ");

// Display all products
console.log("All Products:");
for (let i = 0; i < products.length; i++) {
    console.log("ID:", products[i].productId, "| Name:", products[i].productName, "| Price: ₹" + products[i].price, "| Stock:", products[i].stock);
}

// Total inventory value
let inventoryValue = 0;
for (let i = 0; i < products.length; i++) {
    inventoryValue += products[i].price * products[i].stock;
}
console.log("Total Inventory Value: ₹" + inventoryValue);

// Products with stock less than 10
console.log("Low Stock Products (less than 10):");
for (let i = 0; i < products.length; i++) {
    if (products[i].stock < 10) {
        console.log(products[i].productName, "- Stock:", products[i].stock);
    }
}

// Stock status
function getStockStatus(stock) {
    if (stock === 0) return "Out of Stock";
    else if (stock < 10) return "Low Stock";
    else if (stock < 30) return "In Stock";
    else return "High Stock";
}

// Product report callback
function generateProductReport(product, callback) {
    let status = getStockStatus(product.stock);
    callback(product, status);
}

function productReportPrinter(product, status) {
    console.log(" Product Report | Name:", product.productName, "| Price: ₹" + product.price, "| Stock:", product.stock, "| Status:", status);
}

console.log("Product Reports:");
for (let i = 0; i < products.length; i++) {
    generateProductReport(products[i], productReportPrinter);
}



// TASK 8: College Admission System


let applicants = [
    { name: "Harini", age: 19, percentage: 85, department: "CSE" },
    { name: "Dinesh", age: 17, percentage: 72, department: "ECE" },
    { name: "Pavithra", age: 20, percentage: 55, department: "Mech" },
    { name: "Surya", age: 18, percentage: 45, department: "IT" },
    { name: "Keerthi", age: 21, percentage: 92, department: "EEE" }
];

console.log(" TASK 8: College Admission System ");

// Display applicant names
console.log("All Applicants:");
for (let i = 0; i < applicants.length; i++) {
    console.log(applicants[i].name);
}

// Check eligibility
function checkEligibility(applicant) {
    return applicant.age >= 18 && applicant.percentage >= 60;
}

// Count eligible students
let eligibleCount = 0;
for (let i = 0; i < applicants.length; i++) {
    if (checkEligibility(applicants[i])) {
        eligibleCount++;
    }
}
console.log("Total Eligible Students:", eligibleCount);

// Switch for department names
function getDeptFullName(dept) {
    switch (dept) {
        case "CSE": return "Computer Science and Engineering";
        case "ECE": return "Electronics and Communication Engineering";
        case "Mech": return "Mechanical Engineering";
        case "IT": return "Information Technology";
        case "EEE": return "Electrical and Electronics Engineering";
        default: return "Unknown Department";
    }
}

// Admission result callback
function processAdmission(applicant, callback) {
    let eligible = checkEligibility(applicant);
    callback(applicant, eligible);
}

function admissionResult(applicant, eligible) {
    if (eligible) {
        console.log(" ADMITTED - " + applicant.name + " | Dept: " + getDeptFullName(applicant.department) + " | Age: " + applicant.age + " | %: " + applicant.percentage);
    } else {
        let reason = "";
        if (applicant.age < 18) reason += "Age below 18. ";
        if (applicant.percentage < 60) reason += "Percentage below 60%.";
        console.log(" NOT ADMITTED - " + applicant.name + " | Reason: " + reason);
    }
}

console.log("Admission Results:");
for (let i = 0; i < applicants.length; i++) {
    processAdmission(applicants[i], admissionResult);
}



// TASK 9: Bus Reservation System


let passengers = [
    { passengerId: 1, name: "Balamurugan", seatNumber: 5, ticketPrice: 450, busType: "AC Sleeper" },
    { passengerId: 2, name: "Saranya", seatNumber: 12, ticketPrice: 300, busType: "Non-AC" },
    { passengerId: 3, name: "Gopal", seatNumber: 8, ticketPrice: 600, busType: "Volvo" },
    { passengerId: 4, name: "Nithya", seatNumber: 3, ticketPrice: 450, busType: "AC Sleeper" },
    { passengerId: 5, name: "Manoj", seatNumber: 20, ticketPrice: 750, busType: "Luxury" }
];

console.log(" TASK 9: Bus Reservation System ");

// Display passenger names
console.log("All Passengers:");
for (let i = 0; i < passengers.length; i++) {
    console.log(passengers[i].name);
}

// Total collection
let totalCollection = 0;
for (let i = 0; i < passengers.length; i++) {
    totalCollection += passengers[i].ticketPrice;
}
console.log("Total Ticket Collection: ₹" + totalCollection);

// Check occupied seats
let occupiedSeats = [];
for (let i = 0; i < passengers.length; i++) {
    occupiedSeats[i] = passengers[i].seatNumber;
}
console.log("Occupied Seats:", occupiedSeats.toString());

// Switch for bus types
function getBusTypeDesc(busType) {
    switch (busType) {
        case "AC Sleeper": return "Air-conditioned sleeper berths for overnight travel";
        case "Non-AC": return "Standard seating without air conditioning";
        case "Volvo": return "Premium semi-sleeper with air conditioning";
        case "Luxury": return "Top-tier bus with recliner seats and entertainment";
        case "Mini Bus": return "Compact bus for short distances";
        default: return "Standard bus";
    }
}

// Ticket confirmation callback
function reserveSeat(passenger, callback) {
    callback(passenger);
}

function ticketConfirmation(passenger) {
    console.log(" Ticket Confirmed! Passenger:", passenger.name, "| Seat:", passenger.seatNumber, "| Fare: ₹" + passenger.ticketPrice, "| Bus:", passenger.busType, "-", getBusTypeDesc(passenger.busType));
}

console.log("Ticket Confirmations:");
for (let i = 0; i < passengers.length; i++) {
    reserveSeat(passengers[i], ticketConfirmation);
}



// TASK 10: Mobile Store Management


let mobiles = [
    { brand: "Samsung", model: "Galaxy S24", price: 75000, stock: 10 },
    { brand: "Apple", model: "iPhone 16", price: 90000, stock: 5 },
    { brand: "Realme", model: "Realme 12 Pro", price: 18000, stock: 30 },
    { brand: "OnePlus", model: "OnePlus 13", price: 55000, stock: 8 },
    { brand: "Xiaomi", model: "Redmi Note 14", price: 14000, stock: 50 }
];

console.log(" TASK 10: Mobile Store Management ");

// Display all mobile names
console.log("All Mobiles:");
for (let i = 0; i < mobiles.length; i++) {
    console.log(mobiles[i].brand, mobiles[i].model);
}

// Total stock value
let totalStockValue = 0;
for (let i = 0; i < mobiles.length; i++) {
    totalStockValue += mobiles[i].price * mobiles[i].stock;
}
console.log("Total Stock Value: ₹" + totalStockValue);

// Mobiles above ₹20,000
console.log("Mobiles above ₹20,000:");
for (let i = 0; i < mobiles.length; i++) {
    if (mobiles[i].price > 20000) {
        console.log(mobiles[i].brand, mobiles[i].model, "- ₹" + mobiles[i].price);
    }
}

// Switch for brand category
function getBrandCategory(brand) {
    switch (brand) {
        case "Apple": return "Premium flagship brand";
        case "Samsung": return "Global leader in Android smartphones";
        case "OnePlus": return "Performance-focused premium brand";
        case "Realme": return "Budget to mid-range value brand";
        case "Xiaomi": return "Affordable feature-rich brand";
        default: return "Other brand";
    }
}

// Sales report callback
function generateSalesReport(mobile, callback) {
    callback(mobile);
}

function salesReportPrinter(mobile) {
    console.log(" Sales Report | Brand:", mobile.brand, "| Model:", mobile.model, "| Price: ₹" + mobile.price, "| Stock:", mobile.stock, "| Category:", getBrandCategory(mobile.brand));
}

console.log("Mobile Sales Reports:");
for (let i = 0; i < mobiles.length; i++) {
    generateSalesReport(mobiles[i], salesReportPrinter);
}