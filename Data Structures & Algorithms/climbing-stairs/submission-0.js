class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        function dfs(i){
            if(i===0) return 1;
            if(i===1) return 1;
            let left=dfs(i-1);
            let right=dfs(i-2);
            return(left+right);
        }
        return dfs(n);
    }
}
