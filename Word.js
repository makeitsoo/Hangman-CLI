// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)


// `Word.js` *should only* require `Letter.js`

// var Letter = require("./Letter");


// var Word = function(werd) {
// 	this.newLetter = new Letter();
// 	this.letterArray = function() {
// 		// take new letter and push into array representing underlying word
// 		var letterArr = [];
// 		letterArr.push(this.newLetter);
// 		console.log(letterArr);
// 	}
// 	this.printWordString = function() {
// 		// function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
// 	}
// 	this.newLetterCheck = function(letter) {
// 		var newLetterCheck = new Letter(letter);
// 		// function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
// 		newLetterCheck.LetterCheck();
// 		console.log(newLetterCheck.LetterCheck());

// 	}
// }

// module.exports = Word;



/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var Letter = require("./Letter");


var Word = function(werd) {
	// store word as string
	var that = this;
	this.word = werd;
	console.log(this.word);
	this.letterArray = [];
	this.wordGuessed = false;
	// take new letter and push into array representing underlying word
	this.pushToLetterArray = function() {
		for (var i = 0; i < this.word.length; i++) {
			var newLetter = new Letter(this.word[i]);
			this.letterArray.push(newLetter);
		}

	}
	// method that checks each letter in word to see if all letters have been guessed
	this.checkWordBeGuessed = function() {
		if(this.letterArray.every(function(lttr) {
			return lttr.guessed === true;
		})) {
			this.wordGuessed = true;
			return true;
		}
	}
	this.checkLetterBeGuessed = function(guessedLetter) {
		var whatToReturn = 0;
	//iterates through each letter to see if it matches the guessed letter
		this.letterArray.forEach(function(lttr){
	  		if(lttr.letter === guessedLetter){
	    		lttr.appear = true;
	    		whatToReturn++;
	  		}
		})
		//if guessLetter matches Letter property, the letter object should be shown
		return whatToReturn;
	};
	this.wordDisplay = function() {
		var display = '';
		//render the word based on if letters are found or not
		that.letterArray.forEach(function(lttr){
			var currentLetter = lttr.letterDisplay();
			display+= currentLetter;
		});
		return display;
	};
}

module.exports = Word;

