'use strict';
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#contact-button').addEventListener('click', () => {
  const message = document.querySelector('#contact-message');
  message.hidden = false;
});
