//5. Разработать функцию, которая выводит элемента массива через запятую ([1,2,3,4,5] -> 1, 2, 3, 4, 5)
let a = [];
const min = 1, max = 100, n = 10;

function randomArray (array) {
    for (var i = 0; i < n; i++) {
        a[i] = Math.floor(Math.random()*(max - min + 1)) + min;
        
    }; 
    return a;
}

randomArray();
console.log(a);

function showStr (str) {
    var str = "";
    str += a[0];
    for(var i = 1; i < n; i++){
        str += ", " + a[i];
    }
    return str;
}

console.log(showStr());