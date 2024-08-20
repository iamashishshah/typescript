// why do we use 'union' type and what need arised to create union data type

// Ans: where you're not sure which type of data is coming from the servers, so it is highly reccomended to use union insted of 'any'

let score: number | string = 343; // it is reccomended to use lesser or required number of type not all
score = 343;
score = "Ashish";
score = "53";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let Ashish: User | Admin = {
  name: "Ashish",
  id: 3435,
};

// getDbId("34");

// function getDbId(id: number | string): void {
//   id.toString();
//   // id.toUpperCase(); // actually id is treated like string | number
//   if (id === "string") id.toUpperCase();
// }



const data: number[] = [1, 2, 34, 546, 8];
const data1: string[] = ["Shah", "Ashish"]
const data2: (number | string)[] = [1, 3, "Ashish", 343, "shah"]
// console.log(data.length)

let pi: 3.14 = 3.14;

let seatAllotment: "aisle" | "middle" | "window" ;

// while booking ticket
seatAllotment = "aisle"



function getDbId(id: string | number){
  // id.toLowerCase(); this is wrong because it is treating it like new data type, that either can be string or number
  if(typeof id === "string")
    id.toLowerCase()
  else if(typeof id === "number")
      id += 32;
  console.log(id)
}

getDbId(1234567.89);