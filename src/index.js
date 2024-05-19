import './css/style.css';
import './js/app';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join();
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());