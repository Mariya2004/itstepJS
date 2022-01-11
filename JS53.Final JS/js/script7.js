//7. Дан массив и число A. Переставить элементы в массиве так, чтобы сначала стояли элементы меньшие числа A, а потом большие.

function getAwithArray(arr, A){
    let result = [];
    
    for(let i=0; i < arr.length; i++){
      if (arr[i] > A){
        result.push(arr[i]);
      } else result.unshift(arr[i]);
        
      
    } console.log("result:", result.join());
    return true;
    
  }
  
  getAwithArray ([7, -3, 3, 8, 0, 2, 6], '5');