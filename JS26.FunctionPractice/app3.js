//3. Разработать функцию для нахождения максимального элемента в массиве.

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

var elementMax = a[0];
function maxElementArray (x) {
    
    for(var i = 1; i < n; i++){
        if(a[i] > elementMax) {
            elementMax = a[i];
        };
    } 
    return elementMax;
}

maxElementArray();
console.log(elementMax);




