type Point = {
    x: number,
    y: number
}

function printCoordinate({ x, y }: Point): void {
    console.log("X Coordinate is: " + x);
    console.log("Y Coordinate is: " + y);
}

// printCoordinate({ x: 10, y: 20 });


type UserOne = {
    type: {
        name: string,
        DOB: number,
        college: string;
        type: {
            test1: number;
            test2: number;
            test3: number
        }
    };
    address: string;
    isLoggedIn: boolean;
    isOnline: boolean
}

type user = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean
    creditCardDetails?:number
}
 
let myUser: user = {
    _id: "123434",
    name: "Ashish",
    email: "test@ashish.com",
    isActive: false
}

myUser.isActive = true;
// myUser.creditCardDetails = 234
function tempFun(){
    if(myUser.creditCardDetails == undefined)
        console.log("Go home babe")
}
// tempFun()


// combining more than 2 types at one, and it is a good practice to use existing defined type

type cardNumber = {
    cardNumber: string
}
type cardDate = {
    cardDate: string
}
type cardDetails = cardDate & cardNumber & {
    cvv: number
}

let card: cardDetails = {
    cardNumber: "123234",
    cardDate: "345232",
    cvv: 234    
}

console.log(card)