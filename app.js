const gridContainer = document.querySelector("#grid-container");
const resetButton = document.querySelector("#reset-button");

let gridSize = 16;
gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
createGrid();
resetButton.addEventListener("click", resetGrid);


function addColor(e) {
    e.target.style.backgroundColor = "black";
};

function resetGrid(){
    gridSize = prompt("New Grid Size");

    if (gridSize !== null) {
        gridSize = parseInt(gridSize);
        if (gridSize < 1 || gridSize > 100 || Number.isNaN(gridSize)){
            alert("Enter a number between 1 and 100.");
            resetGrid();
        }
        else {
            while (gridContainer.hasChildNodes()) {
                gridContainer.removeChild(gridContainer.firstChild);
            }
            createGrid();
        }
    }
};

function createGrid() {
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    for (i = 0; i < gridSize * gridSize; i++) {
        let gridItem = document.createElement("div");
        gridItem.classList = "grid-item";
        gridContainer.appendChild(gridItem);
        gridItem.addEventListener("mouseover", addColor);
    };
};
