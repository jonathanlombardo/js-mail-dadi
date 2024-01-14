const resultElement = document.querySelector("#js_result");
const diceButton = document.querySelector("#go-button");
const playerDiceElement = document.querySelector("#player-dice");
const cpuDiceElement = document.querySelector("#cpu-dice");
const exitButton = document.querySelector("#exit-button");
const titleElement = document.querySelector("h1");
const userName = sessionStorage.getItem("userName");

titleElement.innerText = `Welcome back ${userName}`;

// resultElement.classList.add("d-none");

exitButton.addEventListener("click", function () {
  sessionStorage.removeItem("userName");
  document.location.href = "../index.html";
});

addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    diceButton.click();
  }
});

diceButton.addEventListener("click", function () {
  const cpuDice = Math.floor(Math.random() * 6) + 1;
  const playerDice = Math.floor(Math.random() * 6) + 1;
  let winner;
  let winnerColor;

  if (cpuDice > playerDice) {
    winner = "Ha vinto il computer!";
    winnerColor = "text-danger";
  } else if (cpuDice < playerDice) {
    winner = "Hai vinto!";
    winnerColor = "text-primary";
  } else {
    winner = "Patta!";
    winnerColor = "text-black";
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
  resultElement.className = `mb-3 fs-1 pb-3 border-bottom ${winnerColor}`;
});
