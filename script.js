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


let playerChoice;
let computerWins = 0;
let playerWins = 0;

rock.addEventListener('click', function() {
    playerChoice = 'камень';
    rpsGame();
});
paper.addEventListener('click', function() {
    playerChoice = 'бумага';
    rpsGame();
});
scissors.addEventListener('click', function() {
    playerChoice = 'ножницы';
    rpsGame();
});

let rpsGame = () => {
    let computerGesture = gestureArray[Math.floor(Math.random() * 3)]
    console.log(computerGesture)
    if (computerGesture === playerChoice) {
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