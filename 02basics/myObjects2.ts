// type alias: it is like creating own data type, like enum, sturcture
// how to create this

type User = {
  name: string;
  email: string;
  isActive: boolean;
  isLooggedIn: boolean;
};

type myString = string;
type bool = boolean;
let isCleaned: bool = false;

function createUser(user: User): User {
  return {
    name: "Ashish",
    email: "ashish@gmail.com",
    isActive: true,
    isLooggedIn: false,
  };
}
console.log(
  createUser({
    name: "Ashish",
    email: "ashish@gmail.com",
    isActive: true,
    isLooggedIn: false,
  }).isLooggedIn
);
