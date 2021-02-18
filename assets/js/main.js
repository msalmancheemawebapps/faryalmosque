function main() {
var mainDate, hours, minutes, seconds, date, month, months, year;
mainDate = new Date();
hours = mainDate.getHours();
minutes = mainDate.getMinutes();
seconds = mainDate.getSeconds();
date = mainDate.getDate();
month = mainDate.getMonth();
months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun" ,"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
year = mainDate.getFullYear();
document.getElementById("secondsDiv").innerHTML = seconds;
document.getElementById("dateSpan").innerHTML = date;
document.getElementById("monthSpan").innerHTML = months[month];
document.getElementById("yearSpan").innerHTML = year;
if ( minutes < 10 ) {
document.getElementById("timeDiv").innerHTML = hours + " " + ":" + " " + "0" + minutes;
}
else {
document.getElementById("timeDiv").innerHTML = hours + " " + ":" + " " + minutes;
}
}
function count() {
document.getElementById("counter").stepUp(1);
}
function reset(){
document.getElementById("counter").value="0";
}