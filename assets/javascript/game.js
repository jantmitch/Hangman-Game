
var win = 0
var loss = 0
var words = ["albatross", "eagle", "birdie", "par"];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuessWrong = [];
var userGuessRight =[];
var unsolved = [];



document.onKeyUp = function(event) {

    // Determines which key was pressed.

    var anyKey = event.key;

        }

    var userWord = words[Math.floor(Math.random() * words.length)];
            // console.log(userWord);




function createUnsolved() {

    for (var i = 0; i < userWord.length; i++){
    unsolved.push('_');
        }
        return unsolved;
    }

if(userGuessRight === letters)
    else alert("Please choose a letter");


    // console.log(unsolved);
    // document.getElementById(unsolved).innerHTML;

if(unsolved.indexOf(userWord) > -1);
    // console.log(true);
        userGuessRight.push(unsolved);
    else(userGuessWrong.push(unsolved));







// if(userGuess === a, word1.length = 0, "a")
    //     else(userGuessWrong);
    // if(userGuess === l, word1.length = 1, "l")
    //     else(userGuessWrong);
    // if(userGuess === b, word1.length = 2, "b")
    //     else(userGuessWrong);
    // if(userGuess === a, word1.length = 3, "a")
    //     else(userGuessWrong);
    // if(userGuess === t; word1.length = 4, "t")
    //     else(userGuessWrong);
    // if(userGuess === r, word1.length = 5, "r")
    //     else(userGuessWrong);
    // if(userGuess === o; word1.length = 6, "o")
    //     else(userGuessWrong);
    // if(userGuess === s, word1.length = 7 && word1.length = 8, "s")








// document.getElementById("hangman").innerHTML =`
//       <p>You chose: </p>
//       <p>Wins: </p>
//       <p>Losses: </p>
//
//
// if (userGuess === ){
//
//         } else if (userGuess === "r" && computerGuess === "s"){
//
//
//           } else if (userGuess === "s" && computerGuess === "p") {
//
//
//
//             } else if(userGuess === "p" && computerGuess === "s"){
//
