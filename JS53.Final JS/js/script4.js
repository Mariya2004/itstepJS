// 4. Дан массив целых чисел. Найти наибольшую сумму подряд идущих элементов. (Например, [1, 0, -4, 5, 6, -7,-2, 3, 8] -> максимальная сумма: 13)

let array = [1, 0, -4, 5, 6, -7,-2, 3, 8];
let summax = [];
        for (let i = 0; i < array.length; i++) {
            let max = Number.MIN_VALUE;
            let sum = 0;
            for (let j = i; j < array.length; j++) {
                sum += array[j];
                if (max < sum) 
                max = sum;
            }
            summax.push(max);
        }
 
        let totalMax = Number.MIN_VALUE;
        for (let i = 0; i < summax.length; i++) {
            if (totalMax < summax[i]) totalMax = summax[i];
        }
 
        console.log(totalMax);


// 4. Дан массив целых чисел. Найти наибольшую сумму подряд идущих элементов. 
// (Например, [1, 0, -4, 5, 6, -7,-2, 3, 8] -> максимальная сумма: 13)

// function getMaxSum(arr){
//     let maxSum = 0;
//     let intermediateSum = 0;
//     for(let item of arr){
//         intermediateSum += item;
//         maxSum = Math.max(maxSum, intermediateSum);
//         if (intermediateSum < 0) intermediateSum = 0;
//     }
//     console.log("maxSum :", maxSum);
//     return maxSum;
//   };
  
//   getMaxSum([2, -1, 2, 3, -9]);

