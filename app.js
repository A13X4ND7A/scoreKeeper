const p1Button = document.querySelector("#buttonP1");
const p2Button = document.querySelector("#buttonP2");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const winningScoreSelect = document.querySelector("#playTo");
const resetButton = document.querySelector("#resetButton");

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let gameWon = false;





p1Button.addEventListener('click', function(){
    if (!gameWon){
        p1Score += 1;
        if (p1Score === winningScore) {
            gameWon = true;
            p1Display.classList.add("text-success");
            p1Button.classList.add("btn-success");
            p1Button.classList.remove("btn-dark");
            p2Display.classList.add("text-danger");
            p2Button.classList.add("btn-danger");
            p2Button.classList.remove("btn-dark");
        } 
        p1Display.textContent = p1Score;
    }   
});

p2Button.addEventListener("click", function () {
  if (!gameWon) {
    p2Score += 1;
    if (p2Score === winningScore) {
      gameWon = true;
      p2Display.classList.add("text-success");
      p2Button.classList.add("btn-success");
      p2Button.classList.remove("btn-dark");
      p1Display.classList.add("text-danger");
      p1Button.classList.add("btn-danger");
      p1Button.classList.remove("btn-dark");
    }
    p2Display.textContent = p2Score;
  }
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});



resetButton.addEventListener("click", reset);

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    gameWon = false;
    p2Display.classList.remove("text-success", "text-danger");
    p2Button.classList.remove("btn-success", "btn-danger");
    p1Display.classList.remove("text-success", "text-danger");
    p1Button.classList.remove("btn-success", "btn-danger");
    p1Button.classList.add("btn-dark");
    p2Button.classList.add("btn-dark");
}