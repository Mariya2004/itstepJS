let result = document.getElementById("result");
result.onclick = function() {
    let a = +document.getElementById("a").value;
    let ul = document.createElement("ul");

    for(let i = 1; i <= a; i++){
        let li = document.createElement("li");
        li.innerHTML = `${i}`;
        ul.appendChild(li);
}


}


