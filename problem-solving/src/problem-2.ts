{
  /*
problem -2 
Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
*/

  const removeDuplicates = (arr: number[]): number[] => {
    const uniqueArray: number[] = arr.filter(
      (num, index) => arr.indexOf(num) === index
    );

    return uniqueArray;
  };

  const result2 = removeDuplicates([1, 2, 2, 3, 4, 2, 4, 3, 5]);
  console.log(result2); // output --> [ 1, 2, 3, 4, 5 ]
}
