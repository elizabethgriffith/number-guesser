// Game Values
let min = 1,
    max = 10,
    winningNumber = randomNumber(min, max),
    guessesLeft;

// UI Variables
const numOfGuesses = document.querySelector('#numOfGuesses')
      numSubmitBtn = document.querySelector('#numSubmitBtn')
      guessBtn = document.querySelector('#guessBtn')
      guessInput = document.querySelector('#guessInput')
      message = document.querySelector('.message')

function randomNumber(min, max){
  return Math.floor(Math.random()*(max-min+1) + min)
}

// Load Event Listeners
numSubmitBtn.addEventListener('click', saveNumOfGuesses)
guessBtn.addEventListener('click', validateGuess)

// Store numOfGuesses input
function saveNumOfGuesses(e){
  // Validate inputs
  if (numOfGuesses.value === 'select'){
    alert("You must select one, two, or three!")
  }

  // Store input into guessesLeft
  if (numOfGuesses.value === 'oneGuess'){
    guessesLeft = 1
  } else if (numOfGuesses.value === 'twoGuesses'){
    guessesLeft = 2
  } else if (numOfGuesses.value === 'threeGuesses'){
    guessesLeft = 3
  }
  console.log(guessesLeft)

  // Lock input
}

function validateGuess(){
  let guess = parseInt(guessInput.value)
  console.log(guess, min, max)

  // Validate input
  if (isNaN(guess) || guess < min || guess > max){
    setMessage('Please enter a number between 1 and 10.', 'red')
    guessInput.value = ''
  } else {
    checkGuess(guess)
  }
}

// Check guess
function checkGuess(guess){
  if (guess === winningNumber){
    gameOver(true, `Woop! Woop! ${winningNumber} is correct!`)
  } else {
    guessesLeft -= 1
    // Check for remaining guesses
    if (guessesLeft === 0){
      gameOver(false, `Womp womp. You are out of guesses. The correct number was ${winningNumber}. Better luck next time!`)
    } else {
      guessInput.style.borderColor = 'red'
      guessInput.value = ''
      setMessage(`${guess} is incorrect. You have ${guessesLeft} guesses remaining.`, 'red')
    }
  }
}
  
// Create setMessage function 
function setMessage(msg, color){
  message.textContent = msg
  message.color = color
}
// Create gameOver function