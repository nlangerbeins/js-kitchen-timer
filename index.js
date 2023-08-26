const btn5 = document.querySelector('#min5');
const btn10 = document.querySelector('#min10');
const btn15 = document.querySelector('#min15');
const btn30 = document.querySelector('#min30');

const countdown = document.querySelector('#countdown');
const player = document.querySelector('#player');

const btnStart = document.querySelector('#btnStart');
const btnStop = document.querySelector('#btnStop');
const btnSetTimer = document.querySelector('#btnSetTimer');

const timer5Min = 5 * 60;
const timer10Min = 10 * 60;
const timer15Min = 15 * 60;
const timer30Min = 30 * 60;

let minutes;
let seconds;
let timerID;

/*------------------Button 5 Min-----------------------*/
btn5.addEventListener('click', btn5Clicked);

function btn5Clicked() {
  btn5.classList.add('buttonChosen');
  btn5.style.pointerEvents = 'none';
  btn10.style.pointerEvents = 'none';
  btn15.style.pointerEvents = 'none';
  btn30.style.pointerEvents = 'none';
  btn10.classList.add('buttonDisabled');
  btn15.classList.add('buttonDisabled');
  btn30.classList.add('buttonDisabled');
  btnSetTimer.removeEventListener('click', setTimer);
  countdown.textContent = '05 : 00';

  timerRun(timer5Min);
}

/*------------------Button 10 Min-----------------------*/
btn10.addEventListener('click', btn10Clicked);

function btn10Clicked() {
  btn10.classList.add('buttonChosen');
  btn10.style.pointerEvents = 'none';
  btn5.style.pointerEvents = 'none';
  btn15.style.pointerEvents = 'none';
  btn30.style.pointerEvents = 'none';
  btn5.classList.add('buttonDisabled');
  btn15.classList.add('buttonDisabled');
  btn30.classList.add('buttonDisabled');
  btnSetTimer.removeEventListener('click', setTimer);
  countdown.textContent = '10 : 00';

  timerRun(timer10Min);
}

/*------------------Button 15 Min-----------------------*/
btn15.addEventListener('click', btn15Clicked);

function btn15Clicked() {
  btn15.classList.add('buttonChosen');
  btn15.style.pointerEvents = 'none';
  btn5.style.pointerEvents = 'none';
  btn10.style.pointerEvents = 'none';
  btn30.style.pointerEvents = 'none';
  btn5.classList.add('buttonDisabled');
  btn10.classList.add('buttonDisabled');
  btn30.classList.add('buttonDisabled');
  btnSetTimer.removeEventListener('click', setTimer);
  countdown.textContent = '15 : 00';

  timerRun(timer15Min);
}

/*------------------Button 30 Min-----------------------*/
btn30.addEventListener('click', btn30Clicked);

function btn30Clicked() {
  btn30.classList.add('buttonChosen');
  btn30.style.pointerEvents = 'none';
  btn5.style.pointerEvents = 'none';
  btn10.style.pointerEvents = 'none';
  btn15.style.pointerEvents = 'none';
  btn5.classList.add('buttonDisabled');
  btn10.classList.add('buttonDisabled');
  btn15.classList.add('buttonDisabled');
  btnSetTimer.removeEventListener('click', setTimer);
  countdown.textContent = '30 : 00';

  timerRun(timer30Min);
}

function timerRun(timerSec) {
  //If button Start is pressed, countdown begins.
  btnStart.addEventListener('click', timer);

  /*------------- Function timer --------------*/
  function timer() {
    timerID = setInterval(calculateTime, 1000);
    btnStart.removeEventListener('click', timer); //Remove event listener once it was clicked.
  }

  /*------------- Function calculate Timer --------------*/
  function calculateTime() {
    calculateTime = function () {}; // empty function: kill it as soon as it was called
    minutes = Math.floor(timerSec / 60);
    seconds = timerSec % 60;

    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    countdown.textContent = `${minutes} : ${seconds}`;
    timerSec--;

    if (timerSec < 0) {
      timerSec = 0;
      countdown.textContent = '00 : 00';
      stopTimer();
      //Function with a sound timer
      player.play();
    }
  }
}

function stopTimer() {
  clearInterval(timerID);
}

/*-----------------------Button Stop----------------------*/
btnStop.addEventListener('click', () => {
  location.reload();
});

/*-------------------- Set Timer -------------------------*/

btnSetTimer.addEventListener('click', setTimer);

function setTimer() {
  btnSetTimer.removeEventListener('click', setTimer);
  //Show time on the countdown when button setTimer is pressed
  const setMinutes = Number(document.querySelector('#minutes').value);
  const setSeconds = Number(document.querySelector('#seconds').value);

  let amountTimeSeconds = setMinutes * 60 + setSeconds;
  minutes = Math.floor(amountTimeSeconds / 60);
  seconds = amountTimeSeconds % 60;

  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  countdown.textContent = `${minutes} : ${seconds}`;

  // Buttons are disabled
  btn30.style.pointerEvents = 'none';
  btn5.style.pointerEvents = 'none';
  btn10.style.pointerEvents = 'none';
  btn15.style.pointerEvents = 'none';
  btn5.classList.add('buttonDisabled');
  btn10.classList.add('buttonDisabled');
  btn15.classList.add('buttonDisabled');
  btn30.classList.add('buttonDisabled');

  btnStart.addEventListener('click', go);

  function go() {
    btnStart.removeEventListener('click', go);
    btnSetTimer.removeEventListener('click', setTimer);

    const setMinutes = Number(document.querySelector('#minutes').value);
    const setSeconds = Number(document.querySelector('#seconds').value);

    let amountTimeSeconds = setMinutes * 60 + setSeconds;

    function calculateTime() {
      calculateTime = function () {};
      minutes = Math.floor(amountTimeSeconds / 60);
      seconds = amountTimeSeconds % 60;

      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      if (seconds < 10) {
        seconds = '0' + seconds;
      }
      countdown.textContent = `${minutes} : ${seconds}`;
      amountTimeSeconds--;

      if (amountTimeSeconds < 0) {
        amountTimeSeconds = 0;
        countdown.textContent = '00 : 00';
        stopTimer();
        player.play();
      }
    }
    timerID = setInterval(calculateTime, 1000);
  }
}
