
const clock = document.querySelector(".clock");
function upDateClock() {
    clock.innerHTML = new Date().toLocaleTimeString();
}

setInterval(upDateClock, 1000);