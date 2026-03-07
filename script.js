const OPTIONS = { SCISSORS: 0, PAPER: 1, ROCK: 2 };

let playerScore = 0;
let pcScore = 0;

const resultText = document.querySelector(".verdikt");
const playerDisplay = document.querySelector("#scoreply");
const pcDisplay = document.querySelector("#scorebot");
const tlacitkaHrace = document.querySelectorAll(".pick button");

// ENGINE
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


tlacitkaHrace.forEach(tlacitko => {
    tlacitko.addEventListener("click", (event) => {
        const ikona = tlacitko.querySelector("i");
        const mojeVolba = parseInt(ikona.id.replace("PL", ""));
        play(mojeVolba);
    });
});

function hideAllResults() {
    document.querySelectorAll(".choicePC i, .choicePLAYER i").forEach(i => {
        i.style.display = "none";
    });
}

function play(playerChoice) {    
    const pcChoice = getRandomChoice();
    
    // 1. Schováme staré výsledky v tabulce
    hideAllResults();
    
    const pcImg = document.getElementById(`PC${pcChoice}`);
    const playerImg = document.getElementById(`RES-PL${playerChoice}`);
    pcImg.style.display = "block";
    playerImg.style.display = "block";

    const result = evaluateWinner(pcChoice, playerChoice);
    
    if (result === "player") {
        playerScore++;
        resultText.textContent = "Vyhrál jsi! 🎉";
        playerDisplay.textContent = playerScore;
    } else if (result === "pc") {
        pcScore++;
        resultText.textContent = "Robot vyhrál! 🤖";
        pcDisplay.textContent = pcScore;
    } else {
        resultText.textContent = "Je to remíza! 🤝"; 
    }
}