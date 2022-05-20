// - question--one__text-color//
const textElement = document.querySelector('[data-js = "question--one"]');
const button = document.querySelector('[data-js = "button--question--one"]');
const buttonNext = document.querySelector(
  '[data-js = "button--question--one2"]'
);

const answer = document.querySelector('[data-js="answer--text"]');

/* Q&A Switch/question--one */

button.addEventListener('click', () => {
  // textElement.classList.toggle('question--one__color');
  textElement.textContent = 'Hier könnte die Antwort stehen.';
  button.textContent = 'Hide answer';
  // button.textContent = 'Hide answer';
  // buttonNext.textContent = 'Next question';
  //answer.classList.remove('answer--text');
  // textElement.classList.remove('hide');
});

//  buttonNext

buttonNext.addEventListener('click', () => {
  // textElement.classList.add('hide');
  // answer.classList.add('answer--text');
  // textElement.classList.add('hide');
  // textElement.textContent = 'Die zweite Frage';
});

/* Q/A Switch/question--two  */
const secondButton = document.querySelector(
  '[data-js="button--question--two"]'
);
const text2 = document.querySelector('[data-js = "question--two"]');

secondButton.addEventListener('click', () => {
  text2.textContent = 'Hier auch!!';
  secondButton.textContent = 'Hide answer';
});

/* */
/*bookmark question--one__animation */

const item = document.querySelector('[data-js="item--one"]');

button.addEventListener('click', () => {
  item.classList.add('item--one__move');
  // item.classList.add('item1__color');
});
/*item--two__move*/
const item2 = document.querySelector('[data-js="item--two"]');

secondButton.addEventListener('click', () => {
  item2.classList.toggle('item--two__move');
});
