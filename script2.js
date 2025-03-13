// sum of digits in a number using js

function sumOfDigits(num){
let sum = 0;
    while (num > 0) {
        sum += num % 10; 
        num = Math.floor(num / 10);
    }
    return sum;
}
let num = 123;
console.log(`Sum of digits in number:`, sumOfDigits(num)); 

// another solution:

// function sumOfDigits(number) {
//     let digits = number.toString().split('');
//     let sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0);
//     return sum;
// }
// let number = 123;
// console.log(Sum of digits in number:, sumOfDigits(number))