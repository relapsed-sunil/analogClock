const secondDiv = document.getElementById('second');
const minuteDiv = document.getElementById('minute');
const hourDiv = document.getElementById('hour');

setInterval(updateClock, 1000);

function updateClock() {
    let date = new Date();
    let second = date.getSeconds() / 60;
    let minute = (date.getMinutes() + second) / 60;
    let hour = (date.getHours() + minute) / 12;

    secondDiv.style.transform = "rotate(" + (second * 360) + "deg)";
    minuteDiv.style.transform = "rotate(" + (minute * 360) + "deg)";
    hourDiv.style.transform = "rotate(" + (hour * 360) + "deg)";
}

updateClock();