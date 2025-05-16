// Regular function with return type
function add2(a: number, b: number): number {
    return a + b;
}

// void function
function handleCarDelete(): void {
    console.log('Car deleted successfully');
}

// never function
function infinityLoop(): never {
    while (true) {
        // console.log(1);
    }
}
