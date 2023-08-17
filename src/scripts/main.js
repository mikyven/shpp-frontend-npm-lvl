import moment from 'moment';

const timeDiv = document.getElementById('time');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const startBtn = document.getElementById('start');
const hmlParagraph = document.getElementById('howMuchLeftParagraph');

hmlParagraph.innerHTML = 'Укажите время в минутах';

plusBtn.onclick = function i() {
  if (+timeDiv.innerHTML < 59) timeDiv.innerHTML = +timeDiv.innerHTML + 1;
};

minusBtn.onclick = function i() {
  if (+timeDiv.innerHTML !== 0) timeDiv.innerHTML = +timeDiv.innerHTML - 1;
};

function timerFunc(from) {
  hmlParagraph.innerHTML = 'Осталось';
  plusBtn.classList.add('hidden');
  minusBtn.classList.add('hidden');
  startBtn.classList.add('hidden');
  timeDiv.innerHTML = from.format('m:ss');
  if (`${timeDiv.innerHTML}` !== '0:00') {
    setTimeout(() => {
      timerFunc(from.subtract(1, 's'));
    }, 1000);
  } else {
    window.location.reload();
  }
}

startBtn.onclick = function i() {
  if (+timeDiv.innerHTML !== 0) {
    timerFunc(
      moment([2000, 1, 1, 12, 0, 0]).add(timeDiv.innerHTML, 'm'),
    );
  } else {
    hmlParagraph.innerHTML = 'Укажите хотя бы одну минуту';
  }
};
