
var win = 0;
var loss = 0;
var guessesRemain = 10;
var words = ["albatross", "eagle", "birdie", "par"];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuessWrong = [];
var unsolved = [];
var userGuess = [];

var userWord = words[Math.floor(Math.random() * words.length)];
        console.log(userWord);

// Creates a word and underscores for the user
function createUnsolved() {

    for (var i = 0; i < userWord.length; i++) {
        unsolved.push('_');
    }
    document.getElementById("unsolved").innerHTML = unsolved.join(" ");


    userGuessWrong = [];
    // guessesRemain = 10;

    document.getElementById("wrong-guess").innerHTML = userGuessWrong;
    document.getElementById("guesses-remain").innerHTML = guessesRemain;

};

document.onkeyup = function(event) {

    // console.log("function started");

    // Determines which key was pressed.

     userGuess = event.key;

    if (letters.indexOf(userGuess) > -1) {

    }   else {
            alert("Please choose a letter!");

    }
    // Does the letter exist in the word
    if (userWord.indexOf(userGuess) > -1) {

        for (i = 0; i < userWord.length; i++) {

            if (userWord[i] === userGuess) {

                unsolved[i] = userGuess;
                // console.log(unsolved);
            }

        }

    // If it does not, put the letter in the wrong guess area
    }    else {

        userGuessWrong.push(userGuess);
        guessesRemain--;
        console.log(guessesRemain);
    }
        document.getElementById("unsolved").innerHTML = unsolved.join(' ');
        document.getElementById("wrong-guess").innerHTML = userGuessWrong.join(' ');
        document.getElementById('guesses-remain').innerHTML = guessesRemain;



};

function winOrLose () {
    if (unsolved.every === (userWord)) {
        win++;
    } else {
        loss++;
    }
    console.log(win);
    console.log(loss);
}



createUnsolved();



// console.log(unsolved);










// function checkGuess () {
//
//     if ()
//     else alert("Please choose a letter");
//     }

    // console.log(unsolved);
    // document.getElementById(unsolved).innerHTML;

// if(unsolved.indexOf(userWord) > -1);
//     // console.log(true);
//         userGuessRight.push(unsolved);
//     else(userGuessWrong.push(unsolved));







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
