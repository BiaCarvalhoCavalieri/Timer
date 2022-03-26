var minutes = 0;
var seconds = 0;
var timer;

function myTimer() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  var format = (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
  document.getElementById('timer').innerHTML = format;
}
function restart() {
  clearInterval(timer);
  minutes = 0;
  seconds = 0;
  document.getElementById('timer').innerHTML = '00:00';
  start();
}

function start() {
  const btnPlay = document.querySelector('.play-btn');
  btnPlay.classList.add('disabled');
  const btnPause = document.querySelector('.pause-btn');
  btnPause.classList.remove('disabled');
  timer = setInterval(() => { myTimer(); }, 1000);
}

function pause() {
  const btnPause = document.querySelector('.pause-btn');
  btnPause.classList.add('disabled');
  const btnPlay = document.querySelector('.play-btn');
  btnPlay.classList.remove('disabled');
  clearInterval(timer);
}