//22. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти. 

let a = [1, 2, 3, 0, 4, 5, 6];
let k = 0;
let result = a.reduce(function(sum, item, index) {
    if (sum < 10) {
        sum += item;
        k++;
        return sum;
    } 
    
  }, 0);
  
  console.log(k);