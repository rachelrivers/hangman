
//defining 
let wins = 0;
let losses = 0;
guessesLeft = 6;
let wordProgress = []; 

//pick a random word
const randomWord =  wordBankTest[Math.floor(Math.random() * wordBankTest.length)];

//answer array
const answerArray = []; 
for (let i = 0; i < randomWord.length; i++) {
  answerArray[i] = "_";
}

const remainingLetters = randomWord.length; 

correctLetters = [];

//the play loop
while (remainingLetters > 0) {
  falseFlag = false;
  
  //player progress here 

  //guess
  let guess = prompt.question("Please guess a letter: ");
  if (guess === null) {
    console.log("Please enter a letter")
  }
  guess = guess.toLowerCase();
  if (guess.length !== 1 || !/[a-z]/.test(guess)) {
    console.log("Please enter a single letter.");
  } else if (correctLetters.includes(guess)) {
    console.log("Letter has already been added. -1 life.");
    guessesLeft--;
  } else {
    //match guess
    splitWord.forEach((letter, position) => {

      if (guess === letter) {
        console.log("found", position); 
        hiddenAnswer[position] = guess;
      } 
      console.log(hiddenAnswer)
      })
      
  }
    //wrong guess
  }
  //game over
  if (guessesLeft < 1) {
    console.log("Game over")
  }
  //end loop
}

//win 
if (remainingLetters == 0) {
  console.log("good work. the correct answer was " + answerArray.join("") + randomWord);
}
