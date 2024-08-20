// before
// let user: (string | number | boolean) [] = ["Ashish", "Shah", 21, true] 
// why did we require tuple in the first place: ?

// one problem in the above is that, it is not implementing that which value should be in which order, because sometimes we need
// some types of data in the sequence order
// second problem is that it is not implementing how many each data types can store values, limitless
//TODO: so tuples does the both, it limits number of values and order


let newUser: [string, string, number, boolean]
newUser = ["Ashish", "Shah", 21, false]

let rgb: [number, number, number] = [122, 255, 255]



type user = [string, number]
let newUser1: user = ["Ashish", 21]
let name: string = "Ashish";

type tempUser = [number, string]
// let tempcreater: tempUser = [10, "Ashish", "test"] // it will not work because it has size limit of 2 only

// but but here we go
let tempcreater: tempUser = [10, "Ashish"]
console.log(tempcreater)
tempcreater.push("Shah")
tempcreater.push(23)
console.log(tempcreater)

// https://stackoverflow.com/questions/64069552/typescript-array-push-method-cant-catch-a-tuple-type-of-the-array
export{}