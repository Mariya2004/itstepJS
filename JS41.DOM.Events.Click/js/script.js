let calc = document.getElementById("calc");

calc.onclick = function () {
    let x = +document.getElementById("a").value;
    let y = parseFloat(document.getElementById("b").value);
    let operation = document.getElementById("o").value;
    let res;

    switch(operation) {
        case '+':
        res = x + y;
        break;

        case '-':
            res = x -y;
            break;
        
        case '*':
            res = x*y;
            break;

        case '/':
            res = x/y;
    }
    getElementById("result").innerHTML = res;
}

