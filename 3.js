'use strict'
//Sofia Kononenko and Sham Hason

//This program counts the number of zeros in a given array and display the result.
const numbersArr = [0, 5, 1, 0, 2, 0, 6, 0, 0, 2, 1, 9, 0]; 

let zeroCount = 0;
for (let i = 0; i < numbersArr.length; i++) 
     zeroCount += (numbersArr[i] === 0) ? 1 : 0;

console.log("Number of zeros:", zeroCount);
