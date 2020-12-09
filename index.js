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
    
    //get underscores
    const hiddenAnswer = []; 
    for (let i = 0; i < splitWord.length; i++) {
     hiddenAnswer[i] = "_";
    }

  //guessing mechanics

  console.log("\nWelcome to Hangman!\nPress ctrl+c to stop\n");

  // while (remainingLetters > 0 && guessesLeft > 0) { 
  //   console.log(hiddenAnswer.join(" "));

  //   let guess = prompt.question("Please guess a letter: ").toLowerCase(); 
  // };

  // //evaluate guess
  // if (guess.length !== 1) {
  //   console.log("Please enter a single letter.");
  // };

