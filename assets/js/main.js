const roundsInput = document.querySelector("#roundsInput")
const customInput = document.querySelector("#customInput")
const numberInput = document.querySelector("#numberInput")
const inputButton = document.querySelector("#inputButton")
const outputRounds = document.querySelector("#outputRounds")
const outputResult = document.querySelector("#outputResult")
const restartButton = document.querySelector("#restartButton")
//global variables
let roundsToPlay = 4
let roundsPlayed = 0
let randomNumber = Math.floor(Math.random() * 100) + 1
let guessedNumber
//get value of rounds input
roundsInput.addEventListener('change', (e) => {
    if(e.target.value != "custom"){
        roundsToPlay = Number(e.target.value)
        console.log(roundsToPlay)
    }else{
        customInput.style.display="block"
        roundsToPlay = Number(e.target.value)
    }
})
//checks number and compares with randomNumber && checks for played rounds
inputButton.addEventListener('click' , () => {
    roundsInput.style.display="none"
    outputRounds.style.display="block"
    outputRounds.textContent=`${roundsPlayed}/${roundsToPlay}`
    guessedNumber = Number(numberInput.value)
    console.log(guessedNumber)
    if(guessedNumber < 1 || guessedNumber > 100){
        alert("guess a number between 1 and 100!")
    }else if(roundsPlayed === roundsToPlay && guessedNumber != randomNumber){
        outputResult.innerHTML= `${roundsPlayed} You loose try again`
        inputButton.style.display="none"
        restartButton.style.display="block"
    }else{
        roundsPlayed++
        if(guessedNumber === randomNumber){
            outputResult.innerHTML=`That is the right Number you Win`
            restartButton.style.display="block"
            inputButton.style.display="none"
        }else if(guessedNumber < randomNumber){
            outputResult.innerHTML+=`${roundsPlayed} You need to guess higher than ${guessedNumber}<br>`
        }else if (guessedNumber > randomNumber){
            outputResult.innerHTML+=`${roundsPlayed} You need to guess lower than ${guessedNumber}<br>`
        }
    }
})