var Letter = require("./Letter");


var Word = function(werd) {
	// store word as string
	var here = this;
	this.word = werd;
	// console.log(this.word);
	this.letterArray = [];
	this.wordGuessed = false;
	// take new letter and push into array representing underlying word
	this.pushToLetterArray = function() {
		for (var i = 0; i < this.word.length; i++) {
			var newLetter = new Letter(this.word[i]);
			this.letterArray.push(newLetter);
		}

	}
	// method here checks each letter in word to see if all letters have been guessed
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
	    		lttr.guessed = true;
	    		whatToReturn++;
	  		}
		})
		//if guessLetter matches Letter property, the letter object should be shown
		return whatToReturn;
	};
	this.wordDisplay = function() {
		var display = '';
		//render the word based on if letters are found or not
		here.letterArray.forEach(function(lttr){
			var currentLetter = lttr.letterDisplay();
			display+= currentLetter;
		});
		return display;
	};
}

module.exports = Word;

