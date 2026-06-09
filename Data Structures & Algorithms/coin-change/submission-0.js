class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        // if(amount===0) return 0;
        const minCoinDP= new Array(amount+1).fill(amount+1);
        minCoinDP[0]=0;
        for(let i=1;i<=amount;i++){
            for(let j=0;j<coins.length;j++){
                if(coins[j]<=i){
                    minCoinDP[i]= Math.min(minCoinDP[i],1+minCoinDP[i-coins[j]]);
                }
            }
        }
        return minCoinDP[amount]>amount ? -1 : minCoinDP[amount];
    }
}
