
// Task 1: Age Category Finder


let age = 25;

if (age >= 0 && age <= 12) {
    console.log("Child");
}
else if (age <= 19) {
    console.log("Teenager");
}
else if (age <= 59) {
    console.log("Adult");
}
else {
    console.log("Senior Citizen");
}



// Task 2: Salary Hike Calculator


let salary = 30000;
let hike = 0;

if (salary < 20000) {
    hike = salary * 20 / 100;
}
else if (salary <= 50000) {
    hike = salary * 10 / 100;
}
else {
    hike = salary * 5 / 100;
}

console.log("Old Salary :", salary);
console.log("New Salary :", salary + hike);



// Task 3: Electricity Department


let units = 150;
let bill;

if (units <= 100) {
    bill = units * 5;
}
else if (units <= 200) {
    bill = units * 7;
}
else {
    bill = units * 10;
}

console.log("Electricity Bill :", bill);



// Task 4: Simple ATM


let balance = 10000;
let withdraw = 3000;

if (withdraw <= balance) {
    balance = balance - withdraw;
    console.log("Withdrawal Successful");
    console.log("Remaining Balance :", balance);
}
else {
    console.log("Insufficient Funds");
}



// Task 5: Login Validation


let username = "admin";
let password = "12345";

if (username === "admin") {
    if (password === "12345") {
        console.log("Login Successful");
    }
    else {
        console.log("Invalid Password");
    }
}
else {
    console.log("Invalid Username");
}



// Task 6: Mobile Recharge Offer


let recharge = 350;

if (recharge >= 499) {
    console.log("Netflix Offer");
}
else if (recharge >= 299) {
    console.log("2GB Extra Data");
}
else {
    console.log("No Offer");
}



// Task 7: Traffic Signal System


let signal = "Green";

switch (signal) {

    case "Red":
        console.log("Stop");
        break;

    case "Yellow":
        console.log("Ready");
        break;

    case "Green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}



// Task 8: Employee Attendance


let workingDays = 30;
let presentDays = 24;

let attendance = (presentDays / workingDays) * 100;

console.log("Attendance :", attendance + "%");

if (attendance >= 75) {
    console.log("Eligible");
}
else {
    console.log("Not Eligible");
}



// Task 9: Bus Ticket Booking


let ticketPrice = 500;
let tickets = 4;

let total = ticketPrice * tickets;
let gst = total * 5 / 100;
let finalAmount = total + gst;

console.log("Total :", total);
console.log("GST :", gst);
console.log("Final Amount :", finalAmount);



// Task 10: Restaurant Bill


let foodCost = 2500;
let discount = 0;

if (foodCost > 2000) {
    discount = foodCost * 10 / 100;
}

let finalBill = foodCost - discount;

console.log("Final Bill :", finalBill);



// Task 11: Police Recruitment


let candidateAge = 22;
let height = 165;
let weight = 60;

if (candidateAge >= 18) {

    if (height >= 160) {

        if (weight >= 55) {
            console.log("Selected");
        }
        else {
            console.log("Rejected : Weight is less");
        }

    }
    else {
        console.log("Rejected : Height is less");
    }

}
else {
    console.log("Rejected : Age is less");
}



// Task 12: Student Result


let s1 = 80;
let s2 = 90;
let s3 = 75;
let s4 = 85;
let s5 = 70;

let totalMarks = s1 + s2 + s3 + s4 + s5;
let percentage = totalMarks / 5;

console.log("Total :", totalMarks);
console.log("Percentage :", percentage);

if (percentage >= 90) {
    console.log("Grade A+");
}
else if (percentage >= 80) {
    console.log("Grade A");
}
else if (percentage >= 70) {
    console.log("Grade B");
}
else if (percentage >= 60) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}



// Task 13: Employee Shift Finder


let time = 15;

if (time >= 6 && time < 14) {
    console.log("Morning Shift");
}
else if (time >= 14 && time < 22) {
    console.log("Afternoon Shift");
}
else {
    console.log("Night Shift");
}



// Task 14: Loan Eligibility


let loanAge = 25;
let loanSalary = 30000;
let experience = 3;

if (loanAge >= 21 && loanSalary >= 25000 && experience >= 2) {
    console.log("Eligible");
}
else {
    console.log("Not Eligible");
}



// Task 15: Cab Fare Calculator


let distance = 8;
let fare;

if (distance <= 5) {
    fare = distance * 20;
}
else {
    fare = (5 * 20) + ((distance - 5) * 15);
}

console.log("Cab Fare :", fare);



// Task 16: Multiplication Table


let number = 5;

for (let i = 1; i <= 10; i++) {

    console.log(number + " x " + i + " = " + (number * i));

}



// Task 17: Password Checker


let pass = "abcdef123";
let length = pass.length;

if (length < 6) {
    console.log("Weak");
}
else if (length <= 10) {
    console.log("Medium");
}
else {
    console.log("Strong");
}



// Task 18: Company Bonus System


let empSalary = 40000;
let exp = 4;
let bonus = 0;

if (exp <= 2) {
    bonus = empSalary * 5 / 100;
}
else if (exp <= 5) {
    bonus = empSalary * 10 / 100;
}
else {
    bonus = empSalary * 20 / 100;
}

console.log("Bonus :", bonus);
console.log("Total Salary :", empSalary + bonus);



// Task 19: Countdown Timer


let count = 10;

while (count >= 1) {

    console.log(count);

    count--;

}

console.log("Happy New Year");



// Task 20: Interview Selection System


let degreeCompleted = true;
let communication = "Good";
let technicalScore = 75;

if (degreeCompleted) {

    if (communication === "Good") {

        if (technicalScore >= 70) {
            console.log("Selected");
        }
        else {
            console.log("Rejected : Technical Score is below 70");
        }

    }
    else {
        console.log("Rejected : Communication is not Good");
    }

}
else {
    console.log("Rejected : Degree Not Completed");
}