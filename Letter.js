// var Letter = function(let) {
//     // this is just the letter passed in, from Word
//     this.charac = let;
//     // this will set "found" to false starting
//     this.appear = false;
//     // This function will check if the letter is found and either display the letter or and _
//     this.letterRender = function() {
//         if (this.found) return " " + this.letter + " ";
//         else return ' _ ';
//     };
// };

// module.exports = Letter;

function Letter(letter){
    this.letter = letter;
    this.found = false;
    this.display = function(){
        if (this.found) return " " + this.letter + " ";
        else return ' _ ';
    }
}

module.exports = Letter;