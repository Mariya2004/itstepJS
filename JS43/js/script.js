//1 При наведении на ребенка родительский фон меняется на исходный

// document.querySelector(".parent").onmouseover = function(event){
//     if(event.target.classList.contains("parent")){
//         event.target.classList.add("bg-blue")
//     }
//     if(event.target.classList.contains("child")){
//         event.target.classList.add("bg-black")
//     }
// }
// document.querySelector(".parent").onmouseout = function(event){
//     if(event.target.classList.contains("parent")){
//         event.target.classList.remove("bg-blue")
//     }
//     if(event.target.classList.contains("child")){
//         event.target.classList.remove("bg-black")
//     }
// }


//2 При наведении на ребенка родительский блок не меняет цвет
// document.querySelector(".parent").onmouseover = function(event){
//     if(event.target.classList.contains("parent")){
//         event.target.classList.add("bg-blue");
        
//     }
//     if(event.target.classList.contains("child")){
//         event.target.classList.add("bg-black");
//         event.relatedTarget.classList.add("bg-blue");
//     }
    
// }
// document.querySelector(".parent").onmouseout = function(event){
//     if(event.target.classList.contains("parent")){
//         event.target.classList.remove("bg-blue");

//     }
    
//     if(event.target.classList.contains("child")){
//         event.target.classList.remove("bg-black")
//     }
// }

//3 Решение через mouseenter/mouseleave
// document.querySelector(".parent").onmouseenter = function(event){
//
//      event.target.classList.add("bg-blue");   
//  
// }

// document.querySelector(".parent").onmouseleave = function(event){
//    
//         event.target.classList.remove("bg-blue");
//    
// }

// document.querySelector(".child").onmouseenter = function(event){
// 
//         event.target.classList.add("bg-black");
//  
// }

// document.querySelector(".child").onmouseleave = function(event){
//    
//         event.target.classList.remove("bg-black");
//   
// }


//4
// document.querySelector(".parent").onmouseenter = function(event){
//     event.target.classList.add("bg-blue");
// }

// document.querySelector(".parent").onmouseleave = function(event){
//     event.target.classList.remove("bg-blue");
// }

// document.querySelector(".child").onmouseenter = function(event){
//     event.target.classList.add("bg-black");
//     event.relatedTarget.classList.add("bg-blue");
// }

// document.querySelector(".child").onmouseleave = function(event){
//      event.target.classList.remove("bg-black");
// }


//5 Вывести координаты дочернего элемента относительно родительского
// let parentPos = document.querySelector(".parent").getBoundingClientRect(),
//     childrenPos = document.querySelector(".child").getBoundingClientRect(),
//     relativePos = {};

// document.querySelector(".child").onmouseover = function (event) {
//     relativePos.top = childrenPos.top - parentPos.top,
//     relativePos.right = childrenPos.right - parentPos.right,
//     relativePos.bottom = childrenPos.bottom - parentPos.bottom,
//     relativePos.left = childrenPos.left - parentPos.left;

//     console.log(relativePos);
// }

//6 
document.querySelector(".parent").onclick = function (event) {
    if(event.altKey) {
        console.log("Нажата клавиша Alt");
    } else if (event.shiftKey) {
        console.log("Нажата клавиша Shift");
    } else if (event.ctrlKey) {
        console.log("Нажата клавиша Ctrl");
    }
}





