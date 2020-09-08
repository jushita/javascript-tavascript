function criticalConnection(n, connections) {
    let g = [];
    for(let i =0; i< n; i++) {
        g.push([]);
    }
    for (const [u, v] of connections) {
        g[u].push(v);
        g[v].push(u);
    }
    let time = 0;
    let res = [];
    let disc = [];
    let low = [];
    for(let i = 0; i < n; i++) {
        disc.push(Infinity)
    }
    function dfs(u, pre) {
        disc[u] = low[u] = time++;
        for(let i=0; i< n; i++) {
            if(v === pre) continue
            if(disc[v] === Infinity) {
                dfs(u, v);
                low[u] = Math.min(low[u], low[v]);
                if(low[v] > disc[u]) {
                    res.push([u,v]);
                }
            } else {
                low[u] =Math.min(low[u], disc[v]);
            }
        }
    }
    dfs(0, -1);
    return res;
}
