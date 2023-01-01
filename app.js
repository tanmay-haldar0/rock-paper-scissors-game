const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.innerHTML
    userChoiceDisplay.innerHTML= userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)+1 // or you can use possibleChoice.length
    console.log(randomNumber) 

    if (randomNumber === 1) {
        computerChoice = 'Rock'

    }
    if (randomNumber === 2) {
        computerChoice = 'Paper'
 
    }
    if (randomNumber === 3) {
        computerChoice = 'Scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice){
        result = "it's a draw!"
    }
    if (computerChoice === 'Rock' && userChoice === 'Paper'){
        result = "You have won!"
    }
    if (computerChoice === 'Rock' && userChoice === 'Scissors'){
        result = "You have lost!"
    }
    if (computerChoice === 'Paper' && userChoice === 'Scissors'){
        result = "You have won!"
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock'){
        result = "You lost!"
    }
    if (computerChoice === 'Scissors' && userChoice === 'Rock'){
        result = "You have won!"
    }
    if (computerChoice === 'Scissors' && userChoice === 'Paper'){
        result = "You lost!"
    }
    resultDisplay.innerHTML = result
}
