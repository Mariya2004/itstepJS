// 5. Дано 2 массива и число K. Найти по 1 числу из каждого массива, которые дадут наиближайшую сумму к числу К.



function getSumFromArray(arrA, arrB, k){
    let sum = 0, itemB, itemA, result=0, count=100;
    for (let i = 0; i < arrA.length; i++){
        let x = arrA[i];
        console.log("itemA", itemA);
        for (let j =0; j < arrB.length; j++){
          console.log("arrA[i] :", arrA[i], "arrB[j] :", arrB[j], "itemA", itemA);
            sum = x + arrB[j];
            console.log("sum:", sum);
            result = Math.abs(sum - k);
            
            console.log("result:", result);
            console.log("count :", count)
            if (result < count){
                count = result;
                itemB=arrB[j];
                console.log("arrA[i] :", arrA[i]);
                itemA=arrA[i];
                console.log("itemA :", itemA);
            }
        }
    }
    console.log("sum",sum, "count", count, "itemA ", itemA, "itemB", itemB);
    return true;
  }; 
  
  
  getSumFromArray([1, 3, 6], [2, -4, 7], '13');


