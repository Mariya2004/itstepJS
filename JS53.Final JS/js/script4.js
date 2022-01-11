// 4. Дан массив целых чисел. Найти наибольшую сумму подряд идущих элементов. (Например, [1, 0, -4, 5, 6, -7,-2, 3, 8] -> максимальная сумма: 13)

let array = [1, 0, -4, 5, 6, -7,-2, 3, 8];
let sumMax = [];
        for (let i = 0; i < array.length; i++) {
            let max = Number.MIN_VALUE;
            let sum = 0;
            for (let j = i; j < array.length; j++) {
                sum += array[j];
                if (max < sum) 
                max = sum;
            }
            sumMax.push(max);
        }
 
        let totalMax = Number.MIN_VALUE;
        for (let i = 0; i < sumMax.length; i++) {
            if (totalMax < sumMax[i]) totalMax = sumMax[i];
        }
 
        console.log(totalMax);




