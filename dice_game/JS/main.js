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

  playerDiceElement.innerText = `PLAYER: ${playerDice}`;
  cpuDiceElement.innerText = `CPU: ${cpuDice}`;
  resultElement.innerText = winner;
  resultElement.classList.remove("d-none");
});
