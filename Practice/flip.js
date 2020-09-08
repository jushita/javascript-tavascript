// A 2d array has 0 and 1 as values. In one flip, 
// 0's are changed to 1 if and only if any of the neighbors 
// (left, right, top, bottom) is 1. Return the total number of 
// flips required to convert the whole grid to 1's


function flipBoard(grid) {
    let ones = [];
    let flip = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === 1) ones.push([i, j]);
        }
    }
    while(ones.length) {
        let newOnes = [];
        while(ones.length) {
            let one = ones.shift();
            bfs(grid, one[0], one[1], newOnes);
        }
        flip++;
        ones = newOnes;
    }
    return flip-1;
}


var bfs = function(grid, i, j, ones) {
    let flipped = 0;
    if(i>0 && grid[i-1][j] === 0) {
        grid[i-1][j] = 1;
        flipped++;
        ones.push([i-1, j])
    }
    if(j>0 && grid[i][j-1] === 0) {
        grid[i][j-1] = 1;
        flipped++;
        ones.push([i, j-1]);
    }
    if(i<grid.length-1 && grid[i+1][j] === 0) {
        grid[i+1][j] = 1;
        flipped++;
        ones.push([i+1, j]);
    }
    if(j < grid[0].length-1 && grid[i][j+1] === 0) {
        grid[i][j+1] = 1;
        flipped++;
        ones.push([i, j+1]);
    }
    return flipped;
    
}
console.log(flipBoard([[0,0,0], [0,0,1]]))

//[1,0,0,0]
//[0,0,0,1]
//[1,0,0,1]
//[0,0,1,0]