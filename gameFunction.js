//'Exit' button function
let exit = document.querySelector("#exit");
exit.addEventListener("click", () => window.close());

//Dialog box
let dialog = document.querySelector("dialog");
let play = document.querySelector("#play");
play.addEventListener("click", () => dialog.showModal());
let closeBtn = document.querySelector("#close");
closeBtn.addEventListener("click", () => dialog.close());

//Arrival of the Game
play.addEventListener("click", () => {
    document.querySelector("h1").style.display = "none";
    document.querySelector(".box").style.display = "none";
})
closeBtn.addEventListener("click", () => {
    document.querySelector("#game").style.display = "flex";
})

// Gameplay
document.querySelector("#cross").innerText = 0;
document.querySelector("#circle").innerText = 0;
playerX = [];
playerO = [];
const winCond = [[1 ,2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
function doesWin(player) {
    for (let win of winCond) {
        if (win.every(pattern => player.includes(pattern))===true) {
            return true;
        };
    };
    return false;
};
function disableButtons() {
    box1.disabled = true;
    box2.disabled = true;
    box3.disabled = true;
    box4.disabled = true;
    box5.disabled = true;
    box6.disabled = true;
    box7.disabled = true;
    box8.disabled = true;
    box9.disabled = true;
};
let box1 = document.querySelector(".first");
box1.addEventListener("click", () => {
    if (turn==="X") {
        box1.classList.add("oneX");
        turn = "O";
        playerX.push(1);
        playerX.sort();
    } else {
        box1.classList.add("oneO");
        turn = "X";
        playerO.push(1);
        playerO.sort();
    };
    box1.disabled = true;
    if (doesWin(playerX)===true) {
        document.querySelector("#cross").innerText++;
        disableButtons();
    };
    if (doesWin(playerO)===true) {
        document.querySelector("#circle").innerText++;
        disableButtons();
    };
});
let box2 = document.querySelector(".second");
box2.addEventListener("click", () => {
    if (turn==="X") {
        box2.classList.add("twoX");
        turn = "O";
        playerX.push(2);
        playerX.sort();
    } else {
        box2.classList.add("twoO");
        turn = "X";
        playerO.push(2);
        playerO.sort();
    };
    box2.disabled = true;
    if (doesWin(playerX)===true) {
        document.querySelector("#cross").innerText++;
        disableButtons();
    };
    if (doesWin(playerO)===true) {
        document.querySelector("#circle").innerText++;
        disableButtons();
    };
});
let box3 = document.querySelector(".third");
box3.addEventListener("click", () => {
    if (turn==="X") {
        box3.classList.add("threeX");
        turn = "O";
        playerX.push(3);
        playerX.sort();
    } else {
        box3.classList.add("threeO");
        turn = "X";
        playerO.push(3);
        playerO.sort();
    };
    box3.disabled = true;
    if (doesWin(playerX)===true) {
        document.querySelector("#cross").innerText++;
        disableButtons();
    };
    if (doesWin(playerO)===true) {
        document.querySelector("#circle").innerText++;
        disableButtons();
    };
});
let box4 = document.querySelector(".fourth");
box4.addEventListener("click", () => {
    if (turn==="X") {
        box4.classList.add("fourX");
        turn = "O";
        playerX.push(4);
        playerX.sort();
    } else {
        box4.classList.add("fourO");
        turn = "X";
        playerO.push(4);
        playerO.sort();
    };
    box4.disabled = true;
    if (doesWin(playerX)===true) {
        document.querySelector("#cross").innerText++;
        disableButtons();
    };
    if (doesWin(playerO)===true) {
        document.querySelector("#circle").innerText++;
        disableButtons();
    };
});
let box5 = document.querySelector(".fifth");
box5.addEventListener("click", () => {
    if (turn==="X") {
        box5.classList.add("fiveX");
        turn = "O";
        playerX.push(5);
        playerX.sort();
    } else {
        box5.classList.add("fiveO");
        turn = "X";
        playerO.push(5);
        playerO.sort();
    };
    box5.disabled = true;
    if (doesWin(playerX)===true) {
        document.querySelector("#cross").innerText++;
        disableButtons();
    };
    if (doesWin(playerO)===true) {
        document.querySelector("#circle").innerText++;
        disableButtons();
    };
});
let box6 = document.querySelector(".sixth");
box6.addEventListener("click", () => {
    if (turn==="X") {
        box6.classList.add("sixX");
        turn = "O";
        playerX.push(6);
        playerX.sort();
    } else {
        box6.classList.add("sixO");
        turn = "X";
        playerO.push(6);
        playerO.sort();
    };
    box6.disabled = true;
    if (doesWin(playerX)===true) {
        document.querySelector("#cross").innerText++;
        disableButtons();
    };
    if (doesWin(playerO)===true) {
        document.querySelector("#circle").innerText++;
        disableButtons();
    };
});
let box7 = document.querySelector(".seventh");
box7.addEventListener("click", () => {
    if (turn==="X") {
        box7.classList.add("sevenX");
        turn = "O";
        playerX.push(7);
        playerX.sort();
    } else {
        box7.classList.add("sevenO");
        turn = "X";
        playerO.push(7);
        playerO.sort();
    };
    box7.disabled = true;
    if (doesWin(playerX)===true) {
        document.querySelector("#cross").innerText++;
        disableButtons();
    };
    if (doesWin(playerO)===true) {
        document.querySelector("#circle").innerText++;
        disableButtons();
    };

});
let box8 = document.querySelector(".eighth");
box8.addEventListener("click", () => {
    if (turn==="X") {
        box8.classList.add("eightX");
        turn = "O";
        playerX.push(8);
        playerX.sort();
    } else {
        box8.classList.add("eightO");
        turn = "X";
        playerO.push(8);
        playerO.sort();
    };
    box8.disabled = true;
    if (doesWin(playerX)===true) {
        document.querySelector("#cross").innerText++;
        disableButtons();
    };
    if (doesWin(playerO)===true) {
        document.querySelector("#circle").innerText++;
        disableButtons();
    };
});
let box9 = document.querySelector(".ninth");
box9.addEventListener("click", () => {
    if (turn==="X") {
        box9.classList.add("nineX");
        turn = "O";
        playerX.push(9);
        playerX.sort();
    } else {
        box9.classList.add("nineO");
        turn = "X";
        playerO.push(9);
        playerO.sort();
    };
    box9.disabled = true;
    if (doesWin(playerX)===true) {
        document.querySelector("#cross").innerText++;
        disableButtons();
    };
    if (doesWin(playerO)===true) {
        document.querySelector("#circle").innerText++;
        disableButtons();
    };
});


document.querySelector(".reset").addEventListener("click", () => {
    box1.classList.remove("oneX", "oneO");
    box2.classList.remove("twoX", "twoO");
    box3.classList.remove("threeX", "threeO");
    box4.classList.remove("fourX", "fourO");
    box5.classList.remove("fiveX", "fiveO");
    box6.classList.remove("sixX", "sixO");
    box7.classList.remove("sevenX", "sevenO");
    box8.classList.remove("eightX", "eightO");
    box9.classList.remove("nineX", "nineO");
    box1.disabled = false;
    box2.disabled = false;
    box3.disabled = false;
    box4.disabled = false;
    box5.disabled = false;
    box6.disabled = false;
    box7.disabled = false;
    box8.disabled = false;
    box9.disabled = false;
    playerX = [];
    playerO = [];
    gameTurn==="X" ? gameTurn = "O" : gameTurn = "X";
});
let gameTurn = "X";
let turn = gameTurn;

document.querySelector(".home").addEventListener("click", () => {
    document.querySelector("#game").style.display = "none";
    document.querySelector("h1").style.display = "block";
    document.querySelector(".box").style.display = "flex";
})