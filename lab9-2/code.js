const id = (id) => document.getElementById(id);
const cl = (className) => document.getElementsByClassName(className)
const log = console.log
const operatorbtns = id("operators");
let historyNum = 0;
operatorbtns.onclick = function (event){
    if (!"+-*/".includes(event.target.value)){
        return 0;
    }
    let result;
    const firstNum = parseInt(id('firstNum').value);
    const secondNum = parseInt(id('secondNum').value);
    const operator = event.target.value;
    const newHistory = document.createElement('span');
    const deleteBtn = document.createElement('input');
    deleteBtn.value = "Hide this";
    deleteBtn.type = "button";
    deleteBtn.style = "margin-left: 3px;"
    if (operator == "+"){
        result = `${firstNum} + ${secondNum} = ${firstNum + secondNum}`
        newHistory.className = "plus"
    }
    else if (operator == "-"){
        result = `${firstNum} - ${secondNum} = ${firstNum - secondNum}`
        newHistory.className = "minus"
    }
    else if (operator == "*"){
        result = `${firstNum} * ${secondNum} = ${firstNum * secondNum}`
        newHistory.className = "multiplication"
    }
    else {
        result = `${firstNum} / ${secondNum} = ${firstNum / secondNum}`
        newHistory.className = "division"
    }
    id('result').innerText = `Result: ${result}`;
    newHistory.innerText = result;
    newHistory.append(deleteBtn);
    id("history").prepend(newHistory);
    if (++historyNum ==11) {
        id('history').removeChild(id('history').lastChild);
        historyNum--;
    }
    deleteBtn.onclick = function (event) {
        deleteBtn.parentNode.remove();
        historyNum--;
    }

}

