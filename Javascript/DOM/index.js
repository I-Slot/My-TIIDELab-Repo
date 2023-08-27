/*
Interacting with a browser

DOM can be used

- add content to the browser
- change CSS style
- react to user events(e.g clicking)
- cool effects like popups

Content 

- Document Object Model (DOM)
- Add, change & delete content
- Make a cool pop-up effect in the web page

 */

// Query selector
const para = document.querySelector("p");
// console.log(para);

const para2 = document.querySelector(".error");
// console.log(para2);

const errorDiv = document.querySelector("div.error");
// console.log(errorDiv);

// Query selectorAll

const paras = document.querySelectorAll("p");

// paras.forEach((para) => {
//   console.log(para);
// });
// console.log(paras[0]);

const errors = document.querySelectorAll(".error");
// console.log(errors);

errors.forEach((error) => {
  // console.log(error);
});
