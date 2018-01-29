// * **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

//   * A string value to store the underlying character for the letter

//   * A boolean value that stores whether that letter has been guessed yet

//   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

//   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly


// `Letter.js` *should not* `require` any other files.

// **HINT:** Write `Letter.js` first and test it on its own before moving on, then do the same thing with `Word.js`

// **HINT:** If you name your letter's display function `toString`, JavaScript will call that function automatically whenever casting that object to a string (check out this example: https://jsbin.com/facawetume/edit?js,console) --> also see this: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toString


/// All Letter function does is hold value of a letter, display either this letter or underscore when user guesses a letter



// var Letter = function() {
// 	this.letter = letter;
// 	this.guessed = false;
// 	this.printResult = function() {
// 		// function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// 	}
// 	this.letterCheck = function(this.letter) {
// 		// function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
// 	}
// }

// module.exports = Letter;



var Letter = function(lett){
	this.charac = lett;
	this.appear = false;
	this.letterRender = function(){
		return !(this.appear) ? "_" : this.charac;
	};
};

//export the constructor
module.exports = Letter;
