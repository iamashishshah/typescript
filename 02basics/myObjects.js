"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Ashish",
    email: "ashish@gmail.com",
    isActive: false,
};
var userone = {
    name: "Ashish",
    isPa: true,
};
// function createUser({ name: string, isPaid: boolean = false }) { this is not fucking correct destructuring, we've to destrucutre in proper way
function createUser(_a) {
    var name = _a.name, _b = _a.isPaid, isPaid = _b === void 0 ? false : _b;
    if (isPaid) {
        console.log("Good you paid for the course");
    }
    else
        console.log("First pay child to watch this.");
}
createUser({ name: userone.name, isPaid: undefined });
function createCourse(_a) {
    var string = _a.name, boolean = _a.isPaid;
    return { name: "Ashish", price: 399 };
}
console.log(createCourse({ name: userone.name, isPaid: userone.isPa }).name);
// take arguments as objects and return as objects
// function name({objects with same name}):{argument with same name}{ function definition with return syntax}
function createNewUser(_a) {
    var string = _a.name, boolean = _a.isEnrolled;
}
var newuser = { name: "Ashish", isEnrolled: true, email: "ashish@gmail.com" };
createNewUser(newuser);
