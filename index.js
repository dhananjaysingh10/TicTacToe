let validMoveSound = new Audio('play.mp3');
let inValidMoveSound = new Audio('invalidmove01.mp3');
let gameOver = new Audio('win.mp3');
let resetSound = new Audio('chessMove.mp3');
let currMove = 'X';
let isGameOver = 0;
//Changing Curr Move
function changeTurn(){
    return currMove === 'X'?'O':'X';
}
function allBoxesFilled() {
    let boxtext = document.getElementsByClassName('boxText');
    for (let i = 0; i < boxtext.length; i++) {
        if (boxtext[i].innerText === '') {
            return false; // If any box is empty, return false
        }
    }
    return true; // All boxes are filled
}

//Check win after each move 
function checkWin(){
    let boxtext = document.getElementsByClassName('boxText');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        if(boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[1]].innerText === boxtext[e[2]].innerText && boxtext[e[0]].innerText !== ''){
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + ' WON';
            isGameOver = 1;
            gameOver.play();
            return;
            // reset();
        }
    }

    )
    // If no one wins and all boxes are filled, it's a draw
    if (allBoxesFilled()) {
        document.querySelector(".info").innerText = 'Draw! No one wins.';
        isGameOver = 1;
        return;
    }

}

// Reset
function resetGame() {
    let boxTexts = document.getElementsByClassName("boxText"); // Change variable name to avoid conflict
    for (let i = 0; i < boxTexts.length; i++) {
        boxTexts[i].innerHTML = '';
    }
    isGameOver = 0;
    resetSound.play();
    currMove = 'X';
    document.querySelector(".info").innerHTML = `${currMove}'s turn`;
}

// Event listeners
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxText");
    element.addEventListener('click', () => {
        if (boxtext.innerHTML === '' && isGameOver !== 1) {
            boxtext.innerHTML = currMove;
            currMove = changeTurn();
            validMoveSound.play();
            checkWin();
            if (!isGameOver) {
                document.querySelector(".info").innerHTML = `${currMove}'s turn`;
            }
        } else {
            inValidMoveSound.play();
        }
    });
});
// Reset button event listener
let rstBtn = document.getElementById("reset");
rstBtn.addEventListener('click', resetGame);
