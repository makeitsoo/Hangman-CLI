// * **Letter.js**: Contains a constructor, Letter. This constructor  either displays the underlying character or a blank placeholder (an underscore), depending on whether or not the user has guessed the letter. 

/// Letter.js determines whether users guess is correct and if it is displays letter, else returns "_" 


// CONSTRUCTOR FUNCTION
var Letter = function(ltr) {
  // property to store the letter
  this.letter = ltr;
  // property/boolean if the letter can be shown
  this.guessed = false;
  // function (method)
  this.letterDisplay = function() {
    if(this.letter == ' '){ 
      //makes sure that when the function checks if the word is found doesn't read the blank as false.
      this.guessed = true;
      return '  ';
    }if(this.guessed === false){ /*if it isn't guessed, it returns a ' _ '*/
      return ' _ ';
    } else{ /*otherwise it just displays as itself*/
      return this.letter;
    }
  };
};

// export to use in word.js
module.exports = Letter;