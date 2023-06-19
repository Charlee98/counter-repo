const number = document.querySelector('.number');
const btnDecrease = document.querySelector('.btn--decrease');
const btnReset = document.querySelector('.btn--reset');
const btnIncrease = document.querySelector('.btn--increase');

let score = 0;

const btnClicked = function () {
  //   document.querySelector('.number').textContent = score;
  //   score++;
  number.textContent = score;
};

btnIncrease.addEventListener('click', function () {
  score++;
  btnClicked();
});

btnDecrease.addEventListener('click', function () {
  score--;
  btnClicked();
});

btnReset.addEventListener('click', function () {
  score = 0;
  document.querySelector('.number').textContent = score;
});
