class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const money=new Array(nums.length).fill(0);
        money[0]=nums[0];
        money[1]=Math.max(nums[0],nums[1]);

        for(let i=2;i<=nums.length;i++){
            money[i]=Math.max(money[i-1],nums[i]+money[i-2]);
        }
        return money[nums.length-1];
    }
}
