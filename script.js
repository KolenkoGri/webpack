import './index.css';
import './index.html';

const btn = document.querySelector('.button');

btn.addEventListener('click', () => {
  btn.textContent = `hello world`;
});
