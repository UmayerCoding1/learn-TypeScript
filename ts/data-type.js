"use strict";
// basic type
let num = 123345678;
// console.log(num);
let person = 'Umayer hossain';
let isAdmin = true;
let bigNum = 129232093209102192102926n;
//number of array 
const numArray = [1, 3, 5, 6];
// string of array
const nameArray = ["Umayer", "rakib"];
// union type array
const rollArray = [1, 23, '34'];
// tuple type array
const rollAndnameArray = ["Umayer", 23];
// undefined
let val = undefined;
let val2 = null;
let obj = {
    name: "Umayer",
    age: 20,
    phone: ''
};
obj = { ...obj, age: 21, phone: "01894055592" };
// console.log(obj);
// typrscript data type
// 1: any
let numVal;
numVal = 10,
    numVal = '10',
    numVal = undefined;
numVal = null;
numVal = true;
numVal = 12440564954090349n;
function testAnyType(val) {
    console.log(val);
}
