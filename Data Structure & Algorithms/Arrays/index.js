// alert("connected");
console.log(performance.now());
const stringsOfLetters = ["a", "b", "c", "d"];
// 0    1    2    3

//4*4 meaning we are using !6 byte of storage, If we are in 32 bit system, we have 4 ;

console.log(stringsOfLetters[2]);

// Arrays Methods in JavaScript

// 1.  push : to add something in the end of an Array
//e.g

stringsOfLetters.push("e"); // O(1) operation
console.log(stringsOfLetters);

// 2. push : the opposite of push in the sense that it remove item to the end of an Arrays
stringsOfLetters.pop();
console.log(stringsOfLetters); // O(1) operation

// 3. unshift : Adding items at the beginning o

stringsOfLetters.unshift("x"); // O(n)
console.log(performance.now());
console.log(stringsOfLetters);

// 4. Splice : To add items to the middle of an Array
stringsOfLetters.splice(2, 0, "alien"); // O(n/2) --- O(n)
console.log(performance.now());
console.log(stringsOfLetters);

// In C++ which have static Arrays you do something like this
// int a[20]; // An Array which have 20 items
// int b[5] {1,2,3,4,5}; // An Array which have 20 items

let arr = new Array(100).fill("ismail");
console.log(arr);

// let a = 5;
// let b = 2;

// console.log(++a);
// console.log(b++);
