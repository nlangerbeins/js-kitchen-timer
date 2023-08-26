'use strict';

const btn5 = document.querySelector('#min5');
const btn10 = document.querySelector('#min10');
const btn15 = document.querySelector('#min15');
const btn30 = document.querySelector('#min30');

const countdown = document.querySelector('#countdown');
const player = document.querySelector('#player');

const btnStart = document.querySelector('#btnStart');
const btnStop = document.querySelector('#btnStop');

const timer5 = 5;
let timer5Seconds = timer5 * 60;

const timer10 = 10;
let timer10Seconds = timer10 * 60;

const timer15 = 15;
let timer15Seconds = timer15 * 60;

const timer30 = 30;
let timer30Seconds = timer30 * 60;

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

  test5();
}

function test5() {
  //If button Start is pressed, countdown begins.
  btnStart.addEventListener('click', timer);
  function timer() {
    timerID = setInterval(calculateTime, 1000);
    btnStart.removeEventListener('click', timer); //Remove event listener once it was clicked.
  }

  function calculateTime() {
    calculateTime = function () {}; // empty function: kill it as soon as it was called
    minutes = Math.floor(timer5Seconds / 60);
    seconds = timer5Seconds % 60;

    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    countdown.textContent = `${minutes} : ${seconds}`;
    timer5Seconds--;

    if (timer5Seconds < 0) {
      timer5Seconds = 0;
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

  test10();
}

function test10() {
  btnStart.addEventListener('click', timer);
  function timer() {
    timerID = setInterval(calculateTime, 1000);
    btnStart.removeEventListener('click', timer); //Remove event listener once it was
  }

  function calculateTime() {
    calculateTime = function () {}; // empty function: kill it as soon as it was called
    minutes = Math.floor(timer10Seconds / 60);
    seconds = timer10Seconds % 60;

    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    countdown.textContent = `${minutes} : ${seconds}`;
    timer10Seconds--;

    if (timer10Seconds < 0) {
      timer10Seconds = 0;
      countdown.textContent = '00 : 00';
      stopTimer();
      player.play();
    }
  }
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

  test15();
}

function test15() {
  btnStart.addEventListener('click', timer);

  function timer() {
    timerID = setInterval(calculateTime, 1000);
    btnStart.removeEventListener('click', timer); //Remove event listener once it was clicked.
  }

  function calculateTime() {
    calculateTime = function () {}; // empty function: kill it as soon as it was called
    minutes = Math.floor(timer15Seconds / 60);
    seconds = timer15Seconds % 60;

    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    countdown.textContent = `${minutes} : ${seconds}`;
    timer15Seconds--;

    if (timer15Seconds < 0) {
      timer15Seconds = 0;
      countdown.textContent = '00 : 00';
      stopTimer();
      player.play();
    }
  }
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

  test30();
}

function test30() {
  btnStart.addEventListener('click', timer);

  function timer() {
    timerID = setInterval(calculateTime, 1000);
    btnStart.removeEventListener('click', timer); //Remove event listener once it was clicked.
  }

  function calculateTime() {
    calculateTime = function () {}; // empty function: kill it as soon as it was called
    minutes = Math.floor(timer30Seconds / 60);
    seconds = timer30Seconds % 60;

    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    countdown.textContent = `${minutes} : ${seconds}`;
    timer30Seconds--;

    if (timer30Seconds < 0) {
      timer30Seconds = 0;
      countdown.textContent = '00 : 00';
      stopTimer();
      player.play();
    }
  }
}

/*---------------Set Timer-----------------*/

const btnSetTimer = document.querySelector('#btnSetTimer');
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
