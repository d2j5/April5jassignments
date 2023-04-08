
const hands = ['rock', 'paper', 'scissors'];

// Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3

function getHand(hands) {
    return hands[parseInt(Math.random() * 10) % 3];
}

// Define two objects for two players. Each player has name and getHand() properties.

let player1 = { name: 'Player 1', getHand: getHand(hands) };

let player2 = { name: 'Player 2', getHand: getHand(hands) };

let player3 = { name: 'Player 3', getHand: getHand(hands) };

let player4 = { name: 'Player 4', getHand: getHand(hands) };

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

    let p1h = player1.getHand;
    let p2h = player2.getHand;

    if (p1h === p2h) {
        console.log("It's a tie!");
        return null;

    } else if (p1h === 'rock') {
        if (p2h === 'paper') {
            console.log(player2.name + ' wins with paper!');
            return player2;
        } else if (p2h === 'scissors') {
            console.log(player1.name + ' wins with rock!');
            return player1;
        }

    } else if (p1h === 'paper') {
        if (p2h === 'scissors') {
            console.log(player2.name + ' wins with scissors!');
            return player2;
        } else if (p2h === 'rock') {
            console.log(player1.name + ' wins with paper!');
            return player1;
        }

    } else if (p1h === 'scissors') {
        if (p2h === 'rock') {
            console.log(player2.name + ' wins with rock!');
            return player2;
        } else if (p2h === 'paper') {
            console.log(player1.name + ' wins with scissors!');
            return player1;
        }
    }

}


// playRound(player1, player2);

//Define a function called playGame() that takes arguments player1, player2, and playUntil.
// Play rounds until one of the players wins playUntil hands
// When one player has won enough games, return the winning player object
// Play a game to 5 wins

function playGame(player1, player2, playUntil) {
    let p1score = 0;
    let p2score = 0;
    
    while (p1score < playUntil && p2score < playUntil) {
        let winner = playRound(player1, player2);

        if (winner === player1) {
            p1score++;
        } else if (winner === player2) {
                p2score++;
            }

        }
    
if (p1score > p2score) {
    console.log(player1.name + " wins!");
    return player1;
} else {
        console.log(player2.name + " wins!");
        return player2;
    }
}

playGame(player1, player2, 5);
// // Define a function called playTournament()
// // Take 4 players and playUntil as arguments
// // Play a game between the winners of the first round.
function playTournament(player1, player2, player3, player4, playUntil) {
    let finalist1 = playGame(player1, player2, playUntil);
    let finalist2 = playGame(player3, player4, playUntil);
    let worldchampion = playGame(finalist1, finalist2, playUntil);
    return worldchampion;
}
// // Announce the tournament winner's name "[name] is the world champion";
console.log(worldchampion.name + " is the world champion!");

playTournament(player1, player2, player3, player4, 3);