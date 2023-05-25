'use strict';

const form = document.querySelector('.query__form');
const button = document.querySelector('.button');

button.addEventListener('click', (event) => {
  event.preventDefault();
  form.reset();
});
