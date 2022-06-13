
const clock = document.querySelector(".clock");
function upDateClock() {
    clock.innerHTML = new Date().toLocaleTimeString();
}

clock.style.color = "blue";
setInterval(upDateClock, 1000);