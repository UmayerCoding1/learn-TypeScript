// 1. write a TypeScript function to calculate the factorial of a number with proper type annotations.

// eg factorial of 4 = 4 * 3 * 2 * 1 
function factorial (num: number) : number {
    if (num < 0) {
        throw new Error('Factorial is not defined for negative numbers');
    }
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

// console.log(factorial(4)); 


// 2. Define a function that accepts a user object with name,age and email and returns a formatted string ;

interface User {
    name: string;
    age: number;
    email: string;
}

function formatUser(user: User): string {
    return `Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`;
}

console.log(formatUser({ name: 'John Doe', age: 30, email: 'test@gmail.com' }));
