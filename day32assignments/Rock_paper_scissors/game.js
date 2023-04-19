const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorskBtn = document.getElementById('scissors');
const resultText = document.getElementById('start-text');
const userOptionText = document.getElementById('user-option');
const computerOption = document.getElementById('computer-option');

rockBtn.addEventListener('click', () => {
    play(ROCK);
});

paperBtn.addEventListener('click', () => {
    play(PAPER);
});

scissorskBtn.addEventListener('click', () => {
    play(SCISSORS);
});


const hands = ['rock', 'paper', 'scissors'];


function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}

let player2 = { name: 'Computer', getHand: getHand()};

function play(userOption) {
    const result = playRound(userOption, player2);
    userOptionText.innerHTML = userOption;
}

function playRound(userOption, player2) {
    console.log('Hands')
    console.log("your hand: " + userOption);
    console.log(player2.name + "'s hand: " + player2.getHand);

    
    if (userOption === player2.getHand) {
        resultText.innerHTML = "It's a tie!";
        console.log("It's a tie!");
        return null;

    } else if ((userOption === ROCK && player2.getHand === 'scissors') ||
               (userOption === PAPER && player2.getHand === 'rock') ||
                (userOption === SCISSORS && player2.getHand === 'paper')) 
                {
                resultText.innerHTML = "You win with!";
                console.log("You win with: " + userOption + ' against ' + player2.getHand+'.');
                return userOption;
                
    } else if   ((player2.getHand === 'rock' && userOption === SCISSORS) ||
                (player2.getHand === 'paper' && userOption === ROCK) ||
                (player2.getHand === 'scissors' && userOption === PAPER)) 
            {
                resultText.innerHTML = "Computer wins!";
            console.log(player2.name + ' wins with '+player2.getHand+' against '+userOption+'.');
            return player2;
        }  
           
        }
    
       