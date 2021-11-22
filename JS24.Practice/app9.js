let a = [];
const min = 1, max = 100, n = 10;
let maxElement = a[0];

for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random()*(max - min + 1)) + min;
}

console.log(a);
let isgrow = true;
let isless = true;

for (let i = 1; i < n; i++) {
    if (a[i] > a[i - 1]) {
        isless = false;
    }
    if (a[i] < a[i - 1]) {
        isgrow = false;
    }
}
if(isless) {
    console.log("Массив упорядочен по убыванию");
} else if (isgrow) {
    console.log("Массив упорядочен по возрастанию");
} else {
    console.log("Массив не упорядочен");
}