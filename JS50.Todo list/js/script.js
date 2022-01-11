// 1. Добавить возможность добавлять новые задания через форму. Новое задание должно помещаться в конец списка.
// 2. При нажатии на задание оно должно становится вынолненным, если не выполнено, и наоборот.
// 3. Добавить возможность удаления задания при нажатии на крестик.
// 4*. Добавить возможность редактирования задания через форму добавления. Реализацию продумать самим.
// 5*. Возможность изменения порядка событий через перетаскивание.
// 6*. Добавить возможность отмены редактирования на клавишу Esc.
// 7*. Добавить возможность отката действий при нажатии на Ctrl+Z.

//1.
var editElement = null;

document.forms.todo_form.onsubmit = function(){

    if(editElement != null){
        editElement.firstChild.textContent = this.task.value;
        this.task.value = "";
        editElement = null;
        document.querySelector(".btn").innerHTML = "Добавить";
        return false;
    }

    let item = this.task.value;
    if(item.trim() == "")
        return false;

    let li = document.createElement("li");
    li.textContent = item.trim();
    let edit = document.createElement("span");
    edit.classList.add("edit");
    edit.textContent = "✎";
    li.append(edit);
    let close = document.createElement("span");
    close.classList.add("close");
    close.textContent = "×";
    li.append(close);
    list.append(li);
    this.task.value = "";
    return false;
}

//2.
document.querySelector("ul").onclick = function(event){
    let current = event.target;

    if(current.tagName != "LI")
        return false;

    current.classList.toggle("checked");

    return false;
}


//3.
document.querySelector("ul").addEventListener("click", function (event) {
    let current = event.target;
    
    if(!current.classList.contains("close"))
        return false;

    current.parentElement.remove();

    return false;
})


//4.
document.querySelector("ul").addEventListener("click", function (event) {
    let current = event.target;
    
    if(!current.classList.contains("edit"))
        return false;

    editElement = current.closest("li");

    task.value = editElement.firstChild.textContent;
    
    document.querySelector(".btn").innerHTML = "Сохранить";

    return false;
})


//6.
document.onkeydown = function(event) {
    if(event.code == "Escape" && editElement !== null) {
        editElement = null;
        document.querySelector(".btn").innerHTML = "Добавить";
        task.value = "";
    }
}