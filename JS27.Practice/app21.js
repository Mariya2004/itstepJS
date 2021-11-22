//21. Дан массив с числами. Найдите сумму последних N элементов до первого нуля с конца. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем последние 3 элемента, так как дальше стоит элемент с числом 0. 

let a = [1, 2, 3, 0, 4, 5, 6];
let answer = 0;
let result = a.reduceRight(function(sum, current) {
    if (current == 0) {
        answer = sum;
    }
    return sum + current;
  }, 0);
  
  console.log(answer);