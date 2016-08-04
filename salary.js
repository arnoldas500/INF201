function myCalc(){
var x = document.getElementById("hourlyWage").value;
var y = document.getElementById("hoursPerWeek").value;
document.getElementById("calculation").innerHTML = x * y * 52;
var x = parseFloat("hourlyWage") + "<br>";
var y = parseFloat("hoursPerWeek") + "<br>";
var z = parseFloat(x * y * 52) + "<br>";
}