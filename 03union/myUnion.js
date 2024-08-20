// why do we use 'union' type and what need arised to create union data type
// Ans: where you're not sure which type of data is coming from the servers, so it is highly reccomended to use union insted of 'any'
var score = 343; // it is reccomended to use lesser or required number of type not all
score = 343;
score = "Ashish";
score = "53";
var Ashish = {
    name: "Ashish",
    id: 3435,
};
// getDbId("34");
// function getDbId(id: number | string): void {
//   id.toString();
//   // id.toUpperCase(); // actually id is treated like string | number
//   if (id === "string") id.toUpperCase();
// }
var data = [1, 2, 34, 546, 8];
var data1 = ["Shah", "Ashish"];
var data2 = [1, 3, "Ashish", 343, "shah"];
// console.log(data.length)
var pi = 3.14;
var seatAllotment;
// while booking ticket
seatAllotment = "aisle";
function getDbId(id) {
    // id.toLowerCase(); this is wrong because it is treating it like new data type, that either can be string or number
    if (typeof id === "string")
        id.toLowerCase();
    else if (typeof id === "number")
        id += 32;
    console.log(id);
}
getDbId(1234567.89);
