const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

/*
I was doing this in a group, but we didn't get far.
There was then input from other people and I wrote a few things, but I've commented them, since it's not my code. 
I understand what they wrote, but I would have never done it myself.
So there's barely anything done for this second part of this lab.
This was really difficult - and almost impossible to understand. 
*/

function printMinutes() {
  //   minUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];
  //   minDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
}

function printSeconds() {
  // secUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
  // secDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // btnLeftElement.classList.remove('stop');
  // btnLeftElement.classList.add('start');
  // btnLeftElement.innerText = 'STOP';
}

function setSplitBtn() {
  //btnRightElement.classList.remove('');
  // ... your code goes here
}

function setStartBtn() {
  // btnLeftElement.classList.remove("stop");
  // btnLeftElement.classList.add("start")
  // btnLeftElement.innerText = "STOP"
}

function setResetBtn() {
  chronometer.reset();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (chronometer.start(printTime)) {
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {});
