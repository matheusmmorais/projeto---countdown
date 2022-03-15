// set the end of date
var countDownDate = new Date("Mar 15, 2023 12:23:00");

// conditions

var countDown = setInterval(function(){
var now = new Date().getTime();
var timeleft = countDownDate - now;

var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor(timeleft % (1000 *60) / 1000);

document.getElementById("days").innerHTML = days.toFixed(0);
document.getElementById("hours").innerHTML = hours.toFixed(0);
document.getElementById("minutes").innerHTML = minutes.toFixed(0); 
document.getElementById("seconds").innerHTML = seconds.toFixed(0);

if (days < 10) {
    document.getElementById("days").innerHTML = "0" + days.toFixed(0);
} 

if (hours < 10) {
    document.getElementById("hours").innerHTML = "0" + hours.toFixed(0);
} 

if (minutes < 10) {
    document.getElementById("minutes").innerHTML = "0" + minutes.toFixed(0); 
}

if (seconds < 10) {
    document.getElementById("seconds").innerHTML = "0" +  seconds.toFixed(0);
};

if (timeleft < 0){
    clearInterval(countDown);
    document.getElementById("days").innerHTML = "00"
    document.getElementById("hours").innerHTML = "00" 
    document.getElementById("minutes").innerHTML = "00"
    document.getElementById("seconds").innerHTML = "00"

}}, 1000);

