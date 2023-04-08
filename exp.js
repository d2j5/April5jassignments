const hands = ['rock', 'paper', 'scissors'];

function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
    }

//  define players 1 and 2
let player1 = 
    {name: 'Player 1', getHand}

let player2 = 
    {name: 'Player 2', getHand}

//how a round is won
function playRound(player1, player2) {

    let hand1 = player1.getHand();
    let hand2 = player2.getHand();
    let winner = null;

    if ((hand1 === 'rock' && hand2 === 'scissors') || (hand1 === 'paper' && hand2 === 'rock') || (hand1 === 'scissors' && hand2 === 'paper')) {
        console.log(player1.name + ' played ' + hand1 + '.', player2.name + ' played ' + hand2 + '. ' + player1.name + ' wins the round.');
        winner = player1;
    } else if (hand1 === hand2) {
        console.log(player1.name + ' played ' + hand1 + '.', player2.name + ' played ' + hand2 + '.', 'It is a tie.');
    } else {
        console.log(player1.name + ' played ' + hand1 + '.', player2.name + ' played ' + hand2 + '. ' + player2.name + ' wins the round.')
        winner = player2;
    }
    return winner;
}

// Make iterations to determine a winner
function playGame(player1, player2, playUntil)  {
    let p1Wins = 0;
    let p2Wins = 0;

    while (p1Wins < playUntil && p2Wins < playUntil) {
        let winner = playRound(player1, player2);

        if (winner === player1) {
            p1Wins++;
        } else if (winner === player2) {
            p2Wins++;
        }
    }
    if (p1Wins > p2Wins) {
        console.log(player1.name + ' triumphs!.');
        return player1
    } else {
        console.log(player2.name + ' triumphs!');
        return player2
    }
}

playGame(player1, player2, 3);

// define players 3 and 4
// let player3 = 
//     {name: 'Player 3', getHand};
// let player4 =
//     {name: 'Player 4', getHand};

// //final showdown
// function playTournament(player1, player2, player3, player4, playUntil) {
// let firstbracket = playGame(player1, player2, playUntil);
// let secondbracket = playGame(player3, player4, playUntil);

// let tournamentwiener = playGame(firstbracket, secondbracket, playUntil);
// console.log(tournamentwiener.name + ' is the world champion.');
// }

// playTournament(player1, player2, player3, player4, 3);