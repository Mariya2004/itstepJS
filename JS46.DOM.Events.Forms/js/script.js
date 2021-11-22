// 1. Дана форма с одним полем ввода.
//     - при унастновки курсора в поле ввода закрашивать ее в синий цвет.
//     - при убирании курсора из поля возвращать фон в начальное состояние.

document.querySelector(".input").onmouseover = function(event){
    event.target.classList.add("bg-blue")
}

document.querySelector(".input").onmouseout = function(event){
    event.target.classList.remove("bg-blue")
}