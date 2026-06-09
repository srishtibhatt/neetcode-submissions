/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const mp = new Map();
        return this.dfs(node,mp);
    }

    dfs(n,visited){
            if(n===null) return null;

            if(visited.has(n)){
                return visited.get(n);
            }
        //clone the n in map
        const clone = new Node(n.val);
        visited.set(n,clone); //set the n with cloned n value

        //recursively clone all the neighors 
        for(const neighbor of n.neighbors){
            clone.neighbors.push(this.dfs(neighbor,visited));
        }
        return clone;
      }
}
