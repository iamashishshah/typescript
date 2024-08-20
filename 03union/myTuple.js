"use strict";
// before
// let user: (string | number | boolean) [] = ["Ashish", "Shah", 21, true] 
Object.defineProperty(exports, "__esModule", { value: true });
// one problem in the above is that, it is not implementing that which value should be in which order, because sometimes we need
// some types of data in the sequence order
// second problem is that it is not implementing how many each data types can store values, limitless
//TODO: so tuples does the both, it limits number of values and order
var newUser;
newUser = ["Ashish", "Shah", 21, false];
var rgb = [122, 255, 255];
var newUser1 = ["Ashish", 21];
var name = "Ashish";
// let tempcreater: tempUser = [10, "Ashish", "test"] // it will not work because it has size limit of 2 only
// but but here we go
var tempcreater = [10, "Ashish"];
console.log(tempcreater);
tempcreater.push("Shah");
tempcreater.push(23);
console.log(tempcreater);
