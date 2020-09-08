function numberOfIsland(grid) {
    let numIsland;
    let maxCount = -Infinity;
    let count = 0;
    if(grid.length === 0) return;
    let nr = grid.length;
    let nc = grid[0].length;
    for(let r= 0; r<nr; r++) {
        for(let c=0; c<nc; c++) {
            numIsland++;
            count = dfs(grid, r, c, nr, nc)
            maxCount = Math.max(count, maxCount);
        }
    }

    return numIsland;
}

function dfs(grid, r, c, nr, nc) {
    let count = 0;
    if( r< 0 || c< 0 || r >= nr || c >= nc || grid[r][c] == "0") {
        return count;
    }
    count++;
    count += dfs(grid, r-1, c, nr, nc);
    count += dfs(grid, r, c-1, nr, nc);
    count += dfs(grid, r, c-1, nr, nc);
    count += dfs(grid, r, c+1, nr, nc);

    return count;
}