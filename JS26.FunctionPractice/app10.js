//10. Раразботать функцию для вычисления НОД элементов массива.

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

function arrayNod(a) {
    if (n < 2) {
        return null;
    }

    let nod = NOD(a[0], a[1]);

    for (i = 2; i < n; i++) {
        nod = NOD(nod, a[i]);
    }

    return nod;
}

console.log(arrayNod());