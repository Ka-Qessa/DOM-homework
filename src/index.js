import './css/style.css';
import './js/app';

function component() {
  const element = document.createElement('div');
  element.classList.add('hello');
  const myIcon = new Image();
  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component())