document.addEventListener('DOMContentLoaded', () => {
  const goblin = document.querySelector('.goblin');
  const gameBoard = document.querySelector('.game-board');

  function getRandomPosition() {
    const x = Math.floor(Math.random() * 4);
    const y = Math.floor(Math.random() * 4);
    return {
      x,
      y
    };
  }

  function moveGoblin() {
    const newPosition = getRandomPosition();
    goblin.style.gridRow = newPosition.y + 1;
    goblin.style.gridColumn = newPosition.x + 1;
  }

  goblin.addEventListener('click', moveGoblin);

  setInterval(moveGoblin, 1000);
});