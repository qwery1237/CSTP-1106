let a='a'; 
let b='b';
let c='c';
let x1;
let x2;
let d;


[a,b,c] =userInput(a,b,c);
if (a==0){
    alert("This is not a quadratic function!!");
    if (b==0) {
        document.getElementById("answer").innerText = "a = 0, b = 0, Bye!"
    }
    else {
        x1=-c/b
        document.getElementById("answer").innerText = x1;
    }
}
else {
    d=(b**2)-4*a*c
    if (d<0) {
        document.getElementById("answer").innerText = "No Real Answer. Fail to take the square root of Negative value."
    }
    else if (d==0) {
        x1=(-b+Math.sqrt(d))/(2*a)
        document.getElementById("answer").innerText = "x1,x2 = "+x1
    }
    else {
        x1=(-b+Math.sqrt(d))/(2*a)
        x2=(-b-Math.sqrt(d))/(2*a)
        document.getElementById("answer").innerText = `x1 = ${x1}, x2 = ${x2}`
    }
}

function userInput(a,b,c) {
        a=inputNaN(a);
        b=inputNaN(b);
        c=inputNaN(c);
    return [a,b,c]
}
function inputNaN(num1) {
    var num;
    
    num = prompt (`${num1}=?`);
    while (true){
        if (isNaN(num)||num==""||num==null){
            num = prompt ("Please enter a number!")        
        }
        else {
            break;
        }
    }
    return num;
}