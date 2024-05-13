//variables/classes-----
let title = document.querySelector('.title .message').textContent,//for titling the game result situation
    score = document.querySelector('.score').textContent,//for changing the score countdown
    turn = document.querySelector('.turn').textContent,//showing the turn and the result of computer choose
    playerChoice = null,//player choice
    button = document.querySelector('.c-btn'),//hitting the button
    playerScore = 0,
    computerScore = 0;
//Event listeners---------
button.addEventListener('click', matchStart)

//functions--------------
function matchStart(e){
    e.preventDefault()
    console.log(e.target)
    playerChoice = document.querySelector('input[name="inlineRadioOptions"]:checked');
    if (playerChoice) {
        /*console.log(`Selected value: ${playerChoice.value}`);*/
        let pcChoice = Math.floor(Math.random()*3)+1//selecting random choice of pc
        switch (pcChoice) {
            case 1: pcChoice = 'rock'
                break
            case 2: pcChoice = 'paper'
                break
            case 3: pcChoice = 'scissors'
                break
        }
        //calculating result
        result(playerChoice.value, pcChoice)
    } else {
        /*console.log("No radio button is selected.");*/
        //alert that nothing has been selected
        alert('You need to select one option in order to start the game!')
        location.reload()//reload the page
    }
}

function result(playerChoice, pcChoice){
    console.log(playerChoice, pcChoice)
}