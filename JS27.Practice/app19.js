//19. Дан массив с числами. Найдите сумму этих чисел.

let a = [1, 2, 3, 4, 5];
let result = a.reduce(function(sum, current) {
    return sum + current;
  }, 0);
  
  console.log(result);