// const wordBank = require("./word-bank.json");
const prompt = require("readline-sync");
const wordBankTest = ["monkey", "parrot"];

console.log("\nWelcome to Hangman!\nPress ctrl+c to stop\n");


//defining variables
let wins = 0;
let losses = 0;
guessesLeft = 6;
let wordProgress = []; 
guessed = [];

//pick a random word
const randomWord =  wordBankTest[Math.floor(Math.random() * wordBankTest.length)];

//answer array
const answerArray = []; 
for (let i = 0; i < randomWord.length; i++) {
  answerArray[i] = "_";
}

const remainingLetters = randomWord.length; 
const wordLetters = randomWord.split("");

correctLetters = [];

//the play loop




while (remainingLetters > 0) {
  
//player progress here 

  //guess
  let guess = prompt.question("Please guess a letter: ");
  if (guess === null) {
    console.log("Please enter a letter")
  }
  guess = guess.toLowerCase();
  if (guess.length !== 1) {
    console.log("Please enter a single letter.");
  } else if (correctLetters.includes(guess)) {
    console.log("Letter has already been added, please");
  } else {
    //match guess
    for (j = 0; j < randomWord.length; j++) {
      if (randomWord[j] === guess) {
        wordLetters[j] = guess; 
        remainingLetters--;
        correctLetters.push(guess);
      } 
    } 
  }
  if (guess != wordLetters) {
    console.log("Wrong");
    guessesLeft--;
  }
  //game over
  if (guessesLeft < 1) {
    console.log("Game over")
  }
  //end loop
}

// if (/[a-zA-Z]/.test(userInput)) {
//   // Do something in here
//   console.log("This is a letter");
// } else if (/[^a-zA-Z]/.test(userInput)) {
//   // Do something here
//   console.log("This is NOT a letter");
// }

//win 
if (remainingLetters == 0) {
  console.log("good work. the correct answer was " + answerArray.join("") + randomWord);
}

//rounds/counter display 


//actual hangman graphic

const hangGuy = () => {
if (guessesLeft == 6) {
  console.log("|"); 
}
if (guessesLeft == 5) {
  console.log("| /n 0");
}
if (guessesLeft == 4) {
  console.log("| /n0/n\|"); 
}
if (guessesLeft == 3) {
  console.log("| /n0/n\|/");
}
if (guessesLeft == 2) {
  console.log("| /n0/n \|/ /n /");
}
if (guessesLeft == 1) {
  console.log("| /n 0 /n \|/ /n / \");
}
}; 