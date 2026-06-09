class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    //two methods are written , one with if condition other with simply MATH.min or max 
    maxProfit(prices) {
        //[10,1,5,6,7,1]
        let buyPrice = prices[0];
        let profit=0;

        for(let i=1;i<prices.length;i++){
            // if(prices[i]<buyPrice){
            //     buyPrice=prices[i];
            // }
            //OR
            buyPrice= Math.min(buyPrice,prices[i]);
            // else{
            // let currentProfit=prices[i]-buyPrice;
            profit=Math.max((prices[i]-buyPrice),profit);
            // }
        }
        return profit;
    }
}
