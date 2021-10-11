function fillArray(a, n) {
    const min = 1, max = 100;
    for (let i = 0; i < n; i++) {
        a[i] = Math.floor(Math.random()*(max - min + 1)) + min;
    }
    return a;
}


let b = [];
b = fillArray(b, 10);
console.log(b);

function getSum(b) {
    n = 10;
    let sum = 0;
    for (let i = 1; i < n; i++) {
        sum += b[i];
    }
    return sum;
}

let x = getSum(b);
console.log(x);