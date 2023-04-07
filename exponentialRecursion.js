function powerOf(a, b) { 
    if (b === 0) {
            return 1;
    } else {
        return a * powerOf(a, b-1);
    }
}

console.log(powerOf(2,5));
console.log(powerOf(7,3));
console.log(powerOf(12,2));
console.log(powerOf(9,4));



function powerOffor(a, b) {
let start = 1;
    for (let i = 0; i < b; i ++)  {
start *= a;
}
return start;

}

console.log(powerOffor(2,5));
console.log(powerOffor(7,3));
console.log(powerOffor(12,2));
console.log(powerOffor(9,4));