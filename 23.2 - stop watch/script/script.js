let span = document.querySelector("#span");
let start = document.querySelector('#start')
let stop = document.querySelector('#stop')


let min = 0;
let sec = 0;
let milleSec = 0;
let stoptime = true;





function timerCycle() {
    if (stoptime == false) {
        milleSec = parseInt(milleSec);
        sec = parseInt(sec);
        min = parseInt(min);

        milleSec = milleSec + 1;

        if (milleSec == 100) {
            sec = sec + 1;
            milleSec = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
            milleSec = 0;
        }

        if (milleSec < 10 || milleSec == 0) {
            milleSec = '0' + milleSec;
        }
        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }

        span.innerHTML = min + ':' + sec + ':' + milleSec;

        setTimeout("timerCycle()", 10);
    }
}

start.addEventListener('click', () => {
    if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
})


stop.addEventListener('click', () => {
    if (stoptime == false) {
        stoptime = true;
    }
})

function resetTimer() {
    span.innerHTML = '00:00:00';
}