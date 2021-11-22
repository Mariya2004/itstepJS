let a = [];
const min = 1, max = 100, n = 10;

for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random()*(max - min + 1)) + min;
}

let k = 5;
console.log(a);
for (let i = 0; i < n; i++) {
    if (a[i] % k == 0) {
        console.log(a[i]);
    }
}