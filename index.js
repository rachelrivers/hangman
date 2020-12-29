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
 
//making sure a guess is valid

if (guess === null) {
  console.log("Please enter a letter")
  } else { 
  if (guess.length !== 1) {
   console.log("Please enter a single letter.");
  } else { 
  if (correctLetters.includes(guess)) {
  console.log("Letter has already been added, please guess a new letter.");
  } 

// if (/[a-zA-Z]/.test(guess)) {
// console.log("This is NOT a letter");
//  }



//a correct letter guess, push to the hidden array
splitWord.forEach((letter, position) => {

if (guess === letter) {
  console.log("found", position); 
  hiddenAnswer[position] = guess;
} 
console.log(hiddenAnswer)
})


//to add later, note* actual hangman graphic needs to be ABOVE the while loop

// const hangGuy = () => {
// if (guessesLeft == 6) {
//   console.log("|"); 
// }
// if (guessesLeft == 5) {
//   console.log("| /n 0");
// }
// if (guessesLeft == 4) {
//   console.log("| /n0/n\|"); 
// }
// if (guessesLeft == 3) {
//   console.log("| /n0/n\|/");
// }
// if (guessesLeft == 2) {
//   console.log("| /n0/n \|/ /n /");
// }
// if (guessesLeft == 1) {
//   console.log("| /n 0 /n \|/ /n / \");
// }
// }; 