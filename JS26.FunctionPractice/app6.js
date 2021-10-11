//6. Разработать функцию, которая уменьшает четные элементы в 2 раза.

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


function increaseEven (numbers) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] % 2 == 0) {
            a[i] = a[i]/2;
        }
    }
    return numbers;
}

var result = increaseEven(a);
console.log(result); 