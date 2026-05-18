function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return 'stone';
    }

    if (randomNumber === 1) {
        return 'paper';
    }

    return 'scissors';
}

function getResult(userMove, computerMove) {
    if (userMove === computerMove) {
        return 'It is a tie.';
    }

   else if (
        (userMove === 'stone' && computerMove === 'scissors') ||
        (userMove === 'paper' && computerMove === 'stone') ||
        (userMove === 'scissors' && computerMove === 'paper')
    ) {
        return 'You won.';
    }
    else {
        return 'Computer won.';
    }
}

function playGame(userMove) {
    const computerChoice = getComputerChoice();
    const resultMsg = getResult(userMove, computerChoice);

    alert('You chose ' + userMove + '. Computer chose ' + computerChoice + '. ' + resultMsg);
}

document.querySelector('#stone').addEventListener('click', function () {
    playGame('stone');
});

document.querySelector('#paper').addEventListener('click', function () {
    playGame('paper');
});

document.querySelector('#scissor').addEventListener('click', function () {
    playGame('scissors');
});
