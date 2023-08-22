// Js Fundamental
// Introduction To Javascript

// Variables
// Anything that is not constant, which means it has dynamic content(Value) most times.
/* Variable: Is a named container, used to save named value.
// When declaring variables we use 2 key words
 (1) let 
 (2) const 
 and the old way is by (var)*/
// Before ECMA Variable can be written as
// name = "Ismail"

/*Let key word */

// Expression
// Statement : A statement should be terminated when ever is declared.

// let firstName = "Ismail";
// console.log(firstName);
// The console is a debugging tool for developers
// The console are of 2 types (1)Terminal console And (2) Browser console
// The terminal console is used when javascript code is run in the node environment
// A website can be hacked through the browser console.

/*
Let : When let is used a variable can't be re-declared but only reassign.
 */
/*Variable naming convention
1- Variables name can't start with a number e.g 23House xxx
2- Variables must be space free
3- special characters can't start variables except ( _ and $)
4- Javascript reserved words (if, else, switch etc.)

Variable Naming Styles(Contention)
1- Camel Case: e.g ismailAdesholaOgundele
2- Snake Case: ismail_adeshola_ogundele
3- Pascal case: IsmailAdesholaOhundele

*The standard naming convention in Javascript is Camel Case.
In PHP : snake case is the standard

*/

/*
2. const 
const should be used for something that won't change
const variable can't be re-declared and re assign.
 */

/*
/////////////
DAY 2
/////////////
 */

// Data Types
/*
1.Number e.g 62772, 83825
2.String e.g Ismail, Anas
3.Boolean (Yes/No , True/False)
4.Null 
5.Undefined
6.Object : syntax : {key : value}
 e.g let Ismail = {
    firstName: "Ismail",
    age: 99,
    nationality: "Nigerian"
 }
 7.Array 
 e.g array = [1,2,3,4,5,6,7,8,9]
 */

// console.log(Number.MAX_SAFE_INTEGER);

let age = null;
// console.log(age);

let year;
// console.log(year);

let something = "";
// console.log(something.length);

// Object example

let fellow = {
  firstName: "Ismail",
  age: 99,
  educationLevel: "PhD",
  complexion: "black",
  gender: "male",
};

// console.log(fellow.educationLevel);

let me = null;
let number = 4;

let und = undefined;

let result = me * number;
// console.log(result);
// console.log(typeof me);

//Operators Unary operators && Binary Operator
/*
Unary Operators : Need only one operand e.g typeof (A unary operation is an operation with only one operand)
binary Operators : Needs 2 operand (+, -, *)

Arithmetic
// + - * / %

logical operators
// AND OR NOT
AND &&
OR ||
NOT !=

// COMPARISON
 GREATER THAN >
 LESS THAN <
 GREATER OR EQUAL >=
 LESS OR EQUAL <=
 EQUAL : ==
 EXACTLY EQUAL : ===

 ASSIGNMENT OPERATOR (=)
 */

// practice

let profession = "Engineer";

// Concatenation

// Template literals

//User Interface

// prompt, alert, confirm

// let userName = prompt("Please what your name?");
// let exp = `Welcome ${userName}!`;
// let exps = exp;
// alert(exps);

//Null

let tjName; // undefined
let tjName2 = null;

let num2 = 100;

// console.log("The type of num2 :" + typeof num2);

// console.log(typeof tjName);
// console.log(typeof tjName2);

// console.log(tjName * num2);

// Day 3

// Symbol: It's one of the ES6 features
/*
 it can be used for constant

 */

// let userId1 = symbol("Unique", { contact: true });
// let userId2 = symbol();

// console.log(userId1);

// Function

let currencyOne = 100;
let currencyTwo = 0;
let exchangeRate = 1.2;

function convertCurrency(amount, rate) {
  return amount * rate;
}

console.log(convertCurrency(currencyOne, exchangeRate));
