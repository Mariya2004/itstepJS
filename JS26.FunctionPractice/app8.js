//8. Разработать функцию, которая ищет элемент в массиве и возвращает его индекс, если находит его, и -1 - в противном случае.
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

function findIndex (y, k) {
    
for (var i = 0; i < n; i++) {
    if (k === a[i]) {
        return i;
    }
    
}
return -1;
}

var show = findIndex(a, 13);
console.log(show);
