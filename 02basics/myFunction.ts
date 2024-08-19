function addTwo(num){
    num.toUpperCase();  // here problem come to typescript, it shouldn't allow me to use string's function on number data type
    return num + 2;
}

// so the whole idea of ts was to not make mistakes like this and ts is allowing us to do this thing

// console.log(addTwo("343.5"))


// so the best practice is here
function addThree(num: number){
    return num + 3;
}
// this is the good practice
let increasedValue = addThree(34)
// console.log(increasedValue)


function toUpper(value: string){
    return value.toUpperCase();
}

// let upperValue = toUpper("Ashish") // this will work fine to convert into upper case
let upperValue = toUpper("3")  // this is ok cuz you're passing intentionally as string, so you're responsible for this but 
//TODO: here is the room for improvement in ts
// let upperValue = toUpper("3")  
// let upperValue = toUpper(3)  
// console.log(upperValue)


function userSignUp(name: string, email: string, isPaid: boolean){
    return null
}
userSignUp("Ashish", "ashish@lco.dev", true)

let userlogin = (name: string, email: string, isLoggedIn: boolean = true) => {  // if you don't pass anything this will be your default value
    return isLoggedIn;
}
userlogin("Ashish Shah", "ashish@ashish.com")
// console.log(userlogin("Ashish Shah", "#s@.com"))


let addFive = (value: number) =>{
    let helloMessage = "Hello"
    return value + 5;
}

let value: number = addFive(3); // or you can say to function that this function should return this type only
// console.log(value)
// eg:

let addTen = (value: number): string =>{
    return "Heji!"
    // return value + 10;
}

let result = addTen(10)
// console.log(result)


//TODO: sometimes we'll need to return more than one type from a fucntion eg:

// function getValue(myValue) : boolean{
//     if(myValue < 5)
//         return true
//     return "Greater than 5 is also ok"
// }
// it is returning both the types(even can return more than 2 types at a time)
// let yourValue = getValue(30)
// console.log(yourValue)


function consoleError(errormsg: string = "Provide error") : void{
    console.log(errormsg)
}

// void means nothing:  
// never means, function is never going to return anything
consoleError("Log in first to log out.");

function handleError (error: string) : never{
    throw new Error(error)
}
console.log(handleError("testing it"))
export{}