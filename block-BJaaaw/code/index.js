// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let num = Number(prompt(`Enter a number`));
if (num % 2 === 0) {
  alert(`${num} is even number`);
} else {
  alert(`${num} is odd number`);
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let numA = Number(prompt(`Enter first number`));
let numB = Number(prompt(`Enter second number`));

if (numA > numB) {
  alert(`${numA}is a max value`);
} else {
  alert(`${numB} is a max value`);
}

// 3. Convert the above code using`?` terniary operator

num % 2 === 0 ? alert(`${num} is even number`) : alert(`${num} is odd number`);

numA > numB ? alert(`${numA}is a max value`) : alert(`${numB} is a max value`);

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let houseName = prompt(`What is house name?`);

if (houseName === `stark`) {
  alert(`Winter is coming`);
} else if (houseName === `lannister`) {
  alert(`A lannister always pays his debt`);
} else {
  alert(`All men must die.`);
}

// 5. Convert the above code using`?` terniary operator

houseName === `stark`
  ? alert(`Winter is coming`)
  : houseName === `lannister`
  ? alert(`A lannister always pays his debt`)
  : alert(`All men must die.`);

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let numberOfMonth = Number(prompt(`Enter the number of month`));

switch (numberOfMonth) {
  case 1:
    alert(`number of the days in january month are 30.`);
    break;
  case 2:
    alert(`number of the days in february month are 28.`);
    break;
  case 3:
    alert(`number of the days in march month are 31.`);
    break;
  case 4:
    alert(`number of the days in april month are 30.`);
    break;
  case 5:
    alert(`number of the days in may month are 31.`);
    break;
  case 6:
    alert(`number of the days in june month are 30.`);
    break;
  case 7:
    alert(`number of the days in july month are 31.`);
    break;
  case 8:
    alert(`number of the days in august month are 31.`);
    break;
  case 9:
    alert(`number of the days in september month are 30.`);
    break;
  case 10:
    alert(`number of the days in october month are 30.`);
    break;
  case 11:
    alert(`number of the days in november month are 30.`);
    break;
  case 12:
    alert(`number of the days in december month are 31.`);
    break;

  default:
    alert(`It does not match with data stored`);
    break;
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

let salary = Number(prompt(`Enter your salary amount`));
inhandSalary = 0;

if (salary <= 20000) {
  inhandSalary = salary - (salary * 10) / 100;
  alert(`in hand amount is Rs.${inhandSalary}`);
} else if (salary <= 40000) {
  inhandSalary = salary - (salary * 20) / 100;
  alert(`in hand amount is Rs.${inhandSalary}`);
} else if (salary <= 50000) {
  inhandSalary = salary - (salary * 30) / 100;
  alert(`in hand amount is Rs.${inhandSalary}`);
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = Number(prompt(`Enter your marks`));

if (marks > 100) {
  alert(`Marks can't be greater than 100`);
} else if (marks >= 80 && marks < 100) {
  alert(`Grade A`);
} else if (marks >= 50 && marks < 80) {
  alert(`Grade B`);
} else if (marks >= 30 && marks < 50) {
  alert(`Grade C`);
} else if (marks > 0) {
  alert(`Grade D`);
} else marks == 0;
alert(`fail`);

// switch//

switch (true) {
  case marks > 100:
    alert(`Marks can't be greater than 100`);
    break;
  case marks >= 80 && marks <= 100:
    alert(`Grade A`);
    break;
  case marks >= 50 && marks < 80:
    alert(`Grade B`);
    break;
  case marks >= 30 && marks < 50:
    alert(`Grade C`);
    break;

  default:
    alert(`grade D`);
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather = prompt(`What is the weather like outside?`);

if (weather === `sunny`) {
  alert(`Wear a T-shirt`);
} else if (weather === `rainy`) {
  alert(`Don't forget to take your raincoat.`);
} else if (weather === `hot`) {
  alert(`Get a hanky`);
} else if (weather === `freezing`) {
  alert(`Get your sweeter on`);
} else {
  alert(`Not a valid input`);
}
