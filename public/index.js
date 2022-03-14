// set the end of date
var  countDownDate = new Date("Jul 25, 2024 16:37:52").getTime();

// conditions

var countDown = setInterval(function(){
var now = new Date().getTime();
var timeleft = countDownDate - now;

var days = Math.floor(timeleft / (1000 * 60 * 60 * 24)).toFixed();
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toFixed();
var minutes = Math.floor(timeleft % (1000 * 60 * 60)) / (1000 * 60).toFixed();
var seconds = Math.floor(timeleft % (1000 *60) / 1000).toFixed(2);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes; 
document.getElementById("seconds").innerHTML = seconds;

if (timeleft < 0){
    clearInterval(countDown);
    document.getElementById("days").innerHTML = "00"
    document.getElementById("hours").innerHTML = "00" 
    document.getElementById("minutes").innerHTML = "00"
    document.getElementById("seconds").innerHTML = "00"

}}, 1000)






