//2. Разработать функцию для заполнения массива случаныйми числами.

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
