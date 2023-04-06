//Create a variable that holds the total amount of the bill (before the tip).
let bill = 200.6666;
console.log('Subtotal: $' + bill);

//Create a function named 'calculateTip' ( It should multiply the bill variable by 20% of the total and return that value)
function calculateTip(x) {
    return x *= 0.20;
}

console.log('The tip is: $' + calculateTip(bill));
let tip = calculateTip(bill);
//Create another function called 'getBillTotal' and it should do the following things:
// - Take any amount as an argument
// - call the 'calculateTip' function
// - return the amount + the tip amount

function getBillTotal(x) {
    return x + calculateTip(bill);
}
// Find a way to round your amount returned to 2 decimal places.
console.log('Total: $' + getBillTotal(bill).toFixed(2));
