const player1 = {
 button: document.querySelector("#buttonP1"),
  display: document.querySelector("#p1Display"),
  score: 0
}

const player2 = {
  button: document.querySelector("#buttonP2"),
  display: document.querySelector("#p2Display"),
  score: 0
}

const winningScoreSelect = document.querySelector("#playTo");
const resetButton = document.querySelector("#resetButton");

let winningScore = 5;
let gameWon = false;



function updateScores(player, opponent){
  if (!gameWon) {
    player.score += 1;
    if (player.score === winningScore) {
      gameWon = true;
      player.display.classList.add("text-success");
      player.button.classList.add("btn-success");
      player.button.classList.remove("btn-dark");
      opponent.display.classList.add("text-danger");
      opponent.button.classList.add("btn-danger");
      opponent.button.classList.remove("btn-dark");
    }
    player.display.textContent = player.score;
  }
}   

player1.button.addEventListener("click", function () {
  updateScores(player1, player2);
})

player2.button.addEventListener("click", function () {
  updateScores(player2, player1);
})

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});



resetButton.addEventListener("click", reset);

function reset() {
  for (let p of [player1, player2]) {
    p.score = 0;
    p.display.textContent = 0;
    gameWon = false;
    p.display.classList.remove("text-success", "text-danger");
    p.button.classList.remove("btn-success", "btn-danger");
    p.button.classList.add("btn-dark");
    p.button.classList.add("btn-dark");
  }
}