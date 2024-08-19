"use strict";
// don't DO TO OBVIOUS  things in code
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello Ashish";
var greeting = greetings.toUpperCase();
// greetings.bold
// what is not good practice
var userId = 343343.543;
// the above is bad practice, cuz you're not using the capability of type inference
var isLoggedIn = false;
isLoggedIn = true;
// Good coding practice
var isNotLoggedIn = true;
// isNotLoggedIn = "AShish";   // this error is giving by type inference 
isNotLoggedIn = false; // this error is giving by type inference 
// console.log(isNotLoggedIn)
function sum(a, b) {
    return (a + b);
}
var user = {
    age: 21,
    name: "Ashish Shah",
    isStudent: false,
    isLoggedIn: true
};
// console.log(user.isLoggedIn)
// console.log(sum(32, 55))
// any: datatype
var hero;
hero = getHero();
console.log(hero);
function getHero() {
    return "Iron Man";
}
