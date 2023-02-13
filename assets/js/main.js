const roundsInput = document.querySelector("#roundsInput")
const customInput = document.querySelector("#customInput")
const numberInput = document.querySelector("#numberInput")
const inputButton = document.querySelector("#inputButton")
const outputRounds = document.querySelector("#outputRounds")
const outputResult = document.querySelector("#outputResult")


let roundsToPlay = 4
let roundsPlayed = 0
let randomNumber = Math.floor(Math.random() * 100) + 1
let guessedNumber
console.log(randomNumber)

roundsInput.addEventListener('change', (e) => {
    if(e.target.value != "custom"){
        roundsToPlay = Number(e.target.value)
        console.log(roundsToPlay)
    }else{
        customInput.style.display="block"
        roundsToPlay = Number(e.target.value)
    }
})

inputButton.addEventListener('click' , () => {
    roundsInput.style.display="none"
    outputRounds.style.display="block"
    outputRounds.textContent=`${roundsPlayed}/${roundsToPlay}`
    guessedNumber = Number(numberInput.value)
    console.log(guessedNumber)
    if(guessedNumber < 1 || guessedNumber > 100){
        alert("guess a number between 1 and 100!")
    }else{
        roundsPlayed++
        if(guessedNumber === randomNumber){
            outputResult.innerHTML=`That is the right Number`
        }else if(guessedNumber < randomNumber){
            outputResult.innerHTML+=`${roundsPlayed} You need to guess higher than ${guessedNumber}<br>`
        }else if (guessedNumber > randomNumber){
            outputResult.innerHTML+=`${roundsPlayed} You need to guess lower than ${guessedNumber}<br>`
        }
    }
})