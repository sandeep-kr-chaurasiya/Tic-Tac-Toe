let boxes = document.querySelectorAll('.inputbtn')
let newgamebtn = document.querySelector("#ngamebtn")
let resetbtn = document.querySelector("#resetbtn")
let winner = document.querySelector(".winner")
let turnX = true

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


// -----------------To handel moves ---------//
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX) {
            box.innerText = "X"
            box.style.color = "black"
            turnX = false
        }
        else {
            box.innerText = "O"
            box.style.color = "red"
            turnX = true
        }
        box.disabled = true;
        checkwinner()
    });
});


//------------ To check winner-------------//
const checkwinner = () => {
    for (let pattern of winpattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            winner.innerText = `Winner is ${pos1val}`;
            boxes[pattern[0]].style.backgroundColor = "rgb(144, 214, 144)";
            boxes[pattern[1]].style.backgroundColor = "rgb(144, 214, 144)";
            boxes[pattern[2]].style.backgroundColor = "rgb(144, 214, 144)";
            newgamebtn.style.display = "block";
            resetbtn.style.display = "none";
            for (let box of boxes) {
                box.disabled = true;
            }
            return;
        }
    }
    //---- Check for draw ---//
    
    let draw = true;
    for (let box of boxes) {
        if (box.innerText === "") {
            draw = false;
            break;
        }
    }
    if (draw) {
        winner.innerText = "Match Draw";
        newgamebtn.style.display = "block";
        resetbtn.style.display = "none";
    }
};
// -----------To reset the game--------------- //
const resetgame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        box.style.backgroundColor = "white";
    });
    turnX = true;
    winner.innerText = "Winner is__";
};

// -----------To start new game--------------- //
const newgame = () => {
    resetgame();
    newgamebtn.style.display = "none";
    resetbtn.style.display = "block";
};

resetbtn.addEventListener("click", resetgame);
newgamebtn.addEventListener("click", newgame);