let countTry = 0;
let score;
while (true) {
    if (countTry != 0) {
        score = prompt("Please enter your score again!");
    }
    else {
        score = prompt("Please enter your score");
        countTry++;
    };
    if ( !score==null || !isNaN(score)){
        score = parseInt(score)

        if (score >= 0 && score <= 100 ) {
            break;
        }

    }
}

let grade;

if (score >= 90) {
    grade ="A+"
}
else if (score >= 80) {
    grade ="B+"
}
else if (score >= 70) {
    grade ="C+"
}
else if (score >= 60) {
    grade = "D"
}
else if (score >= 50) {
    grade = "E"
}
else if (score < 50){
    grade = "F"
}
document.getElementById("grade").innerText = grade;

