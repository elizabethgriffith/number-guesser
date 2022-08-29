// Game Values
let min = 1,
    max = 10,
    winningNumber = randomNumber(min, max),
    guessesLeft;

// UI Variables
const numOfGuesses = document.querySelector('#numOfGuesses')
      numSubmitBtn = document.querySelector('#numSubmitBtn')

function randomNumber(min, max){
  return Math.floor(Math.random()*(max-min+1) + min)
}

// Load Event Listeners
numSubmitBtn.addEventListener('click', saveNumOfGuesses)



// Create function to check for correct inputs

// Store numOfGuesses input
function saveNumOfGuesses(e){
  if (numOfGuesses.value === 'select'){
    alert("You must select one, two, or three!")
  }


  if (numOfGuesses.value === 'oneGuess'){
    guessesLeft = 1
  } else if (numOfGuesses.value === 'twoGuesses'){
    guessesLeft = 2
  } else if (numOfGuesses.value === 'threeGuesses'){
    guessesLeft = 3
  }
  console.log(guessesLeft)
}
