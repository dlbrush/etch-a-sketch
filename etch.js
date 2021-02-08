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

makeGrid(16);
