const resultElement = document.querySelector("#js_result");
const diceButton = document.querySelector("#go-button");
const playerDiceElement = document.querySelector("#player-dice");
const cpuDiceElement = document.querySelector("#cpu-dice");
let winner;

resultElement.classList.add("d-none");

diceButton.addEventListener("click", function () {
  const cpuDice = Math.floor(Math.random() * 6) + 1;
  const playerDice = Math.floor(Math.random() * 6) + 1;

  if (cpuDice > playerDice) {
    winner = "Ha vinto il computer!";
  } else if (cpuDice < playerDice) {
    winner = "Hai vinto!";
  } else {
    winner = "Patta!";
  }

  cpuDiceElement.innerHTML = `
  <h2 class="dice-label text-danger">CPU</h2>
  <i class="bi bi-dice-${cpuDice}-fill text-danger">
  `;
  playerDiceElement.innerHTML = `
  <h2 class="dice-label text-primary">Player</h2>
  <i class="bi bi-dice-${playerDice}-fill text-primary">
  `;
  resultElement.innerText = winner;
  resultElement.classList.remove("d-none");
});
