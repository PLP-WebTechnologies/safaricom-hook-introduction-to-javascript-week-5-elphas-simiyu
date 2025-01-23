
// Part 1: Variables and Data Types
// Declare variables
let name = "Elphas Simiyu"; // String
let age = 20; // Number
let isStudent = true; // Boolean
let hobbies = ["Reading", "Coding", "Robotics"]; // Array
let person = { firstName: "Elphas", lastName: "Simiyu", age: 25 }; // Object

// Print their values and types in the console
console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// Part 2: Operators (Simple Calculator)
function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Invalid input. Please enter valid numbers.");
        return;
    }

    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                console.log("Division by zero is not allowed.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            console.log("Invalid operation. Please choose +, -, *, or /.");
            return;
    }

    console.log(`Result: ${result}`);
}

// Call the calculator function to demonstrate
calculator();

// Part 3: Functions (Greeting User)
function greetUser(userName) {
    return `Hello, ${userName}! Welcome to JavaScript Basics.`;
}

// Display the greeting message in an HTML element
const userName = prompt("Enter your name:");
document.getElementById("greeting").textContent = greetUser(userName);


//Part 2: JavaScript Control Structures
        // Part 1: If Statements (Voting Eligibility)
        const aage = prompt("Enter your age:");
        
        // Check eligibility and display message
        const votingEligibilityMessage = (aage >= 18) 
            ? "You are eligible to vote!" 
            : "You are not eligible to vote.";
        
        document.getElementById("voting-eligibility").textContent = votingEligibilityMessage;

        // Part 2: Loops (Display Numbers from 1 to 10)
        const numberList = document.getElementById("number-list");

        // Loop to create list items (numbers from 1 to 10)
        for (let i = 1; i <= 10; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = i;
            numberList.appendChild(listItem);
        }

// Part 3: Introduction to the DOM
            // Part 1: Modifying HTML Elements using JavaScript

            // Change the text of the <h1> element
            document.querySelector("h1").textContent = "JavaScript in Action!";

            // Add a new <p> inside the <div> with the id 'dynamic-content'
            const newParagraph = document.createElement("p");
            newParagraph.textContent = "This content was added dynamically using JavaScript.";
            document.getElementById("dynamic-content").appendChild(newParagraph);