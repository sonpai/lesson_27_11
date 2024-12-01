'use strict'
//Sofia Kononenko

//this function determines if a number is a prime number

function checkIsPrime(num){

    if(num<2)
    return false;

for(let i=2;i<=Math.sqrt(num);i++) {		
    if (num%i==0)       
        return false;
   }
return true;
}

for (let i = 2; i < 237; i++) 
    if (checkIsPrime(i)) 
      console.log(i);   
  