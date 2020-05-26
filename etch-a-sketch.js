//Initializes grid
let gridSize = 256;
let colorChoice = 'black';

// Event to highlight the grid on mouse over
const fillInGrid = document.querySelectorAll(".gridSquares");
const resetButton = document.querySelector("#reset");
const containerFormatter = document.querySelector("#container");
const colorButton = document.querySelector("#colorSelector");
const whiteButton = document.querySelector("#whiteSelector");
const blackButton = document.querySelector("#blackSelector");

// Function to create grid
function gridCreator(gridSize) {
    let content = "";
    for (let i = 0; i < gridSize; i++) {
        content += "<div class='gridSquares'></div>";
    }
    document.getElementById("container").innerHTML = content;
}

// Function to generate a new grid, initialized after hitting the reset button
function newGrid() {
    let newGridColumns = prompt("How many columns would you like the new Etch-A-Sketch to be?");
    let newGridRows = prompt("How many rows would you like the new Etch-A-Sketch to be?");
    if (isNaN(newGridColumns) === true || isNaN(newGridRows) === true || newGridColumns === null || newGridRows === null) {
        alert("Please enter a number value");

    } else containerFormatter.style.gridTemplateColumns = `repeat(${newGridColumns}, minmax(1px,1fr))`;
    containerFormatter.style.gridTemplateRows = `repeat(${newGridRows}, minmax(1px,1fr))`;
    let gridSize = (newGridRows * newGridColumns);
    gridCreator(gridSize);
}
gridCreator(gridSize);


containerFormatter.addEventListener('mouseover', function(e) {
    if ((e.target.classList.contains('gridSquares')) && (colorChoice === 'RGBMode')) {
        e.target.style.backgroundColor = "#" + ('00000' + (Math.random() * (1 << 24) | 0).toString(16)).slice(-6);
    } else
        e.target.style.backgroundColor = colorChoice;
    }
);


// Listener event for the reset button
resetButton.addEventListener('click', (e) => {
    newGrid();
    }
);

//Buttons for color selection
colorButton.addEventListener('click', (e) => {
    colorChoice = 'RGBMode';
    }
);

whiteButton.addEventListener('click', (e) => {
        colorChoice = 'white';
    }
);

blackButton.addEventListener('click', (e) => {
        colorChoice = 'black';
    }
);