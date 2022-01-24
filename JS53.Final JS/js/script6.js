// 6. Дано 3 массива. Найти элементы, которые встречаются в каких-либо 2 массивах, но их нету в 3 массиве.

function getElemFromArr(arrC, arrD, arrE){
    // let arrRezult = [];
    let arrCC = [];
    let arrDD = [];
    let arrEE = [];
    let arrCDE = [];
    let count = 0;
 
    for (let str of arrC){
      if (!arrCC.includes(str)){
       arrCC.push(str);
      }
    } console.log("arrCC :", arrCC.join());
    for (let str of arrD){
     if (!arrDD.includes(str)){
      arrDD.push(str);
     }
   } console.log("arrDD :", arrDD.join());
   for (let str of arrE){
     if (!arrEE.includes(str)){
      arrEE.push(str);
     }
   } console.log("arrEE :", arrEE.join());
   arrCDE = arrCC.concat(arrDD, arrEE);
   //console.log("arrCDE :",arrCDE.concat(arrCC, arrDD, arrEE).join());
    console.log("arrCDE :",arrCDE);
   for(let str of arrCDE){
     if (arrCDE.includes(str)){
      console.log("str :", str) 
      count ++;
      console.log("count :", count)
     }
   }
   console.log("count :", count)
   return true;
 };
 
 getElemFromArr([1, 1, 3, 5], [1, 6, 7, 7], [1, 2 , 2, 7]);