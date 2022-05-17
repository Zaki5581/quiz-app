//white text//
const textElement = document.querySelector('[data-js = "text"]');
const button = document.querySelector('[data-js = "button-js"]');

function onButtonClick() {
  textElement.classList.toggle("text--color");
}
button.addEventListener("click", onButtonClick);

function changeQuestion() {
  textElement.textContent = "Hier könnte die Antwort stehen.";
  button.textContent = "Hide answer";
  text2.textContent = "Hier auch";
  secondButton.textContent = "Hide answer";
}
button.addEventListener("click", changeQuestion);

function onButtonClick() {
  textElement.classList.toggle("text--color");
}

/*bookmark*/

const item = document.querySelector('[data-js="item"]');

function mooveItem1() {
  item.classList.toggle("item__moove");
}
button.addEventListener("click", mooveItem1);
/*item2__moove item2--button*/
const text2 = document.querySelector('[data-js = "text2"]');
const item2 = document.querySelector('[data-js="item2"]');

const secondButton = document.querySelector('[data-js="item2--button"]');

function mooveItem2() {
  item2.classList.toggle("item2__moove");
}
secondButton.addEventListener("click", mooveItem2);
secondButton.addEventListener("click", changeQuestion);
