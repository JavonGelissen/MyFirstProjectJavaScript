const input = require('sync-input');

// We have imported the 'sync-input' package for you.
// This package allows you to get user input.
// Like so:

let Bubblegum = 202;
let Toffee =118;
let Ice_cream =2250;
let Milk_chocolate =1680;
let Doughnut =  1075;
let Pancake = 80;
let Income = Bubblegum + Toffee + Ice_cream + Milk_chocolate + Doughnut + Pancake;

console.log("Earned amount:");
console.log("Bubblegum: $"+Bubblegum);
console.log("Toffee: $"+Toffee);
console.log("Ice cream: $"+Ice_cream);
console.log("Milk chocolate: $"+Milk_chocolate);
console.log("Doughnut: $"+Doughnut);
console.log("Pancake: $"+Pancake);
console.log("Income: $"+Income);

let Staff_expenses = Number(input("Staff expenses: "));
let Other_expenses = Number(input("Other expenses: "));

console.log("Net income: $"+(Income - Staff_expenses - Other_expenses));