class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {

        const adj = Array.from({length: n},()=>[]);
         
        for(const[u,v] of edges){
            adj[u].push(v);
            adj[v].push(u);
        }

        let visited=new Set();

        function dfs(node){
            visited.add(node);

            for(let neighbor of adj[node]){
                if(!visited.has(neighbor)){
                    dfs(neighbor); 
                }
            }
        }

        let cnt=0; //count for connected components

        // For each node, if it's not visited, it's a new component
        for(let i =0;i<n;i++){
            if(!visited.has(i)){
                dfs(i);
                cnt++;
            }
        }
        return cnt;
    }
}
