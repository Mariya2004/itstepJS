//7. Разработать функцию, которая проверят наличие некоторого элемента в массиве.

let a = [];
const min = 1, max = 100, n = 10;

function randomArray (array) {
    for (var i = 0; i < n; i++) {
        a[i] = Math.floor(Math.random()*(max - min + 1)) + min;
        
    }; 
    return a[i];
}

randomArray();
console.log(a);

function findNumber (y, k) {
for (var i = 0; i < n; i++) {
    if (k == a[i]) {
        return k;
    } 
}
return ("Нет элемента в массиве");
}

var find = findNumber(a, 13);
console.log(find);