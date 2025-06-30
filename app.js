// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

//ans1 var number = +prompt("Enter a positive number:");

// document.write("<h3>Positive Number Info</h3>");
// document.write("Number: " + number + "<br>");
// document.write("Round off: " + Math.round(number) + "<br>");
// document.write("Floor value: " + Math.floor(number) + "<br>");
// document.write("Ceil value: " + Math.ceil(number));

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var number = +prompt("Enter a negative floating number:");

// document.write("<h3>Negative Number Info</h3>");
// document.write("Number: " + number + "<br>");
// document.write("Round off: " + Math.round(number) + "<br>");
// document.write("Floor value: " + Math.floor(number) + "<br>");
// document.write("Ceil value: " + Math.ceil(number));

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

//ans3 var number = +prompt("Enter any number (positive or negative):");

// var absoluteValue = Math.abs(number);

// document.write("<h3>Absolute Value</h3>");
// document.write("The absolute value of " + number + " is " + absoluteValue);

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.: 

//ans4 var diceValue = Math.floor(Math.random() * 6) + 1;

// document.write("<h3>Dice Roll</h3>");
// document.write("You rolled: " + diceValue);


// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

//ans5 var toss = Math.floor(Math.random() * 2); //
// var result = (toss === 0) ? "Heads" : "Tails";

// document.write("<h3>Coin Toss</h3>");
// document.write("The coin landed on: " + result);


// 6. Write a program that shows a random number between 1
// and 100 in your browser.

//ans6 var randomNum = Math.floor(Math.random() * 100) + 1;

// document.write("<h3>Random Number</h3>");
// document.write("Random number between 1 and 100: " + randomNum);


// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

//ans7 var userInput = prompt("Enter your weight (e.g. 50kgs, 50.2kilograms):");

// var weight = parseFloat(userInput);

// document.write("<h3>User Weight</h3>");
// document.write("Your weight is: " + weight + " kilograms");

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

//ans8 var secretNumber = Math.floor(Math.random() * 10) + 1;

// var userGuess = +prompt("Guess the secret number (between 1 and 10):");

// if (userGuess === secretNumber) {
//   alert("Congratulations! You guessed the secret number.");
// } else {
//   alert("Sorry! The secret number was " + secretNumber);
// }


            //    CHAPTER 2

// 1. Write a program that displays current date and time in
// your browser.

// var now = new Date();
// document.write("Current Date and Time: " + now);


// 2. Write a program that alerts the current month in words.
// For example December.
 
// var months = ["January", "February", "March", "April", "May", "June",
//               "July", "August", "September", "October", "November", "December"];
// var now = new Date();
// var monthName = months[now.getMonth()];
// alert("Current Month: " + monthName);


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var day = days[now.getDay()];
// alert("Today is: " + day);


// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var now = new Date();
// var day = now.getDay();
// if (day === 0 || day === 6) {
//   alert("It’s Fun day");
// }

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var now = new Date();
// var date = now.getDate();
// if (date < 16) {
//   document.write("First fifteen days of the month");
// } else {
//   document.write("Last days of the month");
// }


// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var today = new Date();
// var minutesSince1970 = today.getTime() / (1000 * 60);
// document.write("Minutes since Jan 1, 1970: " + Math.floor(minutesSince1970));


// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var now = new Date();
// var hour = now.getHours();
// if (hour < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var laterDate = new Date("December 31, 2020");
// document.write("Later Date: " + laterDate);


// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var ramadanDate = new Date("June 18, 2015");
// var today = new Date();
// var diffTime = today - ramadanDate;
// var diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
// alert(diffDays + " days have passed since 1st Ramadan, 2015");


// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// var refDate = new Date();
// var jan2015 = new Date("January 1, 2015");
// var secondsPassed = Math.floor((refDate - jan2015) / 1000);
// document.write("Seconds passed since beginning of 2015: " + secondsPassed);


// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

// var currentDate = new Date();
// document.write("Current Date: " + currentDate + "<br>");
// currentDate.setHours(currentDate.getHours() + 1);
// document.write("1 Hour Ahead: " + currentDate);


// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var currentDate = new Date();
// var oldDate = new Date();
// oldDate.setFullYear(currentDate.getFullYear() - 100);
// alert("100 years back, the date was: " + oldDate);

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// var age = +prompt("Enter your age:");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;
// document.write("Your birth year is: " + birthYear);


// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// var customerName = "Ali Khan";
// var month = new Date().toLocaleString('default', { month: 'long' });
// var units = 410;
// var chargePerUnit = 16;
// var netAmount = units * chargePerUnit;
// var lateFee = 350;
// var grossAmount = netAmount + lateFee;

// document.write("<h2>K-Electric Bill</h2>");
// document.write("Customer Name: " + customerName + "<br>");
// document.write("Month: " + month + "<br>");
// document.write("Number of units: " + units + "<br>");
// document.write("Charges per unit: " + chargePerUnit + "<br><br>");
// document.write("Net Amount Payable (within Due Date): " + netAmount.toFixed(2) + "<br>");
// document.write("Late Payment Surcharge: " + lateFee.toFixed(2) + "<br>");
// document.write("Gross Amount Payable (after Due Date): " + grossAmount.toFixed(2));
