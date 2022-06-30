const container = document.getElementById("container");

for (i=0; i<16; i++) {
    let newSquare = document.createElement("div");
    newSquare.className = "square";
    container.appendChild(newSquare);
}

const squares = Array.from(document.getElementsByClassName("square"));

function changeColor(e) {
    console.log(e.target);
    e.target.style.backgroundColor = "black";
}

squares.forEach(square => square.addEventListener("mouseover", changeColor));
