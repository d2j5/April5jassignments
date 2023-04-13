
const hands = ['rock', 'paper', 'scissors'];

// Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3

function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}

// Define two objects for two players. Each player has name and getHand() properties.

let player1 = { name: 'Player 1', getHand: 0, score: 0,};

let player2 = { name: 'Player 2', getHand: 0, score: 0,};

let player3 = { name: 'Player 3', getHand: 0, score: 0,};

let player4 = { name: 'Player 4', getHand: 0, score: 0,};

// Define a function called playRound() that
// Takes two player objects as arguments
// Gets hands from each
// Determines the winner
// Logs the hands played and name of the winner.
// If its a tie, log the hands played and "it's a tie".
// Returns the winner object (null if no winner)

function playRound(player1, player2) {
    // 
    let hand1 = getHand();
    let hand2 = getHand();

    player1.getHand = hand1;
    player2.getHand = hand2;
    
    console.log('Hands')
    console.log(player1.name + "'s hand: " + player1.getHand);
    console.log(player2.name + "'s hand: " + player2.getHand);

    if (player1.getHand === player2.getHand) {
        console.log("It's a tie!");
        return null;

    } else if (player1.getHand === 'rock') {
        if (player2.getHand === 'paper') {
            player2.score++;
            console.log(player2.name + ' wins with paper!');
            return player2;
        } else if (player2.getHand === 'scissors') {
            console.log(player1.name + ' wins with rock!');
            player1.score++;
            return player1;
        }

    } else if (player1.getHand === 'paper') {
        if (player2.getHand === 'scissors') {
            console.log(player2.name + ' wins with scissors!');
            player2.score++;
            return player2;
        } else if (player2.getHand === 'rock') {
            console.log(player1.name + ' wins with paper!');
            player1.score++;
            return player1;
        }

    } else if (player1.getHand === 'scissors') {
        if (player2.getHand === 'rock') {
            console.log(player2.name + ' wins with rock!');
            player2.score++;
            return player2;
        } else if (player2.getHand === 'paper') {
            console.log(player1.name + ' wins with scissors!');
            player1.score++;
            return player1;
        }
    }

}


 playRound(player1, player2);

//Define a function called playGame() that takes arguments player1, player2, and playUntil.
// Play rounds until one of the players wins playUntil hands
// When one player has won enough games, return the winning player object
// Play a game to 5 wins

function playGame(player1, player2, playUntil) {
    
    
    while (player1.score < playUntil && player2.score < playUntil) {
        
        playRound(player1, player2);
              
     
    }

      if (player1.score == playUntil) {
            console.log(player1.name + " Is the winner!");
            player1.score = 0;
            player2.score = 0;
            return player1;
        } else {
            console.log(player2.name + " Is the winner!");
            player1.score = 0;
            player2.score = 0;
            return player2;
        }
}

playGame(player1, player2, 5);
// Define a function called playTournament()
// Take 4 players and playUntil as arguments
// Play a game between the winners of the first round.

function playTournament(player1, player2, player3, player4, playUntil) {
    let finalist1 = playGame(player1, player2, playUntil);
    let finalist2 = playGame(player3, player4, playUntil);
    let worldchampion = playGame(finalist1, finalist2, playUntil);
    console.log(worldchampion.name + " is the world champion!");
    return worldchampion;

    // Announce the tournament winner's name "[name] is the world champion";
    
    
    
 }

 playTournament(player1, player2, player3, player4, 3);

 typeof player1.score;