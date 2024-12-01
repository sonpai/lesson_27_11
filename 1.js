'use strict'
//Sofia Kononenko

//this program checks if the number we want to check is divisible by 2, 3, and 5, then counts and logs the total number of true conditions.
const num = 0;

if(num===0)
console.log("the number 0 can't be divided")

else{
let isDivBy2 = Number(num % 2 === 0);//condition 1
let isDivBy3 = Number(num % 3 === 0);//condition 2
let isDivBy5 = Number(num % 5 === 0);//condition 3

const totalDiv = isDivBy2 + isDivBy3 + isDivBy5;//total number of true conditions

console.log(totalDiv);
}