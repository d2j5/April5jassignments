
const hands = ['rock', 'paper', 'scissors'];

// Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3

function getHand(hands) {
    return hands[parseInt(Math.random() * 10) % 3];
}

// Define two objects for two players. Each player has name and getHand() properties.

let player1 = { name: 'Player 1', getHand: getHand(hands) };

let player2 = { name: 'Player 2', getHand: getHand(hands) };

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
    
    }else if (p1h === 'rock') {
        if (p2h === 'paper') {
            console.log(player2.name + ' wins with paper!');
            return p2h;
        } else if (p2h === 'scissors') {
            console.log(player1.name + ' wins with rock!');
            return p1h;
        }

    } else if (p1h === 'paper') {
        if (p2h === 'scissors') {
            console.log(player2.name + ' wins with scissors!');
            return p2h;
        } else if (p2h === 'rock') {
            console.log(player1.name + ' wins with paper!');
            return p1h;
        }

    } else if (p1h === 'scissors') {
        if (p2h === 'rock') {
            console.log(player2.name + ' wins with rock!');
            return p2h;
        } else if (p2h === 'paper') {
            console.log(player1.name + ' wins with scissors!');
            return p1h;
        }
    } 

}




playRound(player1, player2);