const restartBtn = document.querySelector(".restart button");
const boxes = document.querySelectorAll(".btn");
const popupRef = document.querySelector(".popup");
const msgRef = document.querySelector("#msg");
const newBtn = document.querySelector("#newGame");

let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];

// Player X plays First
let xTurn = true;
let count = 0;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (xTurn) {
      //If the trun is of player X
      box.innerText = "X";
      xTurn = false;
    } else {
      box.innerText = "O";
      xTurn = true;
    }
    box.disabled = true; //So that the clicked btn cant be changed if it is clicked again
    checkWinner();
  });
});
const checkWinner = () => {
  for (let pattern of winningPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val == pos2Val && pos2Val == pos3Val) {
        console.log("Winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};
const disableBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    popupRef.classList.add("hide");
  }
};
const showWinner = (winner) => {
  msgRef.innerText = `Congratulations the winner is ${winner} 🎉🎊`;
  popupRef.classList.remove("hide");
  disableBox();
};

const resetGame = () => {
  enableBox();
  xTurn = true;
};
restartBtn.addEventListener("click", () => {
  resetGame();
});
newBtn.addEventListener("click", () => {
  enableBox();
});
