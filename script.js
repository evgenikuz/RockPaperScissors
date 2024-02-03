let gestureArray = ['камень', 'ножницы', 'бумага'];
let playerChoiceBlock = document.querySelector('.player-choice');
let rock = document.querySelector('.button__rock');
let paper = document.querySelector('.button__paper');
let scissors = document.querySelector('.button__scissors');
let computer = document.querySelector('#computer-score');
let player = document.querySelector('#player-score');
let gameFinal = document.querySelector('.game__final');
let nextRoundButton = document.querySelector('.game__next-round');
let restartButton = document.querySelector('.game__restart');
let aiIdle = document.querySelector('.ai_idle');
let humanIdle = document.querySelector('.human_idle');
let aiRock = document.querySelector('.ai_rock');
let humanRock = document.querySelector('.human_rock');
let aiPaper = document.querySelector('.ai_paper');
let humanPaper = document.querySelector('.human_paper');
let aiScissors = document.querySelector('.ai_scissors');
let humanScissors = document.querySelector('.human_scissors');


let playerChoice;
let computerWins = 0;
let playerWins = 0;

rock.addEventListener('click', function() {
    playerChoice = 'камень';
    playGame();
    
});
paper.addEventListener('click', function() {
    playerChoice = 'бумага';
    playGame();
});
scissors.addEventListener('click', function() {
    playerChoice = 'ножницы';
    playGame();

});
let playGame = () => {
    aiIdle.classList.remove('d-none');
    humanIdle.classList.remove('d-none');
    aiRock.classList.add('d-none')
    aiPaper.classList.add('d-none')
    aiScissors.classList.add('d-none')
    humanRock.classList.add('d-none')
    humanPaper.classList.add('d-none')
    humanScissors.classList.add('d-none')
    aiIdle.classList.add('ai-animation');
    humanIdle.classList.add('human-animation');
    setTimeout(() => rpsGame(), 3000);
    setTimeout(() => aiIdle.classList.remove('ai-animation'), 3000);
    setTimeout(() => humanIdle.classList.remove('human-animation'), 3000);
}

let rpsGame = () => {
    let computerGesture = gestureArray[Math.floor(Math.random() * 3)]
    aiIdle.classList.add('d-none');
    humanIdle.classList.add('d-none');
    showGestureAi(computerGesture); // убирает d-none
    showGestureHuman(playerChoice); // убирает d-none
    console.log(computerGesture)
    if (computerGesture === playerChoice) {
        computerWins++;
        computer.textContent = computerWins;
        playerWins++;
        player.textContent = playerWins;
        gameFinal.classList.remove('d-none');
        playerChoiceBlock.classList.add('d-none');
        nextRoundButton.addEventListener('click', function() {
            gameFinal.classList.add('d-none');
            playerChoiceBlock.classList.remove('d-none');
        });
        restartButton.addEventListener('click', function() {
            computerWins = 0;
            computer.textContent = computerWins;
            playerWins = 0;
            player.textContent = playerWins;
            gameFinal.classList.add('d-none');
            playerChoiceBlock.classList.remove('d-none');

        })
        aiIdle.classList.remove('d-none');
        humanIdle.classList.remove('d-none');
        showGestureAi(computerGesture); //добавляет d-none
        showGestureHuman(playerChoice);//добавляет d-none
    } else {
        if (comparisonOfGestures(computerGesture, playerChoice) === computerGesture) {
            computerWins++;
            computer.textContent = computerWins;
        } else {
            playerWins++;
            player.textContent = playerWins;
        }
    }

}

let showGestureAi = (gesture) => {
    if (gesture === 'камень') {
        aiRock.classList.toggle('d-none')
    } else if (gesture === 'ножницы') {
        aiScissors.classList.toggle('d-none')
    } else if (gesture === 'бумага') {
        aiPaper.classList.toggle('d-none')
    }
}
let showGestureHuman = (gesture) => {
    if (gesture === 'камень') {
        humanRock.classList.toggle('d-none')
    } else if (gesture === 'ножницы') {
        humanScissors.classList.toggle('d-none')
    } else if (gesture === 'бумага') {
        humanPaper.classList.toggle('d-none')
    }
}

let comparisonOfGestures = (x, y) => {
    if (x === 'камень') {
        if (y === 'ножницы') {
            return x
        } else if (y === 'бумага') {
            return y
        }
    } else if (x === 'ножницы') {
        if (y === 'камень') {
            return y
        } else if (y === 'бумага') {
            return x
        }
    } else if (x === 'бумага') {
        if (y === 'ножницы') {
            return y
        } else if (y === 'камень') {
            return x
        }
    }
}