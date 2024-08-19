function printCoordinate(_a) {
    var x = _a.x, y = _a.y;
    console.log("X Coordinate is: " + x);
    console.log("Y Coordinate is: " + y);
}
var myUser = {
    _id: "123434",
    name: "Ashish",
    email: "test@ashish.com",
    isActive: false
};
myUser.isActive = true;
// myUser.creditCardDetails = 234
function tempFun() {
    if (myUser.creditCardDetails == undefined)
        console.log("Go home babe");
}
var card = {
    cardNumber: "123234",
    cardDate: "345232",
    cvv: 234
};
console.log(card);
