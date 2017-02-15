// var Word = require('./Word.js')
// var inquirer = require('inquirer');

// var words = ['Nuclear', 'Mutant', 'Ghoul', 'Vault', 'Wasteland', 'Enclave', 'Deathclaw', 'Brotherhood']
// var currentWord = words[Math.floor(Math.random() * words.length)]

// var wordObject = new Word(currentWord);
// wordObject.getLets();
// console.log(wordObject.wordRender());

// function askLetter(){
//     inquirer.prompt([
//     {
//     type: "input",
//     name: "guess",
//     message: "What letter do you guess? If you are done then say no."},
//     ]).then(function(data){
//         if (data.guess != 'no') {
//             wordObject.checkIfLetterFound(data.guess);

//             console.log(wordObject.didWeFindTheWord());

//             askLetter();
//         }
//     });
// }

// askLetter();

var inquirer = require('inquirer')
var Word = require('./Word.js');

var words = ['jeff', 'john', 'rhyna'];

var wordToPlay = words[Math.floor(Math.random()*words.length)];

var wordObject = new Word(wordToPlay);
wordObject.makeAndPushLettersIntoWord();
console.log(wordObject.display());

function askLetter(){
    inquirer.prompt([
    {
    type: "input",
    name: "guess",
    message: "What letter do you guess? If you are done then say no."},
    ]).then(function(data){
        if (data.guess != 'no') {
            wordObject.updateLetter(data.guess);

            console.log(wordObject.display());

            askLetter();
        }
    });
}

askLetter();