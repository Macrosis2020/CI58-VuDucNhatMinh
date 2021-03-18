class timer {
    min = '00';
    sec = '00';
    persec = '00';
    start = 'Start';
    pause = 'Pause';
    stop = 'Stop';
    minCount = 0;
    secCount = 0;
    persecCount = 0;
    timerInterval;
    timerState;
    constructor() {
        this.timerState = 0;
        this.min = document.createElement('span');
        this.min.textContent = '00';
        this.sec = document.createElement('span');
        this.sec.textContent = '00';
        this.persec = document.createElement('span');
        this.persec.textContent = '00';
        this.start = document.createElement('button');
        this.start.textContent = 'Start';
        this.start.style.marginLeft = '10px';
        this.start.style.marginRight = '3px';
        this.start.addEventListener('click', () => {
            this.startTimer();
        });
        this.pause = document.createElement('button');
        this.pause.textContent = 'Pause';
        this.pause.addEventListener('click', () => {
            clearInterval(this.timerInterval);
        });
        this.stop = document.createElement('button');
        this.stop.textContent = 'Stop';
        this.stop.style.margin = '3px';
        this.stop.addEventListener('click', () => {
            this.stopTimer();
        });
    }
    renderTimer(container, count) {
        const div = document.createElement('div');
        div.insertAdjacentHTML('beforeend', `<span>${count}. </span>`);
        div.appendChild(this.min);
        div.insertAdjacentHTML('beforeend', '<span>:</span>');
        div.appendChild(this.sec);
        div.insertAdjacentHTML('beforeend', '<span>:</span>');
        div.appendChild(this.persec);
        div.appendChild(this.start);
        div.appendChild(this.pause);
        div.appendChild(this.stop);
        container.appendChild(div);
        div.id = `timer${count}`;
    }
    startTimer() {
        if (this.timerState === 0) {
            this.timerState = 1;
            this.timerInterval = setInterval(() => {
                if (this.persecCount <= 8) {
                    this.persecCount++;
                    this.persec.textContent = `0${this.persecCount}`;
                } else if (this.persecCount <= 98) {
                    this.persecCount++;
                    this.persec.textContent = `${this.persecCount}`;
                } else if (this.secCount <= 8) {
                    this.persecCount = 0;
                    this.persec.textContent = '00';
                    this.secCount++;
                    this.sec.textContent = `0${this.secCount}`;
                } else if (this.secCount <= 58) {
                    this.persecCount = 0;
                    this.persec.textContent = '00';
                    this.secCount++;
                    this.sec.textContent = `${this.secCount}`;
                } else if (this.minCount <= 8) {
                    this.secCount = 0;
                    this.sec.textContent = '00';
                    this.minCount++;
                    this.min.textContent = `0${this.minCount}`;
                } else {
                    this.secCount = 0;
                    this.sec.textContent = '00';
                    this.minCount++;
                    this.min.textContent = `${this.minCount}`;
                }
            }, 10)
        }
    }
    stopTimer() {
        clearInterval(this.timerInterval);
            this.timerState = 0;
            this.persecCount = 0;
            this.persec.textContent = '00';
            this.secCount = 0;
            this.sec.textContent = '00';
            this.minCount = 0;
            this.min.textContent = '00';
    }
}
let timerCount = 1;
const timerList = [];
const timerbox = document.getElementById('timer-box');
addTimer = function() {
    newTimer = new timer;
    newTimer.renderTimer(timerbox, timerCount);
    timerList.push(newTimer);
    timerCount++;
}
{for (i=0;i<5;i++) {
    addTimer();
}}
console.log(timerList);
stopAll = function() {
    for (i=0; i<timerList.length; i++) {
        timerList[i].stopTimer();
    }
}
startAll = function() {
    for (i=0; i<timerList.length; i++) {
        timerList[i].startTimer();
    }
}
document.getElementById('stopall-btn').addEventListener('click', stopAll);
document.getElementById('startall-btn').addEventListener('click', startAll);

