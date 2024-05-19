const randomHole = document.querySelectorAll('.hole');
const randomPosition = Math.floor(Math.random() * randomHole.length);
let currentHole = randomHole[randomPosition];

const character = document.querySelector('.hole_has-mole');
if (!currentHole.contains(character)) {
  currentHole.appendChild(character);
}

function moveCharacter() {
  const newRandomPosition = Math.floor(Math.random() * randomHole.length);
  const newHole = randomHole[newRandomPosition];

  if (newHole !== currentHole && !newHole.contains(character)) {
    newHole.appendChild(character);
    currentHole = newHole;
  }
}

setInterval(moveCharacter, 2000);
