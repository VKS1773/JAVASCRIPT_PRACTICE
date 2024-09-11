let mathObject = Math;
console.log(mathObject);

console.log("The value of Math.E is", Math.E);
console.log("Math.PI : ", Math.PI);
console.log("LN2 : ", Math.LN2);
console.log("SQRT1_2", Math.SQRT1_2);

let a = 23.9386876;
let b = 67;

console.log("the value of a anf b is ", a, b);
console.log("The round off of a and b is ", Math.round(a), Math.round(b));

console.log("4 raised to the power of 2 is ", Math.pow(4, 2));

console.log("square root of 81", Math.sqrt(81));

// ceil and floor
console.log("5.8 rounded up to the nearest integer is ", Math.ceil(5.8));
console.log("5.8 rounded down to the neaarest integer is ", Math.floor(5.8));

// absolute
console.log("the absolute of -6487 is ", Math.abs(-6487));
console.log("the absolute of 6487 is ", Math.abs(6487));

// Trigonometric functions
console.log("The value of sin(pi/2) is ", Math.sin(Math.PI / 2));
console.log("The value of cos(pi/2) is ", Math.cos(Math.PI / 2));
console.log("The value of tan(pi/2) is", Math.tan(Math.PI / 2));

// min , max
console.log("Minimum of 12,32,8,1,83 is", Math.min(12, 32, 8, 1, 83));
console.log("Miximum of 12,302,8,1,83 is", Math.max(12, 302, 8, 1, 83));

// Generating a random value
console.log("The random number is", Math.random());

let minNum = 1;
let maxNum = 100;
let r1_100 = minNum + (maxNum - minNum) * Math.random();
console.log(r1_100);
