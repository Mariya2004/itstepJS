//9. Разработать функцию для вычисления НОД 2 натуральных чисел.
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

function findNod(c, b) {
   while(c != b) {
     if (c > b) {
       c = c - b;
     } else {
       b = b - c; 
     }
   }
   return c;
  }
  console.log(findNod());