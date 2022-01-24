//7. Дан массив и число A. Переставить элементы в массиве так, чтобы сначала стояли элементы меньшие числа A, а потом большие.

function getAwithArr(arr, A){
    let rezult = [];
    
    for(let i=0; i < arr.length; i++){
      if (arr[i] > A){
        rezult.push(arr[i]);
      } else rezult.unshift(arr[i]);
        
      
    } console.log("rezult:", rezult.join());
    return true;
    
  }
  
  getAwithArr ([7, -3, 3, 8, 0, 2, 6], '5');