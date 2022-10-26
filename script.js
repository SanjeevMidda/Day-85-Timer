let timer = document.querySelector('.timer');
let start = document.querySelector('.start');
let userInput = document.querySelector('.enterValue');

userInput.addEventListener('click', timerAmount);
start.addEventListener('click', startTime);

function startTime() {
    let starting = Number(timer.innerHTML);

    starting--;

        timer.innerHTML = starting;

        setInterval(startTime, 1000);
}

function timerAmount() {

    let input = Number(prompt("ENTER TIME"));

    timer.innerHTML = input;

    
}

