
function myCalc(){
var x = document.getElementById("hourlyWage").value;
var y = document.getElementById("hoursPerWeek").value;
var wage = parseFloat(x);
var hours = parseFloat(y);
var z = wage * hours * 52;
var salaryneg;
document.getElementById("calculation").innerHTML = z;
document.getElementById("calculation2").innerHTML = z;
if (z < 20000) {
	salaryneg = "too little.";
} else if (z > 20000 && z < 25000) {
	salaryneg = "almost enough.";
} else {
	salaryneg = "a good salary.";
}
document.getElementById("negotiate").innerHTML = salaryneg;
}





function tA() {
	var x = document.getElementById("cty").value;
	var y = x - 1;
    var output = " ";
	var cty = ["Responsibilities: tutoring students; <br /> ",
		"teaching the class as requested by the instructor; <br />",
		"supervising late afternoon/evening class sessions; <br />",
		"helping with administrative tasks such as typing and photocopying; <br />",
		"setting up demonstrations; <br />"];
	while (y >= 0) {
output = document.getElementById("duties1").innerHTML = cty[y] + output;
        y--;
	}    
}



function arrow() {
	var x = document.getElementById("security").value;
	var y = x - 1;
    var output = " ";
	var security = ["Provided asset protection for: <br /> Estee Lauder, CVS, K-Mart,Walmart, Gurwin Nursing Home, Adesa.<br />",
		"Car patrol  <br /> ",
		"Personal protection  <br />",
		"Lost prevention  <br />",
		"Lock up sites  <br />"];
    while (y >= 0) {
output = document.getElementById("duties2").innerHTML = security[y] + output;
        y--;
	}
}
    



    

