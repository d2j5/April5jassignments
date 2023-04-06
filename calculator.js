let bill = 200.6666;
let tip = 0.20;
function calculateTip (bill) {
    return bill*tip;
}

console.log('The tip is= $'+calculateTip(bill,tip));
let tipf = calculateTip(bill,tip);


function getBillTotal (bill, tipf) {
    return bill+tipf;
}

console.log('Total: $'+getBillTotal(bill,tipf));

let amount2D = getBillTotal(bill,tipf);

console.log('Total with 2 decimals: $'+amount2D.toFixed(2));


