function orangesRotting (grid) {
    let minutes = 0;
    let numRotten = [];
    let numFresh = 0;
    for(let i = 0; i<grid.length; i++) {
        for(let j = 0; j<grid[i].length; j++) {
            if (grid[i][j] == 2) numRotten.push([i,j]);
            if(grid[i][j] == 1) numFresh++;
        }
    }

    while(numRotten.length && numFresh) {
        let newNumRotten = [];
        while(numRotten.length) {
            let rotten = numRotten.shift();
            let numRotten = bfs(grid, rotten[0], rotten[1], newNumRotten);
            minutes++;
            numFresh -= numRotten
        }
    }
    if(numFresh !== 0) return -1
    return minutes;
}

function bfs(grid, i, j, numRotten) {
    let infected = 0;
    if(i > 0 && grid[i-1][j] == 1) {
        grid[i-1][j] = 2;
        infected++;
        numRotten.push([i-1, j])
    }
    if(j> 0 && grid[i][j-1] == 1) {
        grid[i][j-1] = 2;
        infected++;
        numRotten.push([i,j-1]);
    } 
    if(i<grid.length && grid[i+1][j] == 1) {
        grid[i+1][j] = 2;
        infected++;
        numRotten.push([i+1, j]);
    }
    if(j<grid[0].length && grid[i][j+1] ===1) {
        grid[i][j+1] = 2;
        infected++;
        numRotten.push([i, j+1]);
    }
    return infected;

}