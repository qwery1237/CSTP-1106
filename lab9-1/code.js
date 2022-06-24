const operators = document.getElementById("operators")
let historyNum = 0;
operators.onclick = function (event) {
    if (!"+-*/".includes(event.target.value)){
        return 0;
    }
    const firstNum = parseInt(document.getElementById('firstNum').value);
    const secondNum = parseInt(document.getElementById('secondNum').value);
    let resultofCal;
    const resultHistoryP = document.getElementById("resultHistory");
    const resultHistory = document.createElement('span');
    if (event.target.value == "+" ){
        resultofCal = firstNum + secondNum;
        resultHistory.setAttribute("class","plus");
    }
    else if (event.target.value == "-" ){
        resultofCal = firstNum - secondNum;
        resultHistory.setAttribute("class","minus");
    }
    else if (event.target.value == "*" ){
        resultofCal = firstNum * secondNum;
        resultHistory.setAttribute("class","multiplication");
    }
    else {
        resultofCal = firstNum / secondNum;
        resultHistory.setAttribute("class","division");
    }
    resultHistory.innerText = `${firstNum} ${event.target.value} ${secondNum} = ${resultofCal}`
    document.getElementById('result').innerText = `Result: ${firstNum} ${event.target.value} ${secondNum} = ${resultofCal}`;
    if (++historyNum<=10){
        resultHistoryP.prepend(resultHistory);
    }
    else {
        resultHistoryP.removeChild(resultHistoryP.lastChild);
        resultHistoryP.prepend(resultHistory);
    }
}