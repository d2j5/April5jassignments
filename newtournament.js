
const hands = ['rock', 'paper', 'scissors'];

// Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3

function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}

// Define two objects for two players. Each player has name and getHand() properties.

let player1 = { name: 'Player 1', getHand: getHand()};

let player2 = { name: 'Player 2', getHand: getHand()};

let player3 = { name: 'Player 3', getHand: getHand()};

let player4 = { name: 'Player 4', getHand: getHand()};

// Define a function called playRound() that
// Takes two player objects as arguments
// Gets hands from each
// Determines the winner
// Logs the hands played and name of the winner.
// If its a tie, log the hands played and "it's a tie".
// Returns the winner object (null if no winner)

function playRound(player1, player2) {
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
    
//  playRound(player1, player2);

//Define a function called playGame() that takes arguments player1, player2, and playUntil.
// Play rounds until one of the players wins playUntil hands
// When one player has won enough games, return the winning player object
// Play a game to 5 wins

function playGame(player1, player2, playUntil) {
    
    let p1score = 0;
    let p2score = 0; 
    
    while (p1score < playUntil && p2score < playUntil) {
        let winner = playRound(player1, player2);
                             
        if (winner === null) {
            
        } else if (winner.name === player1.name) {
        p1score += 1;
        } else if (winner.name === player2.name) {
            p2score += 1;
    }

}

if (p1score == playUntil) {
    return player1;
} else if (p2score == playUntil) {
    
    return player2;
}
}



playGame(player1, player2, 3);
// // Define a function called playTournament()
// // Take 4 players and playUntil as arguments
// // Play a game between the winners of the first round.

// function playTournament(player1, player2, player3, player4, playUntil) {
//     let finalist1 = playGame(player1, player2, playUntil);
//     let finalist2 = playGame(player3, player4, playUntil);
//     let worldchampion = playGame(finalist1, finalist2, playUntil);
//     return worldchampion;

//     // // Announce the tournament winner's name "[name] is the world champion";
 
//     console.log(worldchampion.name + " is the world champion!");
// }

// playTournament(player1, player2, player3, player4, 3);
