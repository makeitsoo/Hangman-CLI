// * **index.js**: This file contains the logic for running the game, which depends on `Word.js` and 'wordList.js' files. It will randomly select a word and uses the `Word` constructor to store it. Prompts the user for each guess and keeps track of the user's remaining guesses. 

//require inquirer
var inquirer = require('inquirer');
var isLetter = require('is-letter');
//require objects/exports
var Word = require('./Word.js');
var Game = require('./wordList.js');
// var for storing hangman body parts
var hangManDisplay = Game.newWord.hangman;

var hangman = {
  word_List: Game.newWord.wordList,
  guessesRemaining: 10,
  //empty array to hold letters guessed by user. And checks if the user guessed the letter already
  guessedLetters: [],
  //index to display graphic
  display: 0,
  currentWord: null,
  //asks user if they are ready to play
  startGame: function() {
    var here = this;
    //clears guessedLetters before a new game starts if it's not already empty.
    if(this.guessedLetters.length > 0){
      this.guessedLetters = [];
    }

    inquirer.prompt([{
      name: "play",
      type: "confirm",
      message: "Would you like to play Hangman?"
    }]).then(function(answer) {
      if(answer.play){
        here.newGame();
      } else{
        console.log("Chicken");
      }
    })},
  //if they want to play starts new game.
  newGame: function() {
    if(this.guessesRemaining === 10) {
      console.log('\n');
      console.log("Great! I'll give you one HINT: think 90s movies");
      console.log('\n----------------------------------------------');
      console.log('\n');
      //generates random number based on the word_List
      var randNum = Math.floor(Math.random()*this.word_List.length);
      this.currentWord = new Word(this.word_List[randNum]);
      this.currentWord.pushToLetterArray();
      //displays current word as blanks.
      console.log(this.currentWord.wordDisplay());
      this.keepPromptingUser();
    } else{
      this.resetGuessesRemaining();
      this.newGame();
    }
  },
  resetGuessesRemaining: function() {
    this.guessesRemaining = 10;
  },
  keepPromptingUser : function(){
    var here = this;
    // console.log(this);
    //asks player for a letter
    inquirer.prompt([{
      name: "chosenLtr",
      type: "input",
      message: "Choose a letter:",
      validate: function(value) {
        if(isLetter(value)){
          return true;
        } else{
          return false;
        }
      }
    }]).then(function(ltr) {
      //toUpperCase because words in word bank are all caps
      var letterReturned = (ltr.chosenLtr).toUpperCase();
      //adds to the guessedLetters array if it isn't already there
      var guessedAlready = false;
        for(var i = 0; i<here.guessedLetters.length; i++){
          if(letterReturned === here.guessedLetters[i]){
            guessedAlready = true;
          }
        }
        //if the letter wasn't guessed already run through entire function, else reprompt user
        if(guessedAlready === false){
          here.guessedLetters.push(letterReturned);

          var found = here.currentWord.checkLetterBeGuessed(letterReturned);
          //if none were found tell user they were wrong
          if(found === 0){
            here.guessesRemaining--;
            here.display++;
            console.log(hangManDisplay[(here.display)-1]);
            console.log("No, sorry - there are no " + letterReturned + "'s in this word. Try again!");
            console.log('\n---------------------');
            console.log('\n');
            console.log(here.currentWord.wordDisplay());
            console.log('\n---------------------');
            console.log('Guesses remaining: ' + here.guessesRemaining);
            console.log("Letters guessed: " + here.guessedLetters);
          } else{
          	console.log('\n---------------------');
            console.log("Yes! There's atleast one " + letterReturned + "!");
          	console.log('\n');
              //checks to see if user won
              if(here.currentWord.checkWordBeGuessed() === true){
              	// if so, log the word by calling function
                console.log(here.currentWord.wordDisplay());
                console.log("************************************************")
                console.log("Congratulations! You won! Double'r nothin'? ");
 			    console.log('\n************************************************');
                // here.startGame();
              } else{
              	// display word (and _ as currently guessed)
                console.log(here.currentWord.wordDisplay());
                console.log('\n---------------------');
                // display number guesses remaining
                console.log('Guesses remaining: ' + here.guessesRemaining);
                // display letters guessed by user
                console.log("Letters guessed: " + here.guessedLetters);
              }
          }
          if(here.guessesRemaining > 0 && here.currentWord.wordGuessed === false) {
            here.keepPromptingUser();

          }else if(here.guessesRemaining === 0){
          	console.log("************************************************");
            console.log('Game over! Sorry, you lose...');
            console.log('The correct word was: ' + here.currentWord.word);
          	console.log("************************************************");
          }
        } else{
            console.log("You've already guessed here letter. You should really work on your short term memory. Pick another letter!");
            here.keepPromptingUser();
          }
    });
  }
}

hangman.startGame();

