// type alias: it is like creating own data type, like enum, sturcture
// how to create this
var isCleaned = false;
function createUser(user) {
    return { name: "Ashish", email: "ashish@gmail.com", isActive: true, isLooggedIn: false };
}
console.log(createUser({ name: "Ashish", email: "ashish@gmail.com", isActive: true, isLooggedIn: false }).isLooggedIn);
