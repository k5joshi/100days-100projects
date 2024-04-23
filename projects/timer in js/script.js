const timeArea = document.querySelector("#countdown");
const btn_start = document.querySelector("#start");
const btn_stop = document.querySelector("#stop");
let intervalId;

btn_start.addEventListener("click", startTimer);
btn_stop.addEventListener("click", stopTimer);

function startTimer() {
    let sec = 0;
    let min = 0;
    let hour = 0;

    intervalId = setInterval(() => {
        sec++;
        if (sec === 60) {
            min++;
            sec = 0;
        }
        if (min === 60) {
            hour++;
            min = 0;
        }
        timeArea.textContent = `${hour < 10 ? "0" + hour : hour}:${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(intervalId);
}
