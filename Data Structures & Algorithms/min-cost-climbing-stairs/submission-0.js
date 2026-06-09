class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let n = cost.length;
        const minCost = new Array(n + 1).fill(0);

        for(let i=2;i<=n;i++){
            minCost[i]= Math.min((minCost[i-1]+cost[i-1]),(minCost[i-2]+cost[i-2]));
        }
        return minCost[n];
    }
}
