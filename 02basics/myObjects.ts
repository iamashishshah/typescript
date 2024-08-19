let user = {
  name: "Ashish",
  email: "ashish@gmail.com",
  isActive: false,
};

let userone = {
  name: "Ashish",
  isPa: true,
};

// function createUser({ name: string, isPaid: boolean = false }) { this is not fucking correct destructuring, we've to destrucutre in proper way
function createUser({name, isPaid = false}:{name: string, isPaid: boolean}) {
  if(isPaid){
      console.log("Good you paid for the course")
  }else console.log("First pay child to watch this.")
}
createUser({ name: userone.name, isPaid: undefined});

function createCourse({ name: string, isPaid: boolean }): {
  name: string;
  price: number;
} {
  return { name: "Ashish", price: 399 };
}

console.log(createCourse({ name: userone.name, isPaid: userone.isPa }).name);

// take arguments as objects and return as objects
// function name({objects with same name}):{argument with same name}{ function definition with return syntax}


function createNewUser({name: string, isEnrolled: boolean}){

}
let newuser = {name: "Ashish", isEnrolled: true, email: "ashish@gmail.com"}

createNewUser(newuser)

export {};
