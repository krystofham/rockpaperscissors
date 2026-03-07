const OPTIONS = { SCISSORS: 0, PAPER: 1, ROCK: 2 };

let playerScore = 0;
let pcScore = 0;

const startBtn = document.querySelector(".start");
const pcContainer = document.querySelector(".choicePC");
const playerContainer = document.querySelector(".choicePLAYER");
const resultText = document.querySelector(".verdikt");
const playerDisplay = document.querySelector("#scoreply");
const pcDisplay = document.querySelector("#scorebot");

function getRandomChoice() {
    return Math.floor(Math.random() * 3);
}

function evaluateWinner(pc, plr) {
    if (pc === plr) return "draw";
    if ((plr === OPTIONS.SCISSORS && pc === OPTIONS.PAPER) ||
        (plr === OPTIONS.PAPER && pc === OPTIONS.ROCK) ||
        (plr === OPTIONS.ROCK && pc === OPTIONS.SCISSORS)) {
        return "player";
    }
    return "pc";
}

const hideAllImages = () => {
    document.querySelectorAll("img").forEach(img => img.style.display = "none");
};

function play() {    
    const pcChoice = getRandomChoice();
    const playerChoice = getRandomChoice();
    hideAllImages();
    const pcImg = document.getElementById(`PC${pcChoice}`);
    const playerImg = document.getElementById(`PL${playerChoice}`);
    
    if (pcImg && playerImg) {
        pcImg.style.display = "block";
        playerImg.style.display = "block";
    }

    const result = evaluateWinner(pcChoice, playerChoice);

    if (result === "player") {
        playerScore++;
        resultText.textContent = "Vyhrál jsi!";
        playerDisplay.textContent = playerScore;
    } else if (result === "pc") {
        pcScore++;
        resultText.textContent = "Robot vyhrál!";
        pcDisplay.textContent = pcScore;
    } else {
        resultText.textContent = "Je to remíza!";
    }
}

startBtn.addEventListener("click", play);