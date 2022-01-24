document.querySelector(".start").onclick = function() {
    document.querySelector(".first-form").style.display = 'none';
    document.querySelector(".second-form").style.display = 'flex';
};

document.querySelector(".play").onclick = function() {
   document.querySelector(".tik").style.display = 'block';
   document.querySelector(".zanovo").style.display = 'block';
    document.querySelector(".second-form").style.display = 'none';
    for(var i = 0; i < 9; i++) {
        document.getElementById("tik-tak").innerHTML+='<div class = "block"></div>';
    }
    
}


var hod = 0;
    
document.getElementById('tik-tak').onclick = function(event){
    console.log(event);
    if (event.target.className == 'block'){
        if (hod%2==0){ //процент это остаток от деления, т.е целое 0,2,4,6,8//
            event.target.innerHTML = 'x'; //клики на блоки //
        }
        else{
            event.target.innerHTML ='0';
        }
        hod++;
        checkWinner();
    }
}

 function checkWinner(){
     var allblock = document.getElementsByClassName('block');
     //console.log(allblock);
    if(allblock[0].innerHTML=='x' && allblock[1].innerHTML=='x' && allblock[2].innerHTML=='x') alert('Победили крестики');
    if(allblock[3].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[5].innerHTML=='x') alert('Победили крестики');
    if(allblock[6].innerHTML=='x' && allblock[7].innerHTML=='x' && allblock[8].innerHTML=='x') alert('Победили крестики');
    if(allblock[0].innerHTML=='x' && allblock[3].innerHTML=='x' && allblock[6].innerHTML=='x') alert('Победили крестики');
    if(allblock[1].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[7].innerHTML=='x') alert('Победили крестики');
    if(allblock[2].innerHTML=='x' && allblock[5].innerHTML=='x' && allblock[8].innerHTML=='x') alert('Победили крестики');
    if(allblock[0].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[8].innerHTML=='x') alert('Победили крестики');
    if(allblock[2].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[6].innerHTML=='x') alert('Победили крестики');
    //нолики
    if(allblock[0].innerHTML=='0' && allblock[1].innerHTML=='0' && allblock[2].innerHTML=='0') alert('Победили нолики');
    if(allblock[3].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[5].innerHTML=='0') alert('Победили нолики');
    if(allblock[6].innerHTML=='0' && allblock[7].innerHTML=='0' && allblock[8].innerHTML=='0') alert('Победили нолики');
    if(allblock[0].innerHTML=='0' && allblock[3].innerHTML=='0' && allblock[6].innerHTML=='0') alert('Победили нолики');
    if(allblock[1].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[7].innerHTML=='0') alert('Победили нолики');
    if(allblock[2].innerHTML=='0' && allblock[5].innerHTML=='0' && allblock[8].innerHTML=='0') alert('Победили нолики');
    if(allblock[0].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[8].innerHTML=='0') alert('Победили нолики');
    if(allblock[2].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[6].innerHTML=='0') alert('Победили нолики');
        
    }

   document.querySelector(".zanovo").onclick = function() {
       location.reload();
   } 

