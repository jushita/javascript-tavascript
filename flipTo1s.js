var orangesRotting = function(grid) {
    let rottenOranges = [];
    let numFresh = 0;
    let minutes = 0;
    // Push rotten oranges to the stack and count fresh oranges
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === 2) {
                rottenOranges.push([i, j]);
            }
            if(grid[i][j] === 1) {
                numFresh++;
            }
        }
    }
    
    while(rottenOranges.length && numFresh) {
        let newrottenOranges = []; // queue for next minute
        while(rottenOranges.length) {
            let rottenOrange = rottenOranges.shift();
            let newRottens = infectOthers(grid, rottenOrange[0], rottenOrange[1], newrottenOranges);
            numFresh -= newRottens;
        }
        minutes++;
        rottenOranges = newrottenOranges;
    }
    if(numFresh !== 0) {
        return -1;
    }
    return minutes;
};


// Infect surrounding oranges
// Return the number of newly infected oranges
var infectOthers = function(grid, i, j, rottenOranges) {
    let infected = 0;
    if(i > 0 && grid[i-1][j] === 1) {
        grid[i-1][j]++;
        infected++;
        rottenOranges.push([i-1, j])
    }
    if(j > 0 && grid[i][j-1] === 1) {
        grid[i][j-1]++;
        infected++;
        rottenOranges.push([i, j-1])
    }
    if(i < grid.length-1 && grid[i+1][j] === 1) {
        grid[i+1][j]++;
        infected++;
        rottenOranges.push([i+1, j]);
        
    }
    if(j < grid[0].length-1 && grid[i][j+1] === 1) {
        grid[i][j+1]++;
        infected++;
        rottenOranges.push([i, j+1]);
    }
    return infected;
    
}