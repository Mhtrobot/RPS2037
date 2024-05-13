//variables/classes-----
let playerChoice = null,//player choice
    button = document.querySelector('.c-btn'),//hitting the button
    playerScore = 0,
    computerScore = 0;
//Event listeners---------
button.addEventListener('click', matchStart)

//functions--------------
function matchStart(e){
    e.preventDefault()
    /*console.log(e.target)*/
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
    /*console.log(playerChoice, pcChoice)*/
    let winResult = null
    if (playerChoice === pcChoice)
        winResult = 'draw'
    if (playerChoice === 'rock'){
        switch (pcChoice) {
            case 'paper':
                winResult = 'pc'
                break
            case 'scissors':
                winResult = 'player'
                break
        }
    }else if (playerChoice === 'paper'){
        switch (pcChoice) {
            case 'rock':
                winResult = 'player'
                break
            case 'scissors':
                winResult = 'pc'
                break
        }
    }else{
        switch (pcChoice) {
            case 'paper':
                winResult = 'player'
                break
            case 'rock':
                winResult = 'pc'
                break
        }
    }
    changeUi(winResult, pcChoice)
}

function changeUi(winResult, pcChoice){
    /*console.log(winResult)*/
    switch (winResult) {
        case 'draw':
            document.querySelector('.title .message').textContent  = 'DRAW' //for titling the game result situation
            document.querySelector('.title .message').style.color = 'white'
            break;
        case 'player':
            document.querySelector('.title .message').textContent  = 'You Win!'
            document.querySelector('.title .message').style.color = 'green'
            playerScore++;
            break;
        case 'pc':
            document.querySelector('.title .message').textContent  = 'You Lost!'
            document.querySelector('.title .message').style.color = 'red'
            computerScore++;
            break;
    }
    document.querySelector('.turn').textContent = `Computer Chose ${pcChoice}`//showing the turn and the result of computer choise
    document.querySelector('.score').textContent  = `You ${playerScore}:${computerScore} Ai`;//for changing the score countdown
    button.textContent = 'PLAY AGAIN'
}