// 9. Дано предложение на русском языке. Определить, является ли оно панграммой.

function isPangram(str){
    let rezult = [];
    let rezultRezult = [];
    let punct = ".,:;!?-";
    /* \s - это регулярное выражение для "пробелов", 
    а g - это "глобальный" флаг, что означает соответствие всем \s (пробелам).
   Отличное объяснение + можно найти here.
  В качестве дополнительной заметки вы можете заменить контент между одинарными кавычками на все, 
  что хотите, чтобы вы могли заменить пробелы любой другой строкой.
    */
    str=str.replace(/\s+/g, '');
    console.log("str :", str)
    rezult=str.split("").filter(function(item){
      return punct.indexOf(item) == -1;
  });
    console.log("rezult :", rezult);
  
    for (let item of rezult) {
      if (!rezult.includes(item)) {
        rezultRezult.push(item);
      } 
      
    } console.log("rezultRezult", rezultRezult);
      if(rezultRezult.length == 0) {
        console.log("Данное предложение является панграммой");
      } else console.log("Данное предложение не является панграммой");
  
    return true;
  }  
  
  isPangram("Привет, мир! Как дела? Что нового?");