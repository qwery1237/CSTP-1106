let yearUserInput;
let year;
while (true){
  yearUserInput = prompt("Enter a year")
  if (isNaN(yearUserInput) || yearUserInput=="" || yearUserInput==null){
     alert("Please enter a number")
  }
  else {
    yearUserInput=parseInt(yearUserInput);
    break;
  }
} 

if (yearUserInput%400==0) {
    year="Leap year"
}
else if (yearUserInput%100==0){
    year="Not a leap year"
}
else if (yearUserInput%4==0){
    year="Leap year"
}
else {
    year="Not a leap year"
}
document.getElementById("year").innerText = year;