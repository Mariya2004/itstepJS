//7. Дан массив [1,3,6,4,3,3,5,6]. Получить из него массив, состоящий из элементов без повторений.

function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
let arr = [1,3,6,4,3,3,5,6];
console.log(unique(arr));