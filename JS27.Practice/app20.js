//20. Дан массив с числами. Найдите сумму первых N элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.

let a = [1, 2, 3, 0, 4, 5, 6];
let answer = 0;
let result = a.reduce(function(sum, current) {
    if (current == 0) {
        answer = sum;
    }
    return sum + current;
  }, 0);
  
  console.log(answer);