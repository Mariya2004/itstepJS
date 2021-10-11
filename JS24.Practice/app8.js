let a = [];
const min = 1, max = 100, n = 10;
let maxElement = a[0];

for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random()*(max - min + 1)) + min;
}

console.log(a);
let k = 3;
a.splice(k, 1);
console.log(a);

for (let i = k; i < n; i++) {
    a[i] = a[i + 1];
};
console.log(a);