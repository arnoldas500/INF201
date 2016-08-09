
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

//validation part from assignemnt 6
function validateForm() {
 var x = document.getElementById("hourlyWage").value;
 if (x == null || x == "") {
     alert("Please enter an hourly wage");
     return false;
 }
    
}

function validateForm2() {
 var x = document.getElementById("hoursPerWeek").value;
 if (x == null || x == "") {
     alert("Please enter hours per week");
     return false;
 }
    
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

function welcome() {
    var x = new Date();
    var y = x.getHours(); 
    var welcom;
if (y < 12) {
	welcom = "Enjoy the rest of your morning.";
} else if (y > 12 && y < 17) {
	welcom = "Enjoy your afternoon.";
} else {
	welcom = "Have a good evening.";
}
document.getElementById("Hello").innerHTML = welcom;
    var h3r = document.createElement("h3");
    var textr = document.createTextNode("");
    h3r.appendChild(textr);
    document.getElementById("welcom").appendChild(h3r);
}

    
//all the code below is for the calender function

/*
Dynamic Calendar Script- By Constantin (http://212.1.77.9/)
Permission given to Dynamic Drive to include script in archive
For 1000's more DHTML scripts, visit http://dynamicdrive.com
*/



/*
Dynamic Calendar II (By Jason Moon at http://www.jasonmoon.net)
Permission granted to Dynamicdrive.com to include script in archive
For this and 100's more DHTML scripts, visit http://dynamicdrive.com
*/

var ns6=document.getElementById&&!document.all
var ie4=document.all

var Selected_Month;
var Selected_Year;
var Current_Date = new Date();
var Current_Month = Current_Date.getMonth();

var Days_in_Month = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
var Month_Label = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');

var Current_Year = Current_Date.getYear();
if (Current_Year < 1000)
Current_Year+=1900


var Today = Current_Date.getDate();

function Header(Year, Month) {

   if (Month == 1) {
   Days_in_Month[1] = ((Year % 400 == 0) || ((Year % 4 == 0) && (Year % 100 !=0))) ? 29 : 28;
   }
   var Header_String = Month_Label[Month] + ' ' + Year;
   return Header_String;
}



function Make_Calendar(Year, Month) {
   var First_Date = new Date(Year, Month, 1);
   var Heading = Header(Year, Month);
   var First_Day = First_Date.getDay() + 1;
   if (((Days_in_Month[Month] == 31) && (First_Day >= 6)) ||
       ((Days_in_Month[Month] == 30) && (First_Day == 7))) {
      var Rows = 6;
   }
   else if ((Days_in_Month[Month] == 28) && (First_Day == 1)) {
      var Rows = 4;
   }
   else {
      var Rows = 5;
   }

   var HTML_String = '<table><tr><td valign="top"><table BORDER=4 CELLSPACING=1 cellpadding=2 FRAME="box" BGCOLOR="C0C0C0" BORDERCOLORLIGHT="808080">';

   HTML_String += '<tr><th colspan=7 BGCOLOR="FFFFFF" BORDERCOLOR="000000">' + Heading + '</font></th></tr>';

   HTML_String += '<tr><th ALIGN="CENTER" BGCOLOR="FFFFFF" BORDERCOLOR="000000">Sun</th><th ALIGN="CENTER" BGCOLOR="FFFFFF" BORDERCOLOR="000000">Mon</th><th ALIGN="CENTER" BGCOLOR="FFFFFF" BORDERCOLOR="000000">Tue</th><th ALIGN="CENTER" BGCOLOR="FFFFFF" BORDERCOLOR="000000">Wed</th>';

   HTML_String += '<th ALIGN="CENTER" BGCOLOR="FFFFFF" BORDERCOLOR="000000">Thu</th><th ALIGN="CENTER" BGCOLOR="FFFFFF" BORDERCOLOR="000000">Fri</th><th ALIGN="CENTER" BGCOLOR="FFFFFF" BORDERCOLOR="000000">Sat</th></tr>';

   var Day_Counter = 1;
   var Loop_Counter = 1;
   for (var j = 1; j <= Rows; j++) {
      HTML_String += '<tr ALIGN="left" VALIGN="top">';
      for (var i = 1; i < 8; i++) {
         if ((Loop_Counter >= First_Day) && (Day_Counter <= Days_in_Month[Month])) {
            if ((Day_Counter == Today) && (Year == Current_Year) && (Month == Current_Month)) {
               HTML_String += '<td BGCOLOR="FFFFFF" BORDERCOLOR="000000"><strong><font color="red">' + Day_Counter + '</font></strong></td>';
            }
            else {
               HTML_String += '<td BGCOLOR="FFFFFF" BORDERCOLOR="000000">' + Day_Counter + '</td>';
            }
            Day_Counter++;    
         }
         else {
            HTML_String += '<td BORDERCOLOR="C0C0C0"> </td>';
         }
         Loop_Counter++;
      }
      HTML_String += '</tr>';
   }
   HTML_String += '</table></td></tr></table>';
   cross_el=ns6? document.getElementById("Calendar") : document.all.Calendar
   cross_el.innerHTML = HTML_String;
}


function Check_Nums() {
   if ((event.keyCode < 48) || (event.keyCode > 57)) {
      return false;
   }
}



function On_Year() {
   var Year = document.when.year.value;
   if (Year.length == 4) {
      Selected_Month = document.when.month.selectedIndex;
      Selected_Year = Year;
      Make_Calendar(Selected_Year, Selected_Month);
   }
}

function On_Month() {
   var Year = document.when.year.value;
   if (Year.length == 4) {
      Selected_Month = document.when.month.selectedIndex;
      Selected_Year = Year;
      Make_Calendar(Selected_Year, Selected_Month);
   }
   else {
      alert('Please enter a valid year.');
      document.when.year.focus();
   }
}


function Defaults() {
   if (!ie4&&!ns6)
   return
   var Mid_Screen = Math.round(document.body.clientWidth / 2);
   document.when.month.selectedIndex = Current_Month;
   document.when.year.value = Current_Year;
   Selected_Month = Current_Month;
   Selected_Year = Current_Year;
   Make_Calendar(Current_Year, Current_Month);
}


function Skip(Direction) {
   if (Direction == '+') {
      if (Selected_Month == 11) {
         Selected_Month = 0;
         Selected_Year++;
      }
      else {
         Selected_Month++;
      }
   }
   else {
      if (Selected_Month == 0) {
         Selected_Month = 11;
         Selected_Year--;
      }
      else {
         Selected_Month--;
      }
   }
   Make_Calendar(Selected_Year, Selected_Month);
   document.when.month.selectedIndex = Selected_Month;
   document.when.year.value = Selected_Year;
}

