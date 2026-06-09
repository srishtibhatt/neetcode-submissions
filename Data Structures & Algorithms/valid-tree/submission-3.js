class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {

        if(edges.length!==n-1){
            return false;
        }

        // const graph=Array.from({length:n}, ()=>[]);
        const graph=Array.from({length:n}, ()=>[]);
        for(const [u,v] of edges){
            // if (!graph.has(u)) {graph.set(u, []);}
            // if (!graph.has(v)) {graph.set(v, []);}
            graph[u].push(v);
            graph[v].push(u);
        }

        let visited=new Set();
        function dfs(node,parent){
            visited.add(node);

            for(let neighbor of graph[node]){
                if(neighbor===parent){
                    continue;
                }
                if(visited.has(neighbor)) return false;
                if(!dfs(neighbor,node)){
                    return false;
                    }
            }
            return true;
        }
        if(!dfs(0,-1)) return false; //start dfs from node 0 with no parent -1
        return visited.size===n;
    }
}
