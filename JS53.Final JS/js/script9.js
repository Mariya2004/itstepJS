// 9. Дано предложение на русском языке. Определить, является ли оно панграммой.

function isPangram(str){
    let result = [];
    let resultResult = [];
    let punct = ".,:;!?-";
    /* \s - это регулярное выражение для "пробелов", 
    а g - это "глобальный" флаг, что означает соответствие всем \s (пробелам).
 */
    str=str.replace(/\s+/g, '');
    console.log("str :", str)
    result=str.split("").filter(function(item){
      return punct.indexOf(item) == -1;
  });
    console.log("result :", result);
  
    for (let item of result) {
      if (!result.includes(item)) {
        resultResult.push(item);
      } 
      
    } console.log("resultResult", resultResult);
      if(resultResult.length == 0) {
        console.log("Данное предложение является панграммой");
      } else console.log("Данное предложение не является панграммой");
  
    return true;
  }  
  
  isPangram("Привет, мир! Как дела? Что нового?");