console.log("Clock in diff country");

let a;
let date;
let time;
let hours;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

setInterval(() => {
    a = new Date();
    hours = a.getHours();
    hours = (hours % 12) || 12;
    date = a.toLocaleDateString(undefined, options);
    time = hours +":"+ a.getMinutes() +":"+ a.getSeconds()
    document.getElementById("time").innerHTML = time + " <br> on " + date;

}, 100); 
