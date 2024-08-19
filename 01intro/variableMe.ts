// don't DO TO OBVIOUS  things in code

let greetings: string = "Hello Ashish";
let greeting = greetings.toUpperCase();
// greetings.bold

// what is not good practice
let userId: number = 343343.543

// the above is bad practice, cuz you're not using the capability of type inference

let isLoggedIn: boolean = false;
isLoggedIn = true;



// Good coding practice
let isNotLoggedIn = true;
// isNotLoggedIn = "AShish";   // this error is giving by type inference 
isNotLoggedIn = false;   // this error is giving by type inference 
// console.log(isNotLoggedIn)


function sum(a: number, b: number){
    return (a + b)
}

let user = {
    age: 21,
    name: "Ashish Shah",
    isStudent: false,
    isLoggedIn: true
}

// console.log(user.isLoggedIn)
// console.log(sum(32, 55))



// any: datatype

let hero;
hero = getHero()
console.log(hero)

function getHero(){
    return "Iron Man"
}



export{}