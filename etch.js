const grid = document.getElementById('grid')

function makeGrid(gridSize) {
    for (let y = 0; y < gridSize; y++) {
        //Create a div container for every row of cells equal to the height of the grid
        const row = document.createElement('div');
        row.className = 'grid-row';
            for (let x = 0; x < gridSize; x++) {
                //Create div cells equal to the size of the grid to fill and add each one to the row
                const cell = document.createElement('div');
                cell.className = 'grid-cell';
                row.append(cell)
            }
        //Append the whole row to the grid
        grid.append(row);
    }
}

function handleHover(evt) {
    if (evt.target.classList.contains('grid-cell')) {
        console.log("HOVER")
        evt.target.classList.add('cell-filled');
    }
}

function reset() {
    const newSizeString = prompt('How many squares per side in the new grid? (Max 100)', '16')
    let newSize = parseInt(newSizeString);
    //Enforce that newSize needs to be 100 or less, and needs to be a number. Default to 16 if we weren't passed a number.
    if (isNaN(newSize)) {
        newSize = 16;
    } else if (newSize > 100) {
        newSize = 100;
    }
    //Clear the existing contents of the grid
    grid.textContent = ''
    //Make a new grid with our new size
    makeGrid(newSize);
}

grid.addEventListener('mouseover', handleHover)
document.getElementById('reset').addEventListener('click', reset)

document.onload(makeGrid(16));
