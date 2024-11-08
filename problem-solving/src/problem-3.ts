{
  /*
problem-3
Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input. 
*/

  const countWordOccurrences = (sentence: string, word: string): number => {
    // make an array of given sentence
    const wordsArray: string[] = sentence.split(" ");

    // console.log(wordsArray);

    let countWord: number = 0;
    for (const findWord of wordsArray) {
      if (findWord.toLowerCase() === word.toLowerCase()) {
        countWord++;
      }
    }

    return countWord;
  };

  const result3: number = countWordOccurrences(
    "I TYpescript love typescript Typescript",
    "typescript"
  );
  console.log(result3); // output --> 3
}
