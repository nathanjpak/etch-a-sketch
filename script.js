const container = document.getElementById("container");
const numberButton = document.getElementById("numberButton")

numberButton.addEventListener("click", function() {
    let rows = prompt("How many rows? (min: 1, max: 50)", 10);
    if (rows >=1 && rows <= 50) {
        clearGrid();
        loadGrid(rows);
    } else {
        alert("Please enter a valid number.");
    }
})

function loadGrid(rows) {
    rows = Math.floor(rows);
    container.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    num = rows*rows;
    loadSquares(num);
}

function loadSquares(num) {
    for (i=0; i<num; i++) {
        let newSquare = document.createElement("div");
        newSquare.className = "square";
        container.appendChild(newSquare);
    }
    const squares = Array.from(document.getElementsByClassName("square"));
    squares.forEach(square => square.addEventListener("mouseover", changeColor));
}

function clearGrid() {
    while (container.firstElementChild) {
        let square = container.firstElementChild;
        container.removeChild(square);
    }
}

function changeColor(e) {
    e.target.style.backgroundColor = "black";
}

loadGrid(4.2);
