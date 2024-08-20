type user = {
  name: string;
  isLoggedIn: boolean;
  /*
          goodToken?:string = "defaultToken"
     In TypeScript, you can't directly assign default values to properties within a type definition. Types are meant to define the shape of objects and do not include implementation details like default values. 
     */
};

let newUser: user;
newUser = { name: "Ashish", isLoggedIn: false };
// so, we can initialize later, while creating new user using 'type' data type

// but what about 'interface' what did we require it in the first place, while there was 'type' which does the same work

interface yeUser {
  readonly id: number;
  name: string;
  age: number;
  isLoggedId: boolean;
  googleToken?: string;
  // in interface we can write method as well
  // startTrial: (value: number) => string // string is the return type of method
  // startTrial: () => string
  startTrial(): string;
//   getCoupon(couponname: string): number;
}

let yeNewUser: yeUser; // we can do this using interface also
// yeNewUser = {id: 29,name: "Ashish", age: 21, isLoggedId: false}  here we've to pass method as well
yeNewUser = {
  id: 29,
  name: "Ashish",
  age: 21,
  isLoggedId: false,
  startTrial: () => {
    return "Hello";
  },
};
// yeNewUser = {11, "Ashish", 21, true}  // we can't assign value like this
// console.log(yeNewUser.googleToken);

// create interface from start

interface userDetails {
  name: string;
  age: number;
  email: string;
  userId: number;
  googleToken: boolean;
  startTrial(): string;
  getDiscount(couponname: string, off?: number): number;
}

// re-opening of interface: you can delcare later structure if you want to 
//TODO: but what about if i want to drop some interface feature which is alread declared, how can i achieve this?

interface userDetails {
    getGithubToken?: string
}

// we've used above to define structure of the object, how our object look like with strong typed, 
let firstUser: userDetails;

firstUser = {
  name: "Ashish",
  age: 21,
  email: "a@a.com",
  userId: 25,
  googleToken: false,
  startTrial: () => {
    return "Trial has been started";
  },
  getDiscount: (username: string = "Ashish", off: number = 10) => {
    // console.log(username);
    // console.log(off);
    if(off == 10)
        console.log("You've got default discount.\n")
    else console.log("You've got special offer\n")
    return off;
  },
};
// why is it not giving me an error: because it is taking it as reassign, in first because I made getGithubToken as optional, so it doesn't bother to take github id
firstUser = {
  name: "Ashish",
  age: 21,
  email: "a@a.com",
  userId: 25,
  googleToken: false,
  getGithubToken: "tempGithub.com",
  startTrial: () => {
    return "Trial has been started";
  },
  getDiscount: (username: string = "Ashish", off: number = 10) => {
    // console.log(username);
    // console.log(off);
    if(off == 10)
        console.log("You've got default discountfdsds.\n")
    else console.log("You've got special offer\n")
    return off;
  },
};

console.log(firstUser.startTrial());
console.log("You've got "+firstUser.getDiscount("Abhay", 30)+", discount");
console.log("You've got "+firstUser.getDiscount("Ashish")+", discount");


// can we declare function inside of type as well?

type userType = {
    name: string
    age: number,
    isOnline: boolean
    increaseScreenTime(): number
    displayPlaytime(playername: string, totalTime: number): number
}

let firstGamer: userType;

firstGamer = {
    name: "ayush",
    age: 21,
    isOnline: false,
    increaseScreenTime: () => {
        return 100
    },
    displayPlaytime: (user: string, totaltime: number) => {
        console.log(user)
        return 100
    } 
    // it doesn't mean if your function strucutre is containing parameter then you've to pass it, but if there is return type then you should return same type
}

// console.log(firstGamer.displayPlaytime("Ashish", 343))