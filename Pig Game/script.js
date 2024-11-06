'use strict';
/* 
when user rolls the dice : 
 1) - generate random number between 1 and 6 and store in a variable we do : let dice = Math.trunc(random() * 6 + 1 )  
 2) - associating every number to an image to display it in the playin dice and add the number to current variable.
*/
let dice;
let score1 = 0;
let score2 = 0;
let scoreLabel1 = document.querySelector('#score--0');
let scoreLabel2 = document.querySelector('#score--1');
let newGameBtn = document.querySelector('.btn--new');
let current = 0;
let player1 = true;

document.querySelector('#score--0').textContent = score1;
document.querySelector('#score--1').textContent = score2;
document.querySelector('.dice').classList.add('hidden');

const switchPlayer = function () {
  if (player1) {
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
    player1 = false;
  } else {
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
    player1 = true;
  }
};
document.querySelector('.btn--hold').addEventListener('click', function () {
  if (player1) {
    score1 += current;
    document.querySelector('#score--0').textContent = score1;
  } else {
    score2 += current;
    document.querySelector('#score--1').textContent = score2;
  }
  switchPlayer();
  current = 0;
  document.querySelector('#current--0').textContent = current;
  document.querySelector('#current--1').textContent = current;
  if (score1 >= 100) {
    document.querySelector('.player--0').classList.add('win');
  } else if (score2 >= 100) {
    document.querySelector('.player--1').classList.add('win');
  }
});
document.querySelector('.btn--roll').addEventListener('click', function () {
  dice = Math.trunc(Math.random() * 6 + 1);
  document.querySelector('.dice').classList.remove('hidden');
  console.log(dice);
  switch (dice) {
    case 1:
      document.querySelector('.dice').setAttribute('src', '../dice-1.png');
      current = 0;
      document.querySelector('#current--0').textContent = current;
      document.querySelector('#current--1').textContent = current;
      switchPlayer();
      break;
    case 2:
      document.querySelector('.dice').setAttribute('src', '../dice-2.png');
      if (player1) {
        current += dice;
        document.querySelector('#current--0').textContent = current;
      } else {
        current += dice;
        document.querySelector('#current--1').textContent = current;
      }
      break;
    case 3:
      document.querySelector('.dice').setAttribute('src', '../dice-3.png');
      if (player1) {
        current += dice;
        document.querySelector('#current--0').textContent = current;
      } else {
        current += dice;
        document.querySelector('#current--1').textContent = current;
      }
      break;
    case 4:
      document.querySelector('.dice').setAttribute('src', '../dice-4.png');
      if (player1) {
        current += dice;
        document.querySelector('#current--0').textContent = current;
      } else {
        current += dice;
        document.querySelector('#current--1').textContent = current;
      }
      break;
    case 5:
      document.querySelector('.dice').setAttribute('src', '../dice-5.png');
      if (player1) {
        current += dice;
        document.querySelector('#current--0').textContent = current;
      } else {
        current += dice;
        document.querySelector('#current--1').textContent = current;
      }
      break;
    case 6:
      document.querySelector('.dice').setAttribute('src', '../dice-6.png');
      if (player1) {
        current += dice;
        document.querySelector('#current--0').textContent = current;
      } else {
        current += dice;
        document.querySelector('#current--1').textContent = current;
      }
      break;
  }
});
console.log(scoreLabel1, scoreLabel2);
newGameBtn.addEventListener('click', function () {
  document.querySelector('.dice').classList.add('hidden');
  document.querySelector('.player--0').classList.remove('win');
  document.querySelector('.player--1').classList.remove('win');
  score1 = score2 = 0;
  current = 0;
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  scoreLabel1.textContent = scoreLabel2.textContent = score1;
  player1 = true;
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
});
