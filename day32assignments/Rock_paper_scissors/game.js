const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorskBtn = document.getElementById('scissors');

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


// Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3

function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}

// Define two objects for two players. Each player has name and getHand() properties.

let player1 = { name: 'Player 1', getHand: getHand()};

let player2 = { name: 'Player 2', getHand: getHand()};



function playRound(userOption) {
    console.log('Hands')
    console.log(player1.name + "'s hand: " + player1.getHand);
    console.log(player2.name + "'s hand: " + player2.getHand);

    
    if (player1.getHand === player2.getHand) {
        console.log("It's a tie!");
        return null;

    } else if ((player1.getHand === 'rock' && player2.getHand === 'scissors') ||
               (player1.getHand === 'paper' && player2.getHand === 'rock') ||
                (player1.getHand === 'scissors' && player2.getHand === 'paper')) 
                {
                console.log(player1.name + " wins with: " + player1.getHand + ' against ' + player2.getHand+'.');
                return player1;
    } else if   ((player2.getHand === 'rock' && player1.getHand === 'scissors') ||
                (player2.getHand === 'paper' && player1.getHand === 'rock') ||
                (player2.getHand === 'scissors' && player1.getHand === 'paper')) 
            {
            console.log(player2.name + ' wins with '+player2.getHand+' against '+player1.getHand+'.');
            return player2;
        }  
           
        }
    
 playRound(player1, player2);