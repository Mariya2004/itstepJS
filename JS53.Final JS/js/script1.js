// 1.  Составить программу, печатающую разложение на простые множители заданного натурального числа n > 0 (другими словами, требуется печатать только простые числа и 

// произведение напечатанных чисел должно быть равно n; если n = 1, печатать ничего не надо)

function getPrime(n){
    let div=2;
    if (n < 0)
    return false;
    else for (let i = 0; i < n/2; i++){
        if (n % div == 0){
            console.log("div:", div);
            n=n/div;
            
        } 
        else div++;
        
        //if (n % div != 0){
            
        //} // else{
            //n=n/div;
            //arr[i]=div;
          //  div++;
         // console.log(n);
       // }
    // } // arr.push(n);
      }  console.log("n:", n);// console.log("arr:", arr.join());
} 