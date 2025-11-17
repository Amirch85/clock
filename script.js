var hrs = document.querySelector('#hrs');
var min = document.querySelector('#min');
var sec = document.querySelector('#sec');
var dayel = document.querySelector('#day');
var h3 = document.querySelector('h3')


var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

setInterval(() => {
    let currentime = new Date();
  var boy;
   if(currentime.getHours()>12){
    boy = "pm";
 }
 else{
       boy = "am"
 }

 
    let hours = currentime.getHours() % 12;
    hours = hours == 0 ? 12 : hours;

    hrs.innerHTML = (hours < 10 ? '0' : '') + hours;
    min.innerHTML = (currentime.getMinutes() < 10 ? '0' : '') + currentime.getMinutes();
    sec.innerHTML = (currentime.getSeconds() < 10 ? '0' : '') + currentime.getSeconds();

    let day = currentime.getDay();
    dayel.innerHTML = weekdays[day];
    h3.innerHTML = boy

}, 500);
