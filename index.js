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
            // reset();
        }
    }

    )
}
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
                    let boxtext = element.querySelector(".boxText");
                    element.addEventListener('click', ()=>{
                        if(boxtext.innerHTML==='' && isGameOver!==1){
                            boxtext.innerHTML=currMove;
                            currMove = changeTurn();
                            validMoveSound.play();
                            checkWin();
                            if(!isGameOver){
                            document.querySelector(".info").innerHTML=`${currMove}'s turn`
                            }
                        }else{
                            inValidMoveSound.play();
                        }
                        // changeTurn();
                    } )
})

// Reset
let rstBtn = document.getElementById("reset");
rstBtn.addEventListener('click', 
()=>{
    let boxes = document.getElementsByClassName("boxText");
    let i = 0;
    Array.from(boxes).forEach(element=>{
                        boxes[i].innerHTML='';
                        i++;
                        isGameOver = 0;
                        resetSound.play();
                        currMove = 'X';
                        if(!isGameOver){
                            document.querySelector(".info").innerHTML=`${currMove}'s turn`
                            }
                        })
}
)
function allFilled(){
    let boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach(element=>{
                    let boxtext = element.querySelector(".boxText");
                    element.addEventListener('click', ()=>{
                        if(boxtext.innerHTML==='' && isGameOver!==1){
                            boxtext.innerHTML=currMove;
                            currMove = changeTurn();
                            validMoveSound.play();
                            checkWin();
                            if(!isGameOver){
                            document.querySelector(".info").innerHTML=`${currMove}'s turn`
                            }
                        }else{
                            inValidMoveSound.play();
                        }
                        // changeTurn();
                    } )
})
}
// function reset(){
//     let boxes = document.getElementsByClassName("boxText");
//     let i = 0;
//     Array.from(boxes).forEach(element=>{
//                         boxes[i].innerHTML='';
//                         i++;
//                         isGameOver = 0;
//         })

// }