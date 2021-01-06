// const wordBank = require("./word-bank.json");
const prompt = require("readline-sync");
const wordBankTest = ["kitten", "coat"];

//declare rounds here
  let answerArray = [];
  let correctLetters = [];
  let guessesLeft = 6;
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


function gameState(){
  while (guessesLeft > 6) {
    console.log(`you have ${guessesLeft}`);
  } if (guessesLeft === 0) {
    console.log('game over'); 
  }
}
//GUESS SECTION, prompt and evaluate 


function evaluateGuess(guess) {
  for (let j = 0; j < randomWord.length; j++) {
    if (guess !== randomWord[j]) {
      console.log("Wrong"); 
      guessesLeft--; 
    }
  for (let j = 0; j < randomWord.length; j++) { 
  } if (guess === randomWord[j]) {
      console.log("Correct!");
    //hiddenAnswer.push(guess[j]); 
  }
  }
  if (guess.length !== 1 || !/^[a-z]$/.test(guess)) {
    console.log('Sorry, but you can only guess single letters (a-z)!');
  } 
} 

while (remainingLetters > 0) {
  console.log("Here is a word: " + hiddenAnswer);
  let guess = prompt.question("Please guess a letter: ").toLowerCase();
  evaluateGuess(guess);
}


gameState();

