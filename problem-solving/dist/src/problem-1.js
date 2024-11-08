"use strict";
{
    /*
      Problem-1
    ------------
    Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
      */
    const sumArray = (arr) => {
        let sum = 0;
        // using basic for loop to find sumOfArray
        for (let i = 0; i < arr.length; i++) {
            sum = sum + arr[i];
        }
        return sum;
    };
    const result = sumArray([1, 2, 3, 4, 5]);
    console.log(result);
    //
}
