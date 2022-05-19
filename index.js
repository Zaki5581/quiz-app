//white text - question--one__text-color//
const textElement = document.querySelector('[data-js = "question--one"]');
const button = document.querySelector('[data-js = "button--question--one"]');

button.addEventListener('click', () => {
  textElement.classList.toggle('question--one__color');
});

/* Q&A Switch/question--one */

button.addEventListener('click', () => {
  textElement.textContent = 'Hier könnte die Antwort stehen.';
  button.textContent = 'Hide answer';
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
  item.classList.toggle('item--one__move');
});
/*item--two__move*/
const item2 = document.querySelector('[data-js="item--two"]');

secondButton.addEventListener('click', () => {
  item2.classList.toggle('item--two__move');
});
