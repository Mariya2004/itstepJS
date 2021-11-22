let a = [];
const min = 1, max = 100, n = 10;

for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random()*(max - min + 1)) + min;
}

console.log(a);
let x = 13;
for (i = 0; i < n; i++) {
    if (x == a[i]) {
        console.log(x);
    }
}