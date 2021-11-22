//1
let a = [];
const min = 1, max = 100, n = 10;

for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random()*(max - min + 1)) + min;
}

let k = 3;
for (i = n - k; i < n; i++) {
    console.log(a[i]);
}

