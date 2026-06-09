class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        // const dp = Array.from({ length: m }, () => Array(n).fill(-1));
       const dp =Array.from({ length: m }, () => Array(n).fill(-1));

        for(let i=0;i<m;i++){
            for(let j=0;j<n;j++){
                if(i===0 || j===0){
                    dp[i][j]=1;
                }else{
                    dp[i][j]= dp[i-1][j] + dp[i][j-1];
                }
            }
            //return the last cell of the grid - final number of ways to reach   
        }
        return dp[m-1][n-1]; 
    }
}
