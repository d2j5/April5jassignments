let bill = 200.6666;
console.log('Subtotal: $' + bill);

function calculateTip(x) {
    return x *= 0.20;
}

console.log('The tip is: $' + calculateTip(bill));
let tip = calculateTip(bill);


function getBillTotal(x) {
    return x + calculateTip(bill);
}

console.log('Total: $' + getBillTotal(bill).toFixed(2));


console.log('Total with 2 decimals: $' + getBillTotal(bill).toFixed(2));