// let a1: number = 1;
// a1 = 10;

// function add1 (a:number , b:number) : number {
//     return a + b;
// }

// const y = add1(3,a1);
// console.log(y);


// // Array of numbers
// const numbers: number[] = [1, 3, 5, 6];

// // Array of strings
// const names: string[] = ["Umayer", "Rakib"];

// // Union type array (numbers and strings)
// const mixedRolls: (string | number)[] = [1, 23, "34"];

// // Tuple type array (name and roll number)
// const studentInfo: [string, number] = ["Umayer", 23];

// // names.forEach(val => val.)

// // numbers.forEach(num => num.)

// enum Colors {
//     Red = "red",
//     Green = "green",
//     Blue = "blue"
// }


// const alexTShrtColor: Colors = Colors.Green;
// // console.log("alex", alexTShrtColor);


// let s = 10;
// let m= 7;
// let xl = 3;


// const enum Size  {
//     s=  10,
//     m=7,
//     xl= 3
// }
// const size : Size = Size.xl;



// // never 
// function infinityLoop(): never {
//     while(true) {
//         // console.log(1);
        
//     }
// }

// // infinityLoop();


// // void
// function handleCarDelete (): void {
//     console.log('Car deleted successfully');
//     // return undefined;
    
// }


// // union type
// let userId: string | number;
// userId = '12',
// userId = 12


// function sellerId (id: string | number) {
//   console.log('Seller id is : ', id );
// }

// // sellerId('101')
// // sellerId(101);


// // type narrowing
// function printIdFn(id: string | number){
//     if (typeof id === 'string') {
//         console.log('Id is a string: ', id.toUpperCase())
//     }else{
//         console.log('Id is a number: ', id)
//     }
// }

// // printIdFn('umayer')
// // printIdFn(303)

// interface Persom {
//     name: string,
//     age: number,
//     cgpa: number,
//     class: string
// }

// const stadunt1:Persom  = {
//     name: 'Umayer',
//     age: 20,
//     cgpa: 6.80,
//     class: '12'
// }

// interface MathOp {
//     (a: number, b:number) : number
// }


// const addTowNum : MathOp = (x,y) => x+ y;
// const subTractTowNum : MathOp = (x,y) => x- y;

// // console.log(addTowNum(1,2));
// // console.log(subTractTowNum(5,4));


// // typr alias

// // type aliasName = type; syntax
// type Persom2 ={
//     name: string,
//     age: number,
//     cgpa: number,
//     class: string
// };

// const stadunt2:Persom2  = {
//     name: 'Rakib',
//     age: 20,
//     cgpa: 6.80,
//     class: '12'
// }


// type ID = string | number;

// let userId2: ID = `12`;
// let rollNumber: ID = 101;


// // intersection vs type alias
// interface User {
//     name: string,
//     age: number
// }



// interface Customer extends User{
//     address: string,
// }


// const myCustomer: Customer = {
//     name: 'Umayer',
//     age: 20,
//     address: 'Dhaka'
// }


// type Vahicle = {
//     brand: string,
//     model: string,
//     make: string
// }

// type Car = Vahicle & {
//     isElectric: boolean,
// }

// const myCar: Car = {
//     brand: 'Tesla',
//     model: 'Model S',
//     make: '2023',
//     isElectric: true
// }

// type MathOp1 = (a: number, b: number) => number;

// let add : MathOp = (a , b) => a + b;

// // console.log(add(1,2));


// type Status = 'active' | 'inactive' | 'pending';

// const userSttatus : Status = "inactive";


// // intersection type
// let confif : {server: string, port: number} &  {secure: boolean, timeout: number} = {
//     server: 'localhost',
//     port: 8080,
//     secure: true,
//     timeout: 5000
// }


// // optional properties
// interface User1 {
//     name: string,
//     phone?: string,
//     email: string,
// }

// let loginUser: User1 ={ 
//     name: 'Umayer',
//     email: 'test@gmail.com'
// }