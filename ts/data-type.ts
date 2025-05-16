// basic type
let num: number  = 123_345_678;
// console.log(num);


let person: string = 'Umayer hossain';

let isAdmin: boolean = true; 

let bigNum: bigint = 129232093209102192102926n;

//number of array 
const numArray: number[] = [1,3,5,6]

// string of array
const nameArray: string[] = ["Umayer", "rakib"];

// union type array
const rollArray: (string | number)[] = [1,23,'34'];


// tuple type array
const rollAndnameArray: [string,number] = ["Umayer", 23]

// undefined
let val: undefined = undefined;
let val2:null = null;


let obj: {name: string, age: number, phone: string} = {
    name: "Umayer",
    age: 20,
    phone: ''
}



obj = {...obj, age: 21, phone: "01894055592" }

// console.log(obj);


// typrscript data type
// 1: any
let numVal;
numVal = 10,
numVal = '10',
numVal= undefined
numVal= null
numVal = true
numVal = 12440564954090349n;


function testAnyType(val: any) {
    console.log(val);
    
}


