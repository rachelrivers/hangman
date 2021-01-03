// const wordBank = require("./word-bank.json");
const prompt = require("readline-sync");
const wordBankTest = ["monkey", "cat"];

//declare rounds here
  let answerArray = [];
  let numberOfGuesses = 6;
  let guessesLeft = [];
  let guessedLetters = []; 

  //getting a word
    const randomWord =  wordBankTest[Math.floor(Math.random() * wordBankTest.length)];
    const splitWord = randomWord.split(""); 
    const remainingLetters = randomWord.length;

  //hiding the word with underscores
    const hiddenAnswer = []; 
    for (let i = 0; i < splitWord.length; i++) {
     hiddenAnswer[i] = "_";
    }

console.log("\nWelcome to Hangman!\nPress ctrl+c to stop\n");

//GUESS SECTION, prompt and evaluate 

while (remainingLetters > 0) {
  console.log("Here is a word: " + hiddenAnswer);
  let guess = prompt.question("Please guess a letter: ").toLowerCase();
  evaluateGuess(guess);
}

////does the guess validation go in the while loop or as a separate function? 

//function onlyLetters (input){ 
// if (/[a-zA-Z]/.test(guess)) {
// return false; 
// console.log("This is NOT a letter")
//  }

const evaluateGuess = (guess) => { 
if (guess === null) {
  console.log("Please enter a letter")
  } else { 
  if (guess.length !== 1) {
   console.log("Please enter a single letter.");
  } else { 
  if (correctLetters.includes(guess)) {
  console.log("Letter has already been added, please guess a new letter.");
  } 
}
  }
}

//a correct letter guess, push to the hidden array
splitWord.forEach((letter, position) => {

if (guess === letter) {
  console.log("found", position); 
  hiddenAnswer[position] = guess;
} 
console.log(hiddenAnswer)
})

