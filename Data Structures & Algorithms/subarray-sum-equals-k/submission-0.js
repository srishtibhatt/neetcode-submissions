class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const prefixSum=new Map();
        prefixSum.set(0,1);
        let currSum=0;
        let totalCount=0;
        for(let num of nums){
            currSum+=num;
            let diff= currSum-k;
            totalCount+=prefixSum.get(diff) ||0;
            prefixSum.set(currSum,(prefixSum.get(currSum)||0)+1);
        }
        return totalCount;
    }
}
