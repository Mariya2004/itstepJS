// 2. Дан маркированный список из 5 пунктов с произвольным текстом
//     - при клике на какой-либо элемент списка, этот элемент должен менять цвет на красный, причем всегда должен быть только 1 выделенный элемент;
//     - при двойном клике элемент должен дублироваться и копия помещаться в конец списка;
//     - при наведении на элемент текст должен становится полужирным (использовать тег b для этого), при убирании курсора - возвращаться в исходное состояние;

let ul = document.getElementById("list");

let listItems = ul.getElementsByTagName("li");

for(li of  listItems){
  li.addEventListener('click', function(){
    if(this.classList.contains('active')){
      this.classList.remove("active");
    } else {
      this.classList.add("active");
    }
  })
}

document.getElementsByTagName("li").onmouseover = function(event){
    event.target.insertAdjacentHTML("beforebegin", html)
}

