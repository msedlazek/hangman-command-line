

// var Letter = require('./letter.js');

// var Word = function(wrd){
//     this.word = wrd;
//     this.lets = []; //letter objects
//     this.found = false;

//     this.getLets = function() {
//         for(var i = 0; i < this.word.length; i++) {
//             this.lets.push(new Letter(this.word[i]));
//         }
//     };

//     this.wordRender = function() {
//         var str = '';

//         for(var i=0; i < this.lets.length; i++){
//             str += this.lets[i].letterRender();
//         }

//         return str;
//     };
    
//     //found the current word
//     this.didWeFindTheWord = function() {
//         //sets this.found in the word object to true or false if all letter objects have a true value in their appear property
//         this.found = this.lets.every(function(curLet) {
//             return curLet.appear;
//         });

//         console.log(this.found);
//     };

//     this.checkIfLetterFound = function(guessLetter) {
//         var whatToReturn = 0;

//         for(var i = 0; i < this.lets.length; i++) {
//             if (this.lets[i].charac == guessLetter){
//                 this.lets[i].appear = true;
//                 whatToReturn++;
//             }
//         }

//         return whatToReturn;
//     };
// }

// module.exports = Word;


// NOTE TO SELF: only export the function required in the game.js file. Keep all variables contained to this file to work within. The game.js file shouldn't need to extract words for use, it should all be done in this file.

var Letter = require('./Letter.js');

function Word(word){
    this.word = word;
    this.letters = [];
    this.makeAndPushLettersIntoWord = function(){
        for (var i=0; i< this.word.length; i++){
            var lett = new Letter(this.word[i]);
            this.letters.push(lett);
        }
    },
    this.display = function(){
        var str = "";
        for (var i=0; i < this.letters.length; i++){
            str = str + this.letters[i].display();
        }

        return str;
    }
    this.updateLetter = function(guess){
        //check all of the letter objects and see if the guess matches
        //if it does I update that letter's found to true

        //another way
        // var index = this.word.indexOf(guess);
        // if (index > -1) this.letters[index].found = true;

        //one way
        for (var i=0; i<this.letters.length; i++){
            if (this.letters[i].letter == guess) this.letters[i].found = true;
        }
    }
}

// var dog = new Word('dog');
// dog.makeAndPushLettersIntoWord();
// console.log(dog.letters)
// console.log(dog.display())
// dog.updateLetter('z');
// dog.updateLetter('o');
// dog.updateLetter('y');
// console.log(dog.display())

module.exports = Word;