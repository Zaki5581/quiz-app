// - question--one__text-color//
const answer = document.querySelector('[data-js="answer--text"]');
const button1 = document.querySelector('[data-js = "button--question--one"]');
const item = document.querySelector('[data-js="item--one"]');
const card = document.querySelector('[data-js="karte"]');

/* button */

button1.addEventListener('click', () => {
  card.classList.toggle('card--move');
  answer.classList.toggle('hide');
  item.classList.toggle('item--one__color');
  item.classList.toggle('item--one__move');
});
//pages toggle.
const quiz = document.querySelector('[data-js="first--page"]');
const bookmark = document.querySelector('[data-js="second--page"]');
const profile = document.querySelector('[data-js="third--page"]');
const settings = document.querySelector('[data-js="fourth--page"]');
//
const btn1 = document.querySelector('[data-js="option1"]');
const btn2 = document.querySelector('[data-js="option2"]');
const btn3 = document.querySelector('[data-js="option3"]');
const btn4 = document.querySelector('[data-js="option4"]');

btn2.addEventListener('click', () => {
  bookmark.classList.remove('hide');
  quiz.classList.add('hide');
  profile.classList.add('hide');
  settings.classList.add('hide');
});

btn3.addEventListener('click', () => {
  profile.classList.remove('hide');
  quiz.classList.add('hide');
  bookmark.classList.add('hide');
  settings.classList.add('hide');
});

btn4.addEventListener('click', () => {
  settings.classList.remove('hide');
  quiz.classList.add('hide');
  bookmark.classList.add('hide');
  profile.classList.add('hide');
});

btn1.addEventListener('click', () => {
  quiz.classList.remove('hide');
  bookmark.classList.add('hide');
  profile.classList.add('hide');
  settings.classList.add('hide');
});
//
