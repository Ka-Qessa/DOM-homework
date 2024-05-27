const gameBoard = document.querySelector('.game-board');
for (let i = 1; i <= 16; i+=1) {
  const hole = document.createElement('div');
  hole.classList.add('hole');
  hole.id = `hole${i}`;
  gameBoard.appendChild(hole);
}
const character = document.createElement('div');
character.classList.add('hole_has-mole');
gameBoard.appendChild(character);

const randomHole = document.querySelectorAll('.hole');
const randomPosition = Math.floor(Math.random() * randomHole.length);
let currentHole = randomHole[randomPosition];

function moveCharacter() {
  const newRandomPosition = Math.floor(Math.random() * randomHole.length);
  const newHole = randomHole[newRandomPosition];

  if (newHole !== currentHole && !newHole.contains(character)) {
    newHole.appendChild(character);
    currentHole = newHole;
  }
}

setInterval(moveCharacter, 2000);
